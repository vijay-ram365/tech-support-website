import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bpbdbrfvzvexcmpmrtjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwYmRicmZ2enZleGNtcG1ydGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNzgyOTYsImV4cCI6MjA0NDc1NDI5Nn0.tQ1EKy9UjAa0oTNuJj6lLLMSRQn4Y0rpe_swbWMkEEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
