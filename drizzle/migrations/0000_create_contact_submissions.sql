CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  book_title text,
  author_name text,
  book_genre text,
  book_link text,
  help_topic text,
  additional_info text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
-- No policies: the table is intentionally locked. Only server-side code
-- with the service-role client (the validated public form endpoint) writes
-- and reads submissions.