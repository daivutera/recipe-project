import * as S from './styles';
import { Button } from './Button';

export const Header = () => {
  return (
    <S.Div>
      <S.Logo src='/recipes.png' alt=''></S.Logo>
      <S.Flex>
        <S.Link href='www.google.lt'>Home</S.Link>
        <S.Link href='www.google.lt'>Recipes</S.Link>
        <Button
          colorAdded='red'
          handleClick={() => {
            alert('hi');
          }}>
          + Submit Recipe
        </Button>
      </S.Flex>

      <div>
        <S.Img src='/food.jpg' alt=''></S.Img>
      </div>
    </S.Div>
  );
};
