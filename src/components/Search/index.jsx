import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';
import clearIcon from '../../assets/img/clearIcon.svg';
import findIcon from '../../assets/img/find.svg';

const Search = () => {
  const [inputValue, setInputValue] = React.useState(''); // для отображения в инпуте
  const { setSearchValue } = React.useContext(SearchContext); // для поиска
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setInputValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 350),
    [],
  );

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img src={findIcon} className={styles.icon} alt="" />
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={inputValue}
        onChange={onChangeInput}
      />
      {inputValue && (
        <img className={styles.clearIcon} src={clearIcon} onClick={onClickClear} alt="Очистить" />
      )}
    </div>
  );
};
export default Search;
