import React, { useState, useEffect } from 'react';
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useSearchParams } from 'react-router-dom';

export const SearchTodos = () => {
  const [searchToken, setSearchToken] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchToken(event.currentTarget.value)
  }

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    if (searchToken) {
      searchParams.set('q', searchToken);
    } else {
      searchParams.delete('q');
    }

    setSearchParams(searchParams);
  }

  const onResetTokenHander = () => {
    setSearchToken('');
    searchParams.delete('q');
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const searchTokenFromLocation = searchParams.get('q');

    if (searchTokenFromLocation) {
      setSearchToken(searchTokenFromLocation);
    }
  }, [searchParams]);

  return (
    <InputGroup mb="10">
      <Input
        pr="2.5rem"
        placeholder="Search.."
        value={searchToken}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <InputRightElement width="3rem">
        <IconButton
          size="sm"
          onClick={onResetTokenHander}
          variant="link"
          icon={<CloseIcon />}
          aria-label="Send email"
        />
      </InputRightElement>
    </InputGroup>
  );
}
