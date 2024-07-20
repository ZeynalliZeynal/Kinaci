import EstateSection from '~/redux/features/estates/estateSection';
import { useEstateFeatures } from '~/redux/features/filters/useEstateFeatures.js';

const NewEstatesSection = () => {
  const { features, isPending } = useEstateFeatures(
    { field: 'label', value: 'Yeni' },
    'new',
  );

  return (
    <EstateSection
      bg="bg-blue-700/5"
      filter={{
        field: 'feature_id',
        value: features?.id,
      }}
      queryKey="new"
      title="Yeni əmlaklar"
      paragraph="Son əlavə edilmiş əmlaklar"
      buttonLink="tags=Yeni"
    />
  );
};

export default NewEstatesSection;
