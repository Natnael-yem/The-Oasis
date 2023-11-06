/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [SearchParams, setSearchParams] = useSearchParams();
  const sortBy = SearchParams.get('sortBy') || '';

  function handleChange(e) {
    SearchParams.set('sortBy', e.target.value);
    setSearchParams(SearchParams);
  }
  return <Select 
  options={options} 
  type="white" 
  value={sortBy}
  onChange={handleChange} />;
}

export default SortBy;
