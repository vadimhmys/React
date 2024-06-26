import { useRef } from 'react';
import SearchButton from './SearchButton.jsx';
import SearchInput from './SearchInput.jsx';

export default function Page() {
  const searchInputRef = useRef(null);

  function handleClick() {
    searchInputRef.current.focus();
  }

  return (
    <>
      <nav>
        <SearchButton onClick={handleClick}/>
      </nav>
      <SearchInput ref={searchInputRef}/>
    </>
  );
}
