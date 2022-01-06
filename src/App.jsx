import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, NavMenu, Store, Product } from "./components";

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
`;

const Pages = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

function App() {
  return (
    <Router>
      <AppEl>
        <Pages>
          <Routes>
            <Route exact path="/" element={<Homepage></Homepage>} />
            <Route exact path="/store" element={<Store></Store>} />
            <Route exact path="/product" element={<Product></Product>} />
          </Routes>
        </Pages>
        <NavMenu></NavMenu>
      </AppEl>
    </Router>
  );
}

export default App;
