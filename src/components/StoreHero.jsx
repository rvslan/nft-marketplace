import styled from "styled-components";
import Colors from "../constants/Colors";
import shopImage1 from "../assets/shopImage1.png";
import Img from "../styled/Img";
import Button from "../styled/Button";

const StoreHeroEl = styled.section`
  margin-top: 1rem;
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
`;

const SubTitle = styled.span`
  color: ${Colors.gray};
`;

const InfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 1rem;
`;

const ButtonContainer = styled.span`
  display: flex;
  column-gap: 1rem;
`;

function StoreHero() {
  return (
    <StoreHeroEl>
      <Img width="30vw" src={shopImage1} />
      <InfoContainer>
        <Title>Cristals</Title>
        <SubTitle>Verified artist</SubTitle>
      </InfoContainer>
      <ButtonContainer>
        <Button>Follow</Button>
        <Button np>Contact</Button>
      </ButtonContainer>
    </StoreHeroEl>
  );
}

export default StoreHero;
