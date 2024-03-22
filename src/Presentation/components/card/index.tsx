import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { Container } from './styles';

type Props = {
  avatar?: string;
  title: string;
  description?: string;
};

export const Card: React.FC<Props> = ({ avatar, title, description }) => {
  return (
    <Container>
      {avatar && (
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
      )}

      <div className="details">
        <h2>{title}</h2>

        {description && <p>{description}</p>}
      </div>

      <div className="icon">
        <FaChevronRight />
      </div>
    </Container>
  );
};
