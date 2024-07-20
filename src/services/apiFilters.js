import { supabase } from './supabase';

export const getEstateTypes = async ({ field, value }) => {
  let query = supabase.from('types').select('*');

  if (field && value) query = query.eq(field, value).single();

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};

export const getEstateFeatures = async ({ field, value }) => {
  let query = supabase.from('features').select('*');

  if (field && value) query = query.eq(field, value).single();

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
};

export const getEstateCities = async ({ field, value }) => {
  let query = supabase.from('cities').select('*');

  if (field && value) query = query.eq(field, value);

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};

export const getEstatePlaces = async ({ field, value }) => {
  let query = supabase.from('places').select('*');

  if (field && value) query = query.eq(field, value);

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};

export const getEstateRooms = async ({ field, value }) => {
  let query = supabase.from('rooms').select('*');

  if (field && value) query = query.eq(field, value);

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};
