import { useState } from 'react';
import SelectContainer from '~/components/search/searchBar/selectContainer/index.jsx';
import DefaultCheckbox from '~/components/DefaultCheckbox.jsx';
import { DefaultTextarea } from '~/components/DefaultTextarea.jsx';
import DefaultForm from '~/features/auth/DefaultForm.jsx';
import { useUser } from '~/features/auth/useUser.js';
import { useEstateTypes } from '~/features/filters/useEstateTypes.js';

export default function SendRequestForm() {
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [estateTypesValue, setEstateTypesValue] = useState([]);
  const { isAuthenticated } = useUser();

  const { types } = useEstateTypes();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message || !isChecked) return false;
  };

  return (
    <section className="print-hidden">
      <div className="container">
        <div className="px-12 lg:px-[200px] md:px-[100px] py-12 rounded-xl shadow-section bg-white text-blue-900">
          <h3 className="w-full text-4xl font-semibold text-start sm:text-center">
            Ərizənizi Göndərin
          </h3>
          {isAuthenticated ? (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5 py-8 text-xs">
                <div className="grid gap-5">
                  <div>
                    <SelectContainer
                      label="Hansı Əmlak növü ilə maraqlanırsınız?"
                      options={types}
                      value={estateTypesValue}
                      setValue={setEstateTypesValue}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-3 inline-block">
                      Mesajınız
                    </label>
                    <DefaultTextarea
                      value={message}
                      handleChange={(value) => setMessage(value)}
                      name="message"
                      placeholder="Mesajınızı yazın..."
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[20px_1fr] gap-1.5 justify-start items-center">
                <DefaultCheckbox
                  isChecked={isChecked}
                  setIsChecked={() => setIsChecked((prevState) => !prevState)}
                />
                <span className="text-xs sm:text-sm">
                  Müraciət və ərizə ilə bağlı{' '}
                  <a href="#" className="text-[#2d68a0]">
                    Şəxsi məlumatların işlənməsi haqqında
                  </a>
                </span>
              </div>
              <button
                type="submit"
                className={`w-full bg-orange-500 shadow-button py-4 rounded-xl text-white text-sm font-semibold mt-5 ${!isChecked || !message ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-orange-600 hover:shadow-none'}`}
                disabled={!isChecked || !message}
              >
                Sorğumu Göndər
              </button>
            </form>
          ) : (
            <DefaultForm />
          )}
        </div>
      </div>
    </section>
  );
}
