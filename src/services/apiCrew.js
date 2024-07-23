import { supabase } from '~/services/supabase.js';

export const getCrewData = async () => {
  const { data: crew, error } = await supabase.from('crew').select('*');
  if (error) throw new Error(error.message);

  return crew;
};
