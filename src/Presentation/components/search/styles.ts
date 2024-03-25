import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 714px;
  width: 100%;

  label {
    height: 72px;
    display: flex;
    input {
      flex: 1;
      padding: 0 24px;
      border-radius: 5px 0px 0px 5px;
      background: ${({ theme }) => theme.colors.white};
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors['gray-800']};
      border: 2px solid transparent;
      border-right: none;

      ::-webkit-input-placeholder {
        /* Edge */
        color: ${({ theme }) => theme.colors['gray-400']};
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${({ theme }) => theme.colors['gray-400']};
      }

      ::placeholder {
        color: ${({ theme }) => theme.colors['gray-400']};
      }
    }

    button {
      width: 210px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors['green-200']};
      border-radius: 0px 5px 5px 0px;
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.125rem;
      transition: 0.3s ease all;

      &:hover {
        background: ${({ theme }) => shade(0.1, theme.colors['green-200'])};
      }
    }
  }

  span.error {
    font-size: 1rem;
    position: absolute;
    bottom: -20px;
    color: ${({ theme }) => theme.colors['red-100']};
  }

  &.error {
    label {
      input {
        border-color: ${({ theme }) => theme.colors['red-100']};
      }
    }
  }
`;
