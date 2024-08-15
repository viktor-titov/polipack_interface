/* eslint-disable react/prop-types */
import { IoSearchOutline } from 'react-icons/io5';

import { Input } from '../Input/Input';
import s from './NavBar.module.scss';

export const NavBar = ({ setSearchItem, setStatusFilter }) => {
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };
  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  return (
    <div className={s.navbar}>
      <Input placeholder={'Поиск'} handleChange={handleSearch}>
        <IoSearchOutline className={s.icon} />
      </Input>
      <select onChange={handleStatusFilter}>
        <option value=''>Все</option>
        <option value='true'>Завершенные</option>
        <option value='false'>Не завершенные</option>
      </select>
    </div>
  );
};
