import styled from "styled-components"
import { IoMdSearch } from "react-icons/io";

const SearchContainer = styled.div`
    position: relative;
    width: 200px;
`
const SearchInput = styled.input`
    width: 200px;
    height: 36px;
    padding: 0px 15px 0px 36px;
    border-radius: 33px;
    border: none;
    background-color:  ${props => props.theme.tertiaryBg};

    color:  ${props => props.theme.primaryText};
    transition: background-color 0.5s ease, color 0.5s ease;
`
const SearchIcon = styled(IoMdSearch)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
`;
function Search ({search, setSearch} : {search: string, setSearch: React.Dispatch<React.SetStateAction<string>>}){
return(
    <SearchContainer>
         <SearchIcon/>
            <SearchInput type="text"
                placeholder="Buscar eventos"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
    </SearchContainer>
)
}

export default Search