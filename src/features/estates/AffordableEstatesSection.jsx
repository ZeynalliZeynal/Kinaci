import EstateSection from '~/features/estates/estateSection/index.jsx';

const NewEstatesSection = () => {
  return (
    <EstateSection
      bg="bg-blue-700/5"
      filter={{
        field: 'feature',
        value: 'Sərfəli',
      }}
      queryKey="affordable"
      title="Ən Yaxşı Təkliflər"
      paragraph="Sizə özəl təkliflərimiz"
      buttonLink="tags=Yeni"
    />
  );
};

export default NewEstatesSection;
