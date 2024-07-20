import { supabase } from './supabase';

export const getEstateFilters = async () => {
  const { data: estateStatuses, error: statusesError } = await supabase
    .from('estate_status')
    .select('*');
  const { data: estateTypes, error: typesError } = await supabase
    .from('types')
    .select('*');
  const { data: estateFeatures, error: featuresError } = await supabase
    .from('features')
    .select('*');
  const { data: estateCities, error: citiesError } = await supabase
    .from('cities')
    .select('*');
  const { data: estatePlaces, error: placesError } = await supabase
    .from('places')
    .select('*');
  const { data: estateRooms, error: roomsError } = await supabase
    .from('rooms')
    .select('*');

  if (
    statusesError &&
    typesError &&
    featuresError &&
    citiesError &&
    placesError &&
    roomsError
  )
    throw new Error('Couldnt get filters');

  return {
    estateStatuses,
    estateTypes,
    estateFeatures,
    estateCities,
    estatePlaces,
    estateRooms,
  };
};

export const getEstateTypes = async () => {
  const { data, error } = await supabase.from('types').select('*');

  if (error) throw new Error(error.message);

  return data;
};

export const getEstateFeatures = async () => {
  const { data, error } = await supabase.from('features').select('*');

  if (error) throw new Error(error.message);

  return data;
};

export const getEstateCities = async () => {
  const { data, error } = await supabase.from('cities').select('*');

  if (error) throw new Error(error.message);

  return data;
};

export const getEstatePlaces = async () => {
  const { data, error } = await supabase.from('places').select('*');

  if (error) throw new Error(error.message);

  return data;
};

export const getEstateRooms = async () => {
  const { data, error } = await supabase.from('rooms').select('*');

  if (error) throw new Error(error.message);

  return data;
};
