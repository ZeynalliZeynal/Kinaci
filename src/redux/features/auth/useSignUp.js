import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp as signUpApi } from '~/services/apiAuth.js';
import { toast } from 'sonner';

export const useSignUp = () => {
  const queryClient = useQueryClient();

  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      console.log(data);
      toast.success(
        `Uğurla daxil olundu. Xoş gəlmisiniz, ${data.user.user_metadata.fullName}.`,
      );
    },
    onError: () => {
      toast.error(
        'Daxil olmaq alınmadı. Yenidən cəhd edin və ya daxiletmələrinizi yoxlayın.',
      );
    },
  });

  return { signUp, isSigningUp };
};
