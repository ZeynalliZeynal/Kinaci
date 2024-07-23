import { supabase } from './supabase';

export const getEstateTypes = async () => {
  let query = supabase.from('types').select('*');

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};

export const getEstateFeatures = async () => {
  let query = supabase.from('features').select('*');

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
};

export const getEstateCities = async () => {
  let query = supabase.from('cities').select('*');

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};

export const getEstatePlaces = async () => {
  let query = supabase.from('places').select('*');

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};

export const getEstateRooms = async () => {
  let query = supabase.from('rooms').select('*');

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};
