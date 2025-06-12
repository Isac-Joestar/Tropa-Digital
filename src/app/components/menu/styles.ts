'use client'
import styled from 'styled-components';
import Link from "next/link";

export const MenuWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 280px; 
  min-width: 200px; 

  border-right: solid ${props => props.theme.borderMenu} 1px;
  background-color: ${props => props.theme.secondaryBg};
  transition: background-color 0.5s ease, border-right 0.5s ease;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 20px;



  @media (max-width: 1440px) {
    max-width: 240px;
    padding: 25px 16px;
  }

  @media (max-width: 1280px) {
    max-width: 220px;
    padding: 20px 12px;
  }

  @media (max-width: 1024px) {
    max-width: 200px;
    padding: 16px 10px;
  }

  @media (min-width: 1921px) {
    max-width: 300px;
    padding: 32px 24px;
  }

`;

export const SectionTitle = styled.p`
  margin: 0 0 3px 10px;
  font-size: 10px;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.theme.secondaryText};
  transition: color 0.5s ease;
`;


export const ListItem = styled.li<{ $active: boolean }>`
  height: 40px;
  width: 100%;
  border-radius: 7px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${({ $active, theme }) => ($active ? theme.specialBg : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : 'inherit')};
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: ${({ $active, theme }) => ($active ? theme.specialBg : theme.hover)};
  }

  svg {
    color: ${({ $active }) => ($active ? '#fff' : 'inherit')};
  }

  & button{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;

    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.5s ease;
  }

  & button p{
    color: ${props => props.theme.primaryText}
    
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.div`
  color: ${props => props.theme.primaryText};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.5s ease;
`;

export const PhotoWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.specialBg};
  padding: 2px;
  cursor: pointer;

  transition: border 0.5s ease;

  img {
    width: 100%;
    border-radius: 15px;
  }
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.primaryText};
  cursor: pointer;
  transition: color 0.5s ease;
`;

export const Role = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.secondaryText};
  cursor: pointer;

  transition: color 0.5s ease;
`;

export const ConfigItem = styled.button`
  height: 35px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background: none;
  border: none;

  p {
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.primaryText};

    transition: color 0.5s ease, all 0.3s;
  }

  svg {
    font-size: 18px;
    color: ${props => props.theme.secondaryText};
    transition: color 0.5s ease, all 0.3s;
  }
`;

export const ExitItem = styled.div`
  height: 35px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    cursor: pointer;

    p {
      font-size: 14px;
      font-weight: 600;
      color: ${props => props.theme.primaryText};
      transition: color 0.5s ease, all 0.3s;
    }

    svg {
      font-size: 18px;
      color: ${props => props.theme.secondaryText};
      transition: color 0.5s ease, all 0.3s;
    }

    &:hover {
      svg,
      p {
        color: ${props => props.theme.exit};
      }
    }
  }
`;
