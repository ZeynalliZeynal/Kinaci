import { useQuery } from '@tanstack/react-query';
import { getCertificates } from '~/services/apiCertificates.js';

export const useCertificates = () => {
  const { data: certificates, isPending } = useQuery({
    queryKey: ['certificates'],
    queryFn: getCertificates,
  });

  return { certificates, isPending };
};
