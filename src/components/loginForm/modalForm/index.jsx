export default function ModalForm() {
  return (
    <form className="flex flex-col gap-4 py-2">
      <div className="grid gap-4">
        <label htmlFor="fullname">Ad & Soyad</label>
        <span className="border border-blue-900/25 rounded-button p-[18px]">
          <input
            className="placeholder:text-blue-900/50"
            type="text"
            name="name"
            id="fullname"
            placeholder="Adınızı və soyadınızı daxil edin..."
          />
        </span>
      </div>
      <div className="grid gap-4">
        <label htmlFor="tel">Telefon nömrəsi</label>
        <span className="border border-blue-900/25 rounded-button p-[18px]">
          <input
            className="placeholder:text-blue-900/50"
            type="tel"
            name="tel"
            id="tel"
            placeholder="+994** *** ****"
          />
        </span>
      </div>
      <div className="grid gap-4">
        <label htmlFor="email">E-Mail</label>
        <span className="border border-blue-900/25 rounded-button p-[18px]">
          <input
            className="placeholder:text-blue-900/50"
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
          />
        </span>
      </div>
      {/*
      <div className="grid gap-4">
        <label htmlFor="estate">Əmlak növü</label>
        <span className="border border-blue-900/25 rounded-button p-[18px]">
          <input
            className="placeholder:text-blue-900/50"
            type="text"
            name="estate"
            id="estate"
          />
        </span>
      </div>
      <div className="grid gap-4">
        <label htmlFor="city">Şəhər</label>
        <span className="border border-blue-900/25 rounded-button p-[18px]">
          <input
            className="placeholder:text-blue-900/50"
            type="text"
            name="full name"
            id="city"
          />
        </span>
      </div>
      <div className="grid gap-4">
        <label htmlFor="cost">Qiymət</label>
        <div className="flex gap-4">
          <span className="border border-blue-900/25 rounded-button p-[18px]">
            <input
              className="placeholder:text-blue-900/50"
              type="number"
              name="value"
              id="cost"
              placeholder="0-dan"
            />
          </span>
          <span className="border border-blue-900/25 rounded-button p-[18px]">
            <input
              className="placeholder:text-blue-900/50"
              type="number"
              name="value"
              id="fullname"
              placeholder="1000.000.000-a"
            />
          </span>
        </div>
      </div>*/}
      <button
        type="submit"
        className="w-full bg-orange-500 rounded-[12px] text-white font-medium p-4 mt-3 hover:bg-orange-600"
      >
        Saxla və Göndər
      </button>
    </form>
  )
}
