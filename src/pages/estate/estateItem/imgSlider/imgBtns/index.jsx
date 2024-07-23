export default function ImgBtns({ estateItem, imageIndex, setImageIndex }) {
  return (
    <div className="print-hidden image-slider-buttons w-full grid">
      <ul className="w-full gap-2 overflow-x-scroll small-scrollbar justify-start px-2 py-1.5">
        {estateItem?.images.map((imgURL, index) => (
          <li key={imgURL} className="shrink-0 grow-0">
            <button
              className={`w-[93px] h-[78px] rounded-xl overflow-hidden ${imageIndex !== index ? 'opacity-60' : ''}`}
              onClick={() => setImageIndex(index)}
            >
              <img src={imgURL} alt={`Image ${index + 1}`} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
