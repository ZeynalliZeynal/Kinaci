import { supabase } from '~/services/supabase.js';

export const getBlogs = async (filters) => {
  let query = supabase.from('blogs').select('*');

  if (filters) {
    if (filters.title) query = query.ilike('title', `%${filters.title}%`);
    if (filters.tags) {
      const searchTags = filters.tags.split(',');
      query = query.or(searchTags.map((tag) => `tags.cs.{${tag}}`).join(','));
    }
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
};

export const getBlog = async (id) => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const getComments = async (blog_id) => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('blog_id', blog_id);

  if (error) throw new Error(error.message);

  return data;
};

export const postComment = async (newComment) => {
  const { data, error } = await supabase
    .from('comments')
    .insert([newComment])
    .select();

  if (error) throw new Error(error.message);

  return data;
};

export const deleteComment = async (commentId) => {
  const { data, error } = await supabase
    .from('comments')
    .delete()
    .eq('id', commentId);

  if (error) throw new Error(error.message);

  return data;
};

export const getReplies = async (comment_id) => {
  const { data, error } = await supabase
    .from('replies')
    .select('*')
    .eq('comment_id', comment_id);

  if (error) throw new Error(error.message);

  return data;
};

export const postReply = async (newReply) => {
  const { data, error } = await supabase
    .from('replies')
    .insert([newReply])
    .select();

  if (error) throw new Error(error.message);

  return data;
};

export const deleteReply = async (commentId) => {
  const { data, error } = await supabase
    .from('replies')
    .delete()
    .eq('id', commentId);

  if (error) throw new Error(error.message);

  return data;
};
