'use client'
import styled from 'styled-components';
import Link from "next/link";

export const MenuWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-right: solid rgb(185, 185, 185) 1px;
  background-color: ${props => props.theme.secondaryBg};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 20px;
`;

export const SectionTitle = styled.p`
  margin: 0 0 3px 10px;
  font-size: 10px;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.theme.secondaryText};
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

  &:hover {
    background-color: ${({ $active, theme }) => ($active ? theme.specialBg : '#f0f0f0')};
  }

  svg {
    color: ${({ $active }) => ($active ? '#fff' : 'inherit')};
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
`;

export const Role = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.secondaryText};
  cursor: pointer;
`;

export const ConfigItem = styled.div`
  height: 35px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.primaryText};
    transition: all 0.3s;
  }

  svg {
    font-size: 18px;
    color: ${props => props.theme.secondaryText};
    transition: all 0.3s;
  }
`;

export const ExitItem = styled(ConfigItem)`
  a:hover {
    svg,
    p {
      color: rgb(255, 63, 63);
    }
  }
`;
