import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 960px;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;

  justify-content: space-between;

  .go-back {
    color: ${({ theme }) => theme.colors['gray-400']};
    display: flex;
    align-items: center;
    gap: 8px;
    transition: 0.3s ease all;

    &:hover {
      color: ${({ theme }) => theme.colors['gray-700']};
    }
  }
`;
