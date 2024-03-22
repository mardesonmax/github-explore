import styled from 'styled-components';

export const Container = styled.div`
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

    h2,
    p {
      word-break: break-all;
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
