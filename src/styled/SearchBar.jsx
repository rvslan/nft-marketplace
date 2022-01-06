import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import Colors from "../constants/Colors";

const SearchBarEl = styled.div`
  background-color: ${Colors.cardBackground};
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  margin: 0 1rem 2rem 1rem;

  & > svg {
    font-size: 1.5rem;
    colore: ${Colors.gray};
  }
`;
const SearchInput = styled.input`
  font-size: 1rem;
  border: none;
  flex: 1;

  :focus {
    outline: none;
  }
`;

function SearchBar() {
  return (
    <SearchBarEl>
      <SearchInput placeholder="Search on Poly" />
      <RiSearchLine />
    </SearchBarEl>
  );
}

export default SearchBar;
