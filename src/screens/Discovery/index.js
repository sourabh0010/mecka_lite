import React, { useCallback, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import SearchBar from '../../components/Search';
import './discovery.scss';

const array = ['1', '2', '3', '4', '5', '1111', '111', '11111', '111111', '1', '1', '1'];

function Discovery() {
  const [result, setResult] = useState();

  const fetchData = useCallback((value) => {
    const fetchedData = array.filter((e) => e.includes(value?.input));
    setResult(fetchedData);
  }, []);

  const debounceFunction = useMemo(() => debounce(fetchData, 1000), [fetchData]);

  const onChange = useCallback((e) => {
    debounceFunction({ input: e.target.value });
  }, [debounceFunction]);

  return (
    <div className="discovery">
      <div className="discover-header">
        { 'Mecaks You\'ll Love'}
      </div>
      <div>
        <SearchBar onChange={onChange} props={{ autoFocus: true }} />
      </div>
      {result && result?.map((value, index) => <div key={index}>{value}</div>) }
    </div>
  );
}

export default Discovery;

