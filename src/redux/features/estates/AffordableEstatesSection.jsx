import EstateSection from '~/redux/features/estates/estateSection';
import { useEstateFeatures } from '~/redux/features/filters/useEstateFeatures.js';

const NewEstatesSection = () => {
  const { features, isPending } = useEstateFeatures(
    { field: 'label', value: 'Sərfəli' },
    'affordable',
  );

  return (
    <EstateSection
      bg="bg-blue-700/5"
      filter={{
        field: 'feature_id',
        value: features?.id,
      }}
      queryKey="affordable"
      title="Ən Yaxşı Təkliflər"
      paragraph="Sizə özəl təkliflərimiz"
      buttonLink="tags=Yeni"
    />
  );
};

export default NewEstatesSection;
