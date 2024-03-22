import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 960px;
  width: 100%;
  padding: 0 16px;

  .loading-repositories {
    padding-bottom: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentHeader = styled.div`
  margin-top: 80px;

  .repo-info {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;

    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .details {
      h2 {
        font-size: 2.25rem;
        color: ${({ theme }) => theme.colors['gray-700']};
      }

      p {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.colors['gray-400']};
        margin-top: 12px;
        font-weight: 400;
      }
    }
  }

  .repo-numbers {
    display: flex;
    gap: 80px;
    margin-top: 48px;

    .item {
      span {
        font-size: 2.25rem;
        color: ${({ theme }) => theme.colors['gray-700']};
        font-weight: 700;
      }

      p {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.colors['gray-400']};
        margin-top: 4px;
        font-weight: 400;
      }
    }
  }

  @media (max-width: 575.98px) {
    .repo-info {
      gap: 16px;
      .avatar {
        width: 80px;
        height: 80px;
      }
    }

    .details {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }

    .repo-numbers {
      gap: 16px;
      justify-content: space-between;

      .item {
        span {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 120px;
  margin-bottom: 40px;

  @media (max-width: 575.98px) {
    margin-top: 80px;
  }
`;
