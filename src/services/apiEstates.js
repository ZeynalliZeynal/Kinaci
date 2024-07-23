import { supabase } from './supabase';

export const getEstates = async ({ filter, method }) => {
  let query = supabase.from('estates').select('*');

  if (filter) query = query[method || 'eq'](filter.field, filter.value);
  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
};
export const getEstate = async (id) => {
  const { data, error } = await supabase
    .from('estates')
    .select('*')
    .eq('id', id)
    .single();

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
    if (filters.status)
      query = query.eq(
        'status',
        filters.status === 'forSale' ? 'For Sale' : 'For Rent',
      );
    if (filters.types) query = query.in('type', filters.types.split(','));
    if (filters.features)
      query = query.in('feature', filters.features.split(','));
    if (filters.rooms) query = query.in('room', filters.rooms.split(','));
    if (filters.cities) query = query.in('city', filters.cities.split(','));
    if (filters.places) query = query.in('place', filters.places.split(','));
    if (filters.sortBy)
      query = query.order('price', {
        ascending: filters.sortBy.includes('Artan'),
      });
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};
