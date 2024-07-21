import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';


export const Filter = () => {
  const dispatch = useDispatch();
  const { findBy } = useSelector(getFilter);

  const handleSearch = e => {
    dispatch(setFilter({ value: e.target.value, findBy }));
  };

  return (
    <div style={{ width: '100%'}}>
      <input type="search" placeholder={`Find contacts by ${findBy}`} onChange={ handleSearch} />
    </div>
  )
}

