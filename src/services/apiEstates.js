import { supabase } from './supabase';

export const getEstates = async ({ filter, method }) => {
  let query = supabase
    .from('estates')
    .select('*, features(*), cities(*), places(*), types(*)');

  if (filter) query = query[method || 'eq'](filter.field, filter.value);
  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
};

export const getFilteredEstates = async (filters) => {
  let query = supabase.from('estates').select('*');

  if (filters) {
    if (filters.minPrice) query = query.gte('price', filters.minPrice);
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
    if (filters.minSize) query = query.gte('area', filters.minSize);
    if (filters.maxSize) query = query.lte('area', filters.maxSize);
    if (filters.minFloor) query = query.gte('floors', filters.minFloor);
    if (filters.maxFloor) query = query.lte('floors', filters.maxFloor);
    if (filters.estateId) query = query.eq('id', filters.estateId);
    if (filters.minConstructorDate)
      query = query.gte('constructor_date', filters.minConstructorDate);
    if (filters.maxConstructorDate)
      query = query.lte('constructor_date', filters.maxConstructorDate);
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};
