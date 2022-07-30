import React, { useCallback } from 'react';

import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Container, Content } from './styles';

import Logo from '../../assets/svg/logo.svg';

type Props = {
  isGoBack?: boolean;
};

export const Header: React.FC<Props> = ({ isGoBack }) => {
  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Github Explorer" />

        {isGoBack && (
          <button onClick={handleGoBack} className="go-back" type="button">
            <FaChevronLeft />
            Voltar
          </button>
        )}
      </Content>
    </Container>
  );
};
