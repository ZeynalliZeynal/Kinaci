import { supabase } from '~/services/supabase.js';

export const getStats = async () => {
  const { data: stats, error } = await supabase.from('stats').select('*');
  if (error) throw new Error(error.message);

  return stats;
};
