import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Container } from './styles';

const schemaValidation = yup.object({
  search: yup.string().required('Digite o nome do usuário'),
});

interface SearchProps {
  search: (search: string) => Promise<void>;
}

export const Search: React.FC<SearchProps> = ({ search }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
  } = useForm({
    defaultValues: {
      search: '',
    },
    resolver: yupResolver(schemaValidation),
  });

  const handleSearchUser = useCallback(
    async (values: { search: string }) => {
      try {
        await search(values.search);
        clearErrors();
        setValue('search', '');
      } catch {
        setError('search', {
          message: 'Error ao buscar esse usuário',
        });
      }
    },
    [search, setError, clearErrors, setValue],
  );

  return (
    <Container isError={!!errors.search}>
      <form onSubmit={handleSubmit(handleSearchUser)}>
        <label>
          <input
            {...register('search')}
            type="text"
            placeholder="Digite o nome do usuário"
          />
          <button type="submit">Pesquisar</button>
        </label>
      </form>

      {errors.search && <span className="error">{errors.search.message}</span>}
    </Container>
  );
};
