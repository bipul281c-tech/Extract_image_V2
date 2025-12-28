-- Create email_subscribers table for ExtractPics
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT DEFAULT 'extraction_prompt',
  extraction_count INT
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_subscribers_email ON email_subscribers(email);

-- Create index on subscribed_at for sorting
CREATE INDEX IF NOT EXISTS idx_email_subscribers_date ON email_subscribers(subscribed_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for the subscribe API)
CREATE POLICY "Allow anonymous inserts" ON email_subscribers
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow service role to read all
CREATE POLICY "Allow service role to read" ON email_subscribers
  FOR SELECT
  USING (auth.role() = 'service_role');
