import styled from "styled-components"
import { MdSunny } from "react-icons/md";

const BtnChangeThemeStyle = styled.div`
    background-color: ${props => props.theme.hover};
    height: 40px;
    width: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    color: ${props => props.theme.primaryText};
    font-size: 22px;
    cursor: pointer;

    transition: background-color 0.5s ease, color 0.5s ease;
`

const BtnChangeTheme = ({toggleTheme}: {toggleTheme: ()=> void})=>{
    return(
        <BtnChangeThemeStyle onClick={toggleTheme}>
            <MdSunny />
        </BtnChangeThemeStyle>
    )
}


export default BtnChangeTheme