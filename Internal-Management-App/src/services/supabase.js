import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dekpawffkmzweucfblxj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRla3Bhd2Zma216d2V1Y2ZibHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MzkzNTMsImV4cCI6MjAzMzQxNTM1M30.PQcydcco7m2hsQSJU3DMXINzpVkcf86XB9J11wwpKC0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
