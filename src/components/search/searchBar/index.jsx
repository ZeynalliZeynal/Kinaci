import { useReducer } from 'react';
import { initialState, reducer } from '~/reducers/searchBarReducer.js';
import SearchBarBtns from '~/components/search/searchBar/searchBarBtns/index.jsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchBarFilters from '~/features/filters/searchBarFilters/index.jsx';

export default function SearchBar({ sellingType }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(
      `/estate${sellingType ? `/${sellingType}` : ''}?${searchParams.toString()}`,
    );
  }

  return (
    <form
      className="text-blue-900 py-5 px-4 w-full bg-white shadow-filter-box rounded-[12px] rounded-tl-none"
      onSubmit={(e) => handleSubmit(e)}
    >
      <SearchBarFilters state={state} />

      <SearchBarBtns state={state} dispatch={dispatch} />
    </form>
  );
}
