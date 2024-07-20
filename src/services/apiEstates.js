import { supabase } from './supabase';

export const getEstates = async ({ filter, method }) => {
  let query = supabase
    .from('estates')
    .select(
      '*, types(*), features(*), cities(*), places(*), rooms(*), estate_status(*)',
    );

  if (filter) query = query[method || 'eq'](filter.field, filter.value);
  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
};
