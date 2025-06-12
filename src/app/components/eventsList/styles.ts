import styled from "styled-components";


export const Container = styled.div``;
export const Row = styled.div.attrs({ role: 'row' })`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  border-bottom: 1px solid black;    
  border-bottom: 1px solid ${props => props.theme.stroke};
  transition: border-bottom 0.5s ease;


`
export const Cell = styled.div.attrs({ role: 'cell' })`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 12px;
  color: ${props => props.theme.secondaryText};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: color 0.5s ease;

  &:not(:first-child) {
    padding-left: 20px;
  }

  @media (max-width: 1440px) {
    &{
      font-size: 11px;
    }
  }

  @media (max-width: 1280px) {
    &{
      font-size: 10px;
    }
  }
`;

export const Edit = styled.button`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  color: ${props => props.theme.specialText} !important;
  cursor: pointer;

  background: none;
  border: none;

  transition: color 0.5s ease;
`
export const Bottom = styled.div`
    height: 74px;
    width: 100%;
    display: flex; 
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 10px;
    padding-bottom: 10px;

    & button{
        height: 35px;
        border-radius: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        cursor: pointer;
    }
`
export const PageButton = styled.button<{ $active: boolean }>`
    height: 35px;
    width: 35px;
    background-color: ${({ $active, theme }) =>
    $active ? theme.specialBg : theme.tertiaryBg};
    color: ${({ $active, theme }) => ($active ? '#fff' : theme.primaryText)};
    border: none;
 
    cursor: ${({ $active }) => ($active ? 'default' : 'pointer')};
    
    transition: background-color 0.5s ease, color 0.5s ease;
`;

export const Last = styled.button`
    width: 77px;
    /* color: ${props => props.theme.primaryText}; */
`
export const Next = styled.button`
    width: 77px;
    background-color: ${props => props.theme.specialBg} !important;
    color: #FFFFFF;
    transition: background-color 0.5s ease;
`
export const StatusDot = styled.div<{ status: string }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: ${({ status }) =>
    status === 'Ativo' ? '#4DEF00' : status === 'Inativo' ? '#F44336' : '#9E9E9E'};

    transition: background-color 0.5s ease;
`
;