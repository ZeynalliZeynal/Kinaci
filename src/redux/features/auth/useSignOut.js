import { useMutation } from '@tanstack/react-query';
import { signOut as signOutApi } from '~/services/apiAuth.js';
import { toast } from 'sonner';

export const useSignOut = () => {
  const { mutate: signOut, isPending: isSigningOut } = useMutation({
    mutationFn: signOutApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(`Çıxış uğurlu oldu. Tezliklə görüşənədək, İstifadəçi`);
    },
    onError: () => {
      toast.error('Çıxış uğursuz oldu. Yenidən cəhd et');
    },
  });

  return { signOut, isSigningOut };
};
