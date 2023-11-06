import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ezmdimgjjilbbmvpyyhx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6bWRpbWdqamlsYmJtdnB5eWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3MTc1MzksImV4cCI6MjAxMTI5MzUzOX0.C_nAiBfmo8mlsNmBfalA7BFxo7lIfw1-QsxawBPxMWM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
