import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import * as selectors from '../../redux/contacts/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectors.selectFilters);
  const { t } = useTranslation(); 

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css['name-label']}>
      <FontAwesomeIcon icon={faFilter} className={css['icon-label']} />
      {t('filterLabel')}
      <input
        className={css['name-input']}
        type="text"
        name="filter"
        value={filterValue || ''}
        onChange={handleFilterChange}
        placeholder={t('filterPlaceholder')}
        required
      />
    </label>
  );
};

export default Filter;
