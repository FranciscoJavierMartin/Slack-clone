import React from 'react';
import { Header, Input } from 'semantic-ui-react';

const SearchInput: React.FC = () => {
  return (
    <Header floated='right'>
      <Input
        size='mini'
        icon='search'
        name='searchTerm'
        placeholder='Search message'
      />
    </Header>
  );
};

export default SearchInput;
