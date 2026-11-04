/*
# Create enquiries table

1. New Tables
- `enquiries`
  - `id` (uuid, primary key)
  - `request_type` (text, required): what the visitor asked for (quote, sample, technical question, custom extraction)
  - `name` (text, required)
  - `company` (text, optional)
  - `email` (text, required)
  - `phone` (text, optional)
  - `details` (text, required): products, assay levels and quantities
  - `created_at` (timestamptz, default now())

2. Security
- Row level security is enabled on `enquiries`.
- Website visitors (anon role) may only INSERT new enquiries. They cannot read, update or delete any enquiry.
- Length limits are enforced in the database so oversized submissions are rejected.
- Enquiries are read by the business through the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_type text NOT NULL CHECK (char_length(request_type) BETWEEN 1 AND 100),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  company text NOT NULL DEFAULT '' CHECK (char_length(company) <= 200),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 40),
  details text NOT NULL CHECK (char_length(details) BETWEEN 1 AND 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
