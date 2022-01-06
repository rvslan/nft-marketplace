import styled from "styled-components";
import Colors from "../constants/Colors";
import SearchBar from "../styled/SearchBar";
import Tabs from "../styled/Tabs";
import FeaturedTab from "./FeaturedTab";
import MyBidsList from "./MyBidsList";

const HomePageEl = styled.div`
  background-color: ${Colors.background};
  flex: 1;
  padding-bottom: 10vh;
  overflow: auto;
  overflow-x: hidden;
  min-height: min-content;
  padding-top: 1rem;
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Title = styled.h1`
  font-family: "DM Mono";
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const tabs = [
  { title: "Featured", content: <FeaturedTab></FeaturedTab> },
  { title: "Collections", content: <div>Collections Content</div> },
  { title: "Artists", content: <div>Artists Content</div> },
  { title: "Tag", content: <div>Tag Content</div> },
];

function Homepage() {
  return (
    <HomePageEl>
      <Title>polygon</Title>
      <SearchBar></SearchBar>
      <Tabs tabs={tabs}></Tabs>
      <MyBidsList></MyBidsList>
    </HomePageEl>
  );
}

export default Homepage;
