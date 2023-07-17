import React, { useState, useEffect } from 'react';
import './AutoComplete.css';

interface AutoCompleteProps {
  data: string[];
}

interface ListItemProps {
  item: string;
  search: string;
}

const ListItem: React.FC<ListItemProps> = ({ item, search }) => {
  const index = item.toLowerCase().indexOf(search.toLowerCase());

  if (index === -1) {
    return <li>{item}</li>;
  }

  const before = item.substring(0, index);
  const match = item.substring(index, index + search.length);
  const after = item.substring(index + search.length);

  return (
    <li>
      {before}
      <strong>{match}</strong>
      {after}
    </li>
  );
};

const AutoComplete: React.FC<AutoCompleteProps> = ({ data }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a real API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Filter data
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );
      setResults(filtered);
    };

    if (search !== '') {
      fetchData();
    } else {
      setResults([]);
    }
  }, [search, data]);

  return (
    <div className='autocomplete'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Start typing...'
      />
      {results.length > 0 && (
        <ul>
          {results.map((result, index) => (
            <ListItem
              key={index}
              item={result}
              search={search}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
