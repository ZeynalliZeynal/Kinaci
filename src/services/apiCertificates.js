import { supabase } from '~/services/supabase.js';

export const getCertificates = async () => {
  const { data: certificates, error } = await supabase
    .from('certificates')
    .select('*');
  if (error) throw new Error(error.message);

  return certificates;
};
