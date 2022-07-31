import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRepository } from '~/hooks/repository';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container } from './styles';

const RegexSearch = /\w+([/])\w+/g;
const schemaValidation = yup.object({
  search: yup
    .string()
    .required('Digite o autor/nome do repositório')
    .matches(RegexSearch, 'Digite o autor/nome do repositório'),
});

export const Search: React.FC = () => {
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

  const { search } = useRepository();
  const handleSearchRepository = useCallback(
    async (values: { search: string }) => {
      try {
        await search(values.search);
        clearErrors();
        setValue('search', '');
      } catch {
        setError('search', {
          message: 'Error ao buscar esse repositório',
        });
      }
    },
    [search, setError, clearErrors, setValue],
  );

  return (
    <Container isError={!!errors.search}>
      <form onSubmit={handleSubmit(handleSearchRepository)}>
        <label>
          <input
            {...register('search')}
            type="text"
            placeholder="Digite o nome do repositório"
          />
          <button type="submit">Pesquisar</button>
        </label>
      </form>

      {errors.search && <span className="error">{errors.search.message}</span>}
    </Container>
  );
};
