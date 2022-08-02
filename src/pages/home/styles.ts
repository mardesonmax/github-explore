import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 960px;
  width: 100%;
  padding: 0 16px;
`;

export const ContentHeader = styled.div`
  margin-top: 80px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  h1 {
    font-weight: 700;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors['gray-800']};
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 120px;
  margin-bottom: 40px;
  max-width: 714px;

  @media (max-width: 575.98px) {
    margin-top: 80px;
  }
`;
