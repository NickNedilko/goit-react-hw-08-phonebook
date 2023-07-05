import React from 'react';

import css from './Filter.module.css';
import { FcSearch } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { filterSearch } from 'redux/contacts/contactsSlice';


const Filter = () => {
const dispatch = useDispatch();
  const search = useSelector(getFilter);

  return (
    <div className={css.filterWrapper}>
      <p className={css.filterText}>
        Find contact by name <FcSearch />
      </p>
      <label htmlFor="">
        <input
          className={css.filterInput}
          type="text"
          value={search}
          onChange={(e)=>dispatch(filterSearch(e.target.value))}
        />
      </label>
    </div>
  );
};



export default Filter;
