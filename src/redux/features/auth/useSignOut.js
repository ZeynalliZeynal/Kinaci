import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signOut as signOutApi } from '~/services/apiAuth.js';
import { toast } from 'sonner';

export const useSignOut = () => {
  const queryClient = useQueryClient();

  const { mutate: signOut, isPending: isSigningOut } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.setQueriesData(['user'], null);
      toast.success(`Çıxış uğurlu oldu. Tezliklə görüşənədək, İstifadəçi`);
    },
    onError: () => {
      toast.error('Çıxış uğursuz oldu. Yenidən cəhd et');
    },
  });

  return { signOut, isSigningOut };
};
