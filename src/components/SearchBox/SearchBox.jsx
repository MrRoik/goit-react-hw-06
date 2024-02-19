import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import filterContacts from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleFilterItem = evt => dispatch(filterContacts(evt.target.value.trim()));
  const value = useSelector(state => state.filters);

  return (
    <input
      type="text"
      value={value}
      onChange={handleFilterItem}
      placeholder="search"
      className={css.inputSearch}
    />
  );
};

export default SearchBox;
