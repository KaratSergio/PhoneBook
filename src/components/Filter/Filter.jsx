import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import * as selectors from '../../redux/selectors'; 

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectors.selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css['name-label']}>
      Find contacts by name
      <input
        className={css['name-input']}
        type="text"
        name="filter"
        value={filterValue || ''}
        onChange={handleFilterChange}
        required
      />
    </label>
  );
};

export default Filter;
