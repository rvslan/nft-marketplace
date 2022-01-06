import styled from "styled-components";
import bidImage from "../assets/bidImage.png";
import Colors from "../constants/Colors";
import Img from "../styled/Img";

const MyBidsListEl = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
`;

const BidItemEl = styled.div`
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  align-items: center;
  transition-property: background-color, border-radius;
  transition-duration: 0.5s;

  &:hover {
    background-color: ${Colors.grayBorder};
    border-radius: 12px;
  }
`;

const Title = styled.h3`
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const BidData = styled.span`
  display: flex;
  margin-left: 1rem;
  flex: 1;
  flex-direction: column;
  row-gap: 0.5rem;
  justify-content: center;
`;

const BidTitle = styled.span`
  font-weight: 500;
`;

const BidDescription = styled.span`
  color: ${Colors.gray};
`;

const BidAmount = styled.span`
  font-weight: 500;
`;

function BidItem() {
  return (
    <BidItemEl>
      <Img width="4rem" height="4rem" borderRadius="12px" src={bidImage} />
      <BidData>
        <BidTitle>Clay boyz 174</BidTitle>
        <BidDescription>Waldo</BidDescription>
      </BidData>
      <BidAmount>1.4ETH</BidAmount>
    </BidItemEl>
  );
}

function MyBidsList() {
  return (
    <MyBidsListEl>
      <Title>Your Bids</Title>
      <ItemList>
        <BidItem></BidItem>
      </ItemList>
    </MyBidsListEl>
  );
}

export default MyBidsList;
