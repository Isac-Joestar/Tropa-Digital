'use client';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.specialText};
  font-size: 40px;
`;

export default function TestStyled() {
  return <Title>Testando styled-components</Title>;
}