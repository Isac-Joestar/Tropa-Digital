'use client';

import EventosContainer from '../components/eventos';
import Menu from '../components/menu';
import styles from './page.module.css'
import styled from 'styled-components';

export const Welcome = styled.p`
  color: ${props => props.theme.primaryText};
  font-size: 16px;

  transition: color 0.5s ease;
`;

export const Title = styled.h1`
  color: ${props => props.theme.specialText};
  font-size: 20px;
  font-weight: bold;

  transition: color 0.5s ease;
`;

export default function EventsPageClient() {
  return (
    <div className={styles.container}>
      <div className={styles.menu_container}>
        <Menu />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <Welcome>Bem vindo de volta, <strong>Kaique Steck</strong></Welcome>
          <Title>Todos os eventos</Title>
        </div>

        <EventosContainer/>
      </div>

    </div>
  );
}
