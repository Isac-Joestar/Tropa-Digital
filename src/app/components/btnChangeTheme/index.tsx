import styled from "styled-components"
import { MdSunny } from "react-icons/md";

const BtnChangeThemeStyle = styled.div`
    background-color: #2e3c622f;
    height: 40px;
    width: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    font-size: 22px;
    cursor: pointer;
`

const BtnChangeTheme = ({toggleTheme}: {toggleTheme: ()=> void})=>{
    return(
        <BtnChangeThemeStyle onClick={toggleTheme}>
            <MdSunny />
        </BtnChangeThemeStyle>
    )
}


export default BtnChangeTheme