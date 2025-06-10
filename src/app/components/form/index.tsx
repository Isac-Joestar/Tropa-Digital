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

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`
const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const PasswordWrapper = styled.div`
  position: relative;
`
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
    <FormStyle onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input type="email" name="email" id="email" placeholder="seunome@seuservidor.com" />
      </InputGroup>

      <div className={styles.input_group}>
        <Label htmlFor="password">Senha</Label>
        <PasswordWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Digite aqui"
          />
          <EyeButton type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEyeOffOutline size={24} /> : <IoEyeOutline size={24} />}
          </EyeButton>
        </PasswordWrapper>
      </div>

      <Button type="submit">Enviar</Button>
    </FormStyle>
  );
}
