import CurrencyDropdown from '~/pages/estate/estateItem/estateInfo/asideSection/currencyDropdown/index.jsx';
import { useState } from 'react';
import currencyData from '~/data/currencyData.js';
import { toCamelCase } from '~/functions/convertToCamelCase.js';

export default function EstatePrice({ estateItem }) {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyData[0]);

  function convertCurrency(currency) {
    const currencyConverted = new Intl.NumberFormat(selectedCurrency.local, {
      style: 'currency',
      currency: selectedCurrency.type,
    });
    return currencyConverted.format(
      selectedCurrency.type === 'USD'
        ? currency * 0.59
        : selectedCurrency.type === 'TRY'
          ? currency * 18.92
          : currency,
    );
  }

  return (
    <div className="px-4 py-[18px] bg-white rounded-button shadow-section grid gap-2.5">
      <div className="p-2 rounded-xl bg-blue-900 text-white flex justify-between items-center">
        {estateItem?.per_square_meter_price ? (
          <>
            <span className="text-sm px-[14px] py-2.5">
              Kvadrat metr qiyməti:
              <span className="font-semibold tracking-widest">
                {convertCurrency(estateItem?.per_square_meter_price)}/ m
                <sup>2</sup>
              </span>
            </span>
            <CurrencyDropdown
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          </>
        ) : (
          <div className="w-full">
            <CurrencyDropdown
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          </div>
        )}
      </div>
      <div className="grid text-white text-center rounded-lg bg-blue-700">
        {estateItem?.feature === 'Endirim' && (
          <div className="discount w-full bg-blue-500 py-2.5 rounded-lg text-sm">
            {convertCurrency(estateItem?.price)} deyil,
          </div>
        )}
        <div className="price text-5xl font-bold py-2.5">
          {convertCurrency(
            estateItem?.feature === 'Endirim'
              ? estateItem?.price -
                  (estateItem?.price * estateItem?.discount_percent) / 100
              : estateItem?.price,
          )}{' '}
          {toCamelCase(estateItem?.status) === 'forRent' &&
            `/${estateItem?.payment_method}`}
        </div>
      </div>
    </div>
  );
}
