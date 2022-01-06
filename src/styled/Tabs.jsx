import { useState } from "react";
import styled from "styled-components";
import Colors from "../constants/Colors";

const TabsEl = styled.div`
  width: 100%;
`;

const TitleContainer = styled.span`
  display: flex;
  justify-content: space-around;
  margin: 0 1.5rem;
  padding: 0 1rem;
`;

const Title = styled.span`
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;

  ${(p) => (p.active ? "" : `color: ${Colors.gray};`)}
  ${(p) => (p.active ? "font-weight: 500;" : "")}

    ::after {
    ${(p) => (!p.active ? "display:none" : "")}
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0.3rem;
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 0.3rem;
    background-color: ${Colors.primary};
  }
`;
const Content = styled.div`
  margin: 0 0.5rem;
  margin-top: 1rem;
`;

function Tabs({ tabs }) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <TabsEl>
      <TitleContainer>
        {tabs.map((tab, index) => (
          <Title
            key={index}
            active={currentTab === tab}
            onClick={() => setCurrentTab(tab)}
          >
            {tab.title}
          </Title>
        ))}
      </TitleContainer>
      <Content>{currentTab.content}</Content>
    </TabsEl>
  );
}

export default Tabs;
