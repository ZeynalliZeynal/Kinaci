import {
  Caret,
  ClearButton,
  SelectBadge,
} from '~/components/search/searchBar/select/buttons/SelectBarIcons.jsx';
import { motion } from 'framer-motion';
import { useEffect, useReducer, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchParamsArray } from '~/functions/searchParamsArray.js';

const initialState = {
  isOpen: false,
  highlightedIndex: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'isOpen':
      return {
        ...state,
        isOpen: action.payload,
      };
    case 'setHighlightedIndex':
      return {
        ...state,
        highlightedIndex: action.payload,
      };
    default:
      return state;
  }
};

export default function Select({ multiple, property, options = [] }) {
  const [{ isOpen, highlightedIndex }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const paramsValues = searchParams.get(property);
  const paramsValuesArray = paramsValues
    ? paramsValues.includes(',')
      ? paramsValues.split(',')
      : [paramsValues]
    : [];

  const handleClearOptions = () => {
    setSearchParams((prev) => {
      prev.delete(property);
      return prev;
    });
  };

  const handleSelectOption = (e, option) => {
    e.stopPropagation();
    if (multiple) {
      searchParamsArray(paramsValues, setSearchParams, property, option);
    } else {
      if (paramsValues !== option)
        setSearchParams((prev) => {
          prev.set(property, option);
          return prev;
        });
    }

    dispatch({ type: 'isOpen', payload: false });
  };

  const isOptionSelected = (option) => {
    return paramsValues && paramsValues.includes(option);
  };

  useEffect(() => {
    if (isOpen) dispatch({ type: 'setHighlightedIndex', payload: 0 });
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="relative transition-colors px-2.5 py-4 rounded-button border border-blue-900/25 focus:border-blue-900 bg-white w-full flex cursor-pointer text-xs max-h-[65px]"
      onClick={() => dispatch({ type: 'isOpen', payload: !isOpen })}
      onBlur={() => dispatch({ type: 'isOpen', payload: false })}
    >
      <span className="grow ps-2.5 flex flex-wrap gap-2 overflow-y-scroll max-h-[100px]">
        {multiple
          ? paramsValuesArray.map((paramValue) => (
              <SelectBadge
                key={paramValue}
                value={paramValue}
                onSelectBadge={handleSelectOption}
              />
            ))
          : paramsValues}
      </span>
      <div className="flex">
        <ClearButton onClearOptions={handleClearOptions} />
        <span className="mx-2 w-0.5 bg-blue-900/20" />
        <Caret isOpen={isOpen} />
      </div>
      <motion.ul
        animate={isOpen ? 'open' : 'initial'}
        variants={{
          initial: { rotateX: -90, opacity: 0 },
          open: { rotateX: 0, opacity: 1 },
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.3,
        }}
        className="origin-top gap-2 absolute z-50 mt-2 flex-col top-full left-0 items-start bg-white w-full px-2.5 py-4 rounded-button border border-blue-900/25 overflow-y-scroll max-h-[200px] justify-start"
      >
        {options?.map((option, index) => (
          <li
            key={option.label}
            className={`block w-full justify-start cursor-pointer py-2 rounded-button px-2.5 transition-colors ${isOptionSelected(option.label) ? 'relative after:absolute after:content-[""] after:bottom-0 after:left-2.5 after:rounded after:w-1/2 after:h-0.5 after:bg-orange-500' : ''} ${highlightedIndex === index ? 'bg-orange-50' : ''}`}
            onMouseEnter={() =>
              dispatch({ type: 'setHighlightedIndex', payload: index })
            }
            onClick={(e) => handleSelectOption(e, option.label)}
          >
            {option.label}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
