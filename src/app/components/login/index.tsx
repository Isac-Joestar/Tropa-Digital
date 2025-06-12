'use client'

import styles from "./index.module.css";
import styled from 'styled-components'
import Form from "../form/index";


const Container = styled.div`
  height: auto;
  min-height: 500px; 
  max-width: 900px; 
  min-width: 800px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${props => props.theme.secondaryBg};

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 100px 200px 0px rgba(0, 0, 0, 0.19);

  transition: background-color 0.5s ease;

  @media (max-width: 1600px) {
  & {
    max-width: 900px;
    padding: 16px;
  }
  }

  @media (max-width: 1280px) {
    & {
      max-width: 90%;
      padding: 16px;
    }
  }

  @media (min-width: 1921px) {
    & {
      max-width: 800px;
    }
  }

`
const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: ${props => props.theme.specialText};

  transition: color 0.5s ease;
`
const Sub_title = styled.p`
  font-size: 13px;
  font-weight: normal;
  color: ${props => props.theme.secondaryText};

  transition:  color 0.5s ease;

`
const Rectangle = styled.p`
  background-color: ${props => props.theme.specialBg};
  min-width: 370px;
  min-height: 500px;
  border-radius: 20px;

  transition: background-color 0.5s ease;
`

function Login() {
  return (
    <main className={styles.page}>
      <Container>
        <section className={styles.content_left}>
          <div className={styles.content_top}>
              <img className={styles.icon} src="/icon.svg" alt="Ícone da Tropa Digital" />
            <header className={styles.text}>
              <Title>Bem-vindo de volta</Title>
              <Sub_title>Entre com sua conta para acessar o painel.</Sub_title>
            </header>
          </div>
          <div className={styles.content_form}>
            <Form/>
          </div>
        </section>
        <section className={styles.content_image}>
          <img src="/image/login.svg" alt="Ilustração de login" />
          <Rectangle>
          </Rectangle>
        </section>
      </Container>
    </main>
  );
}
export default Login
