import { useEstates } from './useEstates';
import EstateSection from '~/redux/features/estates/estateSection';

const EstateSections = () => {
  return (
    <>
      <EstateSection
        bg="bg-blue-700/5"
        filter="estate_status(label)"
        title="Yeni əmlaklar"
        paragraph="Son əlavə edilmiş əmlaklar"
        buttonLink="tags=Yeni"
      />
      {/* <EstateSection
        bg="bg-orange-500/5"
        estates={promotionalEstates}
        title="Kampaniyalı daşınmaz əmlaklar"
        paragraph="Ən sərfəli qiymətlər"
        buttonLink="tags=Endirim"
      />
      <EstateSection
        bg="bg-blue-700/5"
        estates={specialEstates}
        title="Ən Yaxşı Təkliflər"
        paragraph="Sizə özəl təkliflərimiz"
        buttonLink="tags=Sərfəli"
      /> */}
    </>
  );
};

export default EstateSections;
