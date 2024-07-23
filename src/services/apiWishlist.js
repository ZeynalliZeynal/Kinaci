import { supabase } from '~/services/supabase.js';

export const getUserWishlist = async (user_id) => {
  const { data: wishlist, error } = await supabase
    .from('wishlist')
    .select('*, estates(id, title, status, rooms, type, area, place)')
    .eq('user_id', user_id);

  if (error) throw new Error(error.message);

  return wishlist;
};

export const addToWishlist = async (newItem) => {
  const { data, error } = await supabase
    .from('wishlist')
    .insert([newItem])
    .select();

  if (error) throw new Error(error.message);

  return data;
};

export const removeFromWishlist = async (estate_id) => {
  const { data, error } = await supabase
    .from('wishlist')
    .delete()
    .eq('estate_id', estate_id);

  if (error) throw new Error(error.message);

  return data;
};

export const emptyWishlist = async (user_id) => {
  const { data, error } = await supabase
    .from('wishlist')
    .delete()
    .eq('user_id', user_id);

  if (error) throw new Error(error.message);

  return data;
};
