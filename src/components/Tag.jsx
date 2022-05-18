import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Tag.style';

const colors = {
  primary: {
    background: '#D2FFE5',
    color: '#007F00',
  },
  secondary: {
    background: '#fff',
    color: '#616365',
  },
};

const Tag = ({ type, children }) => {
  return <S.Tag type={colors[type]}>{children}</S.Tag>;
};

Tag.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};

Tag.defaultProps = {
  type: 'primary',
};

export default Tag;
