import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import Tabs from "../styled/Tabs";
import shopImage2 from "../assets/shopImage2.png";
import Img from "../styled/Img";
import { useNavigate } from "react-router-dom";
import StoreHero from "./StoreHero";
import PageContainer from "../styled/PageContainer";

const tabs = [
  {
    title: "Artworks",
    content: <Img src={shopImage2}></Img>,
  },
  {
    title: "Collections",
    content: "Collections",
  },
  {
    title: "About",
    content: "About",
  },
];

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  font-size: 1.5rem;
`;

function Store() {
  const nav = useNavigate();

  return (
    <PageContainer>
      <TopMenu>
        <FiArrowLeft onClick={() => nav(-1)} />
        <span>
          <RiSearchLine style={{ marginRight: "1.5rem" }} />
          <BsThreeDots />
        </span>
      </TopMenu>
      <StoreHero />
      <Tabs tabs={tabs} />
    </PageContainer>
  );
}

export default Store;
