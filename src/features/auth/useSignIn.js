import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn as signInApi } from '~/services/apiAuth.js';
import { toast } from 'sonner';

export const useSignIn = () => {
  const queryClient = useQueryClient();

  const { mutate: signIn, isPending: isSigningIn } = useMutation({
    mutationFn: signInApi,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      toast.success(`Uğurla daxil olun. Yenidən xoş gəlmisiniz, İstifadəçi.`);
    },
    onError: () => {
      toast.error(
        'Daxil olmaq alınmadı. Yenidən cəhd edin və ya daxiletmələrinizi yoxlayın.',
      );
    },
  });

  return { signIn, isSigningIn };
};
