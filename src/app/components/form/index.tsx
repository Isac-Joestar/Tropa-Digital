'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

import styles from './index.module.css'
import styled from 'styled-components';


const Label = styled.label`
  color: ${props => props.theme.specialText};
  font-weight: bold;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 15px;
  border: none;
  padding: 0 20px;
  background-color: ${props => props.theme.tertiaryBg};
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.specialBg};
  color: #ffffff;
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;

const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.specialBg};
`;

export default function Form() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (email && password) {
      router.push('/events');
    } else {
      alert('Preencha todos os campos.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input_group}>
        <Label htmlFor="email">E-mail</Label>
        <Input type="email" name="email" id="email" placeholder="seunome@seuservidor.com" />
      </div>

      <div className={styles.input_group}>
        <Label htmlFor="password">Senha</Label>
        <div className={styles.password_wrapper}>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Digite aqui"
          />
          <EyeButton type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEyeOffOutline size={24} /> : <IoEyeOutline size={24} />}
          </EyeButton>
        </div>
      </div>

      <Button type="submit">Enviar</Button>
    </form>
  );
}
