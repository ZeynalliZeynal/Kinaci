import EstateSection from '~/features/estates/estateSection/index.jsx';

const NewEstatesSection = () => {
  return (
    <EstateSection
      bg="bg-blue-700/5"
      filter={{
        field: 'feature',
        value: 'Yeni',
      }}
      queryKey="new"
      title="Yeni əmlaklar"
      paragraph="Son əlavə edilmiş əmlaklar"
      buttonLink="tags=Yeni"
    />
  );
};

export default NewEstatesSection;
