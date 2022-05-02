import * as S from './Button.style';
import PropTypes from 'prop-types';

export const Button = ({ children }, handleClick) => {
  Button.propTypes = {
    children: PropTypes.node,
    handleClick: PropTypes.func,
  };

  return (
    <S.Button type='button' onClick={handleClick}>
      {children}
    </S.Button>
  );
};
