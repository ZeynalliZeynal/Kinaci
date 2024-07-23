import { supabase } from '~/services/supabase.js';

export const getReviews = async () => {
  let query = supabase.from('reviews').select('*');

  const { data, error } = await query;

  if (error) throw new Error(error.message);
  return data;
};
