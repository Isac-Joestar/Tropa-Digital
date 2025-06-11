import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.secondaryBg};
    padding: 20px 10px;
    border-radius: 10px;

`
export const NewEventBtn = styled.button`
    height: 36px;
    padding: 0px 15px;
    border-radius: 33px;
    border: none;
    cursor: pointer;
    background-color: ${props => props.theme.specialBg};
    color: #FFFFFF;
`
export const Titles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 39px;
    border-bottom: 1px solid ${props => props.theme.stroke};
    

    & div {
        font-size: 13px;
        color: ${props => props.theme.specialTextOpacity};
        
    }
    & div:not(:first-child) {
        padding-left: 20px;
    }
    & div:not(:last-child) {
        width: 25%;
    }
    & div:last-child {
        width: 40px;
        height: 100%;
    }
    
`
export const Last = styled.button`
    width: 77px;
`
export const Next = styled.button`
    width: 77px;
    background-color: ${props => props.theme.specialBg} !important;
    color: ${props => props.theme.secondaryBg};;
`
