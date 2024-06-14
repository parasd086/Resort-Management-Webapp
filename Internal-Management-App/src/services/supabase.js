import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dekpawffkmzweucfblxj.supabase.co";
const supabaseKey = "xxxx";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
