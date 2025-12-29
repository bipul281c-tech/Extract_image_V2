import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabaseClient: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase environment variables not set. Email capture will be disabled.');
}

export const supabase = supabaseClient;

// Database types
export interface EmailSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  source: string;
  extraction_count: number | null;
}
