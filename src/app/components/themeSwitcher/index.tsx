import styled, { keyframes } from "styled-components";
import { MdSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";

import { useContext, useState } from "react";
import ThemeContext from "@/styles/context";


const rotate = keyframes`
  from {
    transform: rotate(120deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const BtnChangeThemeStyle = styled.button`
  background-color: ${props => props.theme.secondaryBg};
  height: 40px;
  width: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.primaryText};
  font-size: ${props => props.theme.iconSize || '22px'};
  cursor: pointer;
  border: none;

  transition: background-color 0.5s ease, color 0.5s ease;

  svg {
    animation: ${rotate} 0.5s ease;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const ThemeSwitcher = ({ toggleTheme }: { toggleTheme: () => void }) => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme.title === 'dark';
    const [iconKey, setIconKey] = useState(0);
  
    const handleClick = () => {
      toggleTheme();
      setIconKey(prev => prev + 1); // força re-render para animação
    };

  return (
    <BtnChangeThemeStyle onClick={handleClick} aria-label="Alternar tema">
      {isDark ? (
        <MdSunny key={iconKey} />
      ) : (
        <BsMoonStarsFill key={iconKey} />
      )}
    </BtnChangeThemeStyle>
  );
};

export default ThemeSwitcher;
