import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source = 'extraction_prompt', extractionCount } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Supabase is configured
    if (!supabase) {
      console.warn('Supabase not configured, skipping email subscription');
      return NextResponse.json(
        { success: true, message: 'Email subscription recorded (demo mode)' },
        { status: 200 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('email_subscribers')
      .upsert(
        {
          email: trimmedEmail,
          source,
          extraction_count: extractionCount || null,
          subscribed_at: new Date().toISOString(),
        },
        {
          onConflict: 'email',
          ignoreDuplicates: false,
        }
      )
      .select()
      .single();

    if (error) {
      // Handle duplicate email gracefully
      if (error.code === '23505') {
        return NextResponse.json(
          { success: true, message: 'Already subscribed' },
          { status: 200 }
        );
      }

      console.error('Supabase error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to subscribe' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
