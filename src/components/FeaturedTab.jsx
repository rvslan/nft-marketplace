import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

import Colors from "../constants/Colors";
import Img from "../styled/Img";

const items = [
  { id: 1, image: image1, title: "Universo 34", subTitle: "Maketi" },
  { id: 2, image: image2, title: "Holy", subTitle: "Lea Kavaseva" },
  { id: 3, image: image3, title: "Magic World", subTitle: "Subtitle 3" },
  { id: 4, image: image4, title: "Nature Box", subTitle: "Subtitle 4" },
];

const FesturedTabEl = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  height: 400px;
`;

const Item = styled.div`
  background-color: ${Colors.background};
  padding: 0.4rem;
  border-radius: 12px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 1.1rem;
  margin-top: 0.5rem;
`;
const SubTitle = styled.span`
  color: ${Colors.gray};
  font-size: 1rem;
`;
const ShowMore = styled.span`
  text-align: center;
  position: absolute;
  cursor: pointer;
  left: 0;
  bottom: 0;
  width: 100%;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.32);
  padding: 1rem;
  border: 1px solid ${Colors.grayBorder};
  backdrop-filter: blur(17px);
  border-radius: 12px;
`;
const BottomFade = styled.span`
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 25%;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    ${Colors.background}
  );
`;

function FeaturedTab() {
  const nav = useNavigate();

  return (
    <FesturedTabEl>
      {items.map((item, index) => (
        <Item key={index} onClick={() => nav("products")}>
          <Img src={item.image} />
          <Title>{item.title}</Title>
          <SubTitle>{item.subTitle}</SubTitle>
        </Item>
      ))}
      <ShowMore onClick={() => nav("/")}>
        <BiChevronDown /> Show More
      </ShowMore>
    </FesturedTabEl>
  );
}

export default FeaturedTab;
