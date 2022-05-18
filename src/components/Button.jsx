import * as S from './Button.style';
import PropTypes from 'prop-types';

export const Button = ({ children, colorAdded }, handleClick) => {
  Button.propTypes = {
    children: PropTypes.node,
    handleClick: PropTypes.func,
    colorAdded: PropTypes.string,
  };

  return (
    <S.Button type='button' onClick={handleClick}>
      {children}
    </S.Button>
  );
};
