import { Link } from 'react-router-dom';
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

export const Card = styled(Link)`
  display: flex;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  gap: 16px;
  transition: 0.3s ease all;

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details {
    flex: 1;

    h2 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors['gray-700']};
    }

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors['gray-400']};
      margin-top: 4px;
      font-weight: 400;
    }
  }

  .icon {
    color: ${({ theme }) => theme.colors['gray-400']};
    transition: 0.3s ease all;
  }

  &:hover {
    .icon {
      color: ${({ theme }) => theme.colors['green-200']};
    }
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 575.98px) {
    .details {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
`;
