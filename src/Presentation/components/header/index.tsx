import React, { useCallback } from 'react';

import { FaChevronLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '~/assets/svg/logo.svg';
import { Container, Content } from './styles';

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
        <Link to="/">
          <img src={Logo} alt="Github Explorer" />
        </Link>

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
