import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://efkmoikvwiohvtynmfwu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma21vaWt2d2lvaHZ0eW5tZnd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0MTk1NzUsImV4cCI6MjAzNjk5NTU3NX0.ICwrwhzO-TLumwcVmGSA9pJsm8Vb-l78UIP-hdgnvhI';
export const supabase = createClient(supabaseUrl, supabaseKey);

const service_role_key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma21vaWt2d2lvaHZ0eW5tZnd1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTQxOTU3NSwiZXhwIjoyMDM2OTk1NTc1fQ.X31KPMebDbXBziDZyi4SkzckoMqSJfg6p0Ox7d4_ryw';

export const adminAuthClient = createClient(supabaseUrl, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
