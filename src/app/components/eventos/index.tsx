'use client'

import styles from './index.module.css'
import { useState} from 'react';
import {Container, NewEventBtn, Titles} from './styles'

import EventsList from '../eventsList';
import Search from '../Search/index';
interface EventInfo {
    name: string;
    totalTeams: number;
    status: string;
    date: string;
}

const eventsData: EventInfo[] = [
    { name: 'Clube do Laço Coração Pantaneiro', totalTeams: 10, status: 'Ativo', date: '09 a 11 de junho' },
    { name: 'Festival de Rodeio de Barretos', totalTeams: 12, status: 'Ativo', date: '01 a 03 de janeiro' },
    { name: 'Encontro Gaúcho de Laço', totalTeams: 8, status: 'Inativo', date: '07 a 09 de fevereiro' },
    { name: 'Torneio Nacional de Vaquejada', totalTeams: 15, status: 'Ativo', date: '14 a 16 de fevereiro' },
    { name: 'Desafio Sertanejo de Laço', totalTeams: 10, status: 'Ativo', date: '21 a 23 de fevereiro' },
    { name: 'Copa Pantaneira de Laço', totalTeams: 11, status: 'Inativo', date: '01 a 03 de março' },
    { name: 'Circuito do Cavalo Crioulo', totalTeams: 13, status: 'Ativo', date: '08 a 10 de março' },
    { name: 'Laço Comprido Sul-Americano', totalTeams: 14, status: 'Inativo', date: '15 a 17 de março' },
    { name: 'Rodeio Internacional dos Pampas', totalTeams: 16, status: 'Ativo', date: '22 a 24 de março' },
    { name: 'Cavalgada da Integração', totalTeams: 9, status: 'Inativo', date: '29 a 31 de março' },
    { name: 'Grande Torneio do Cerrado', totalTeams: 12, status: 'Ativo', date: '12 a 14 de abril' },
    { name: 'Festival do Cavalo de Ouro', totalTeams: 18, status: 'Inativo', date: '19 a 21 de abril' },
    { name: 'Rodeio do Vale Encantado', totalTeams: 11, status: 'Ativo', date: '26 a 28 de abril' },
    { name: 'Campeonato Nacional de Rodeio', totalTeams: 20, status: 'Ativo', date: '03 a 05 de maio' },
    { name: 'Torneio Leste-Oeste de Vaquejada', totalTeams: 13, status: 'Inativo', date: '10 a 12 de maio' },
    { name: 'Rodeio dos Fortes', totalTeams: 15, status: 'Inativo', date: '17 a 19 de maio' },
    { name: 'Desafio do Campo Grande', totalTeams: 17, status: 'Ativo', date: '24 a 26 de maio' },
    { name: 'Festival Sertanejo de Laço', totalTeams: 14, status: 'Ativo', date: '31 de maio a 02 de junho' },
    { name: 'Vaquejada dos Campeões', totalTeams: 16, status: 'Ativo', date: '07 a 09 de junho' },
    { name: 'Circuito do Interior', totalTeams: 10, status: 'Inativo', date: '14 a 16 de junho' },
    { name: 'Copa Brasil de Rodeio', totalTeams: 19, status: 'Ativo', date: '21 a 23 de junho' },
    { name: 'Desafio Nacional Sertanejo', totalTeams: 12, status: 'Ativo', date: '28 a 30 de junho' },
    { name: 'Rodeio da Independência', totalTeams: 13, status: 'Inativo', date: '05 a 07 de julho' },
    { name: 'Campeonato Caipira de Laço', totalTeams: 15, status: 'Ativo', date: '12 a 14 de julho' },
    { name: 'Festival Rural de Vaquejada', totalTeams: 17, status: 'Ativo', date: '19 a 21 de julho' },
];
  
function EventosContainer(){
    const [search, setSearch] = useState('');

    return(
        <Container>
            <div className={styles.top}>
                <Search search={search} setSearch={setSearch}/>
                <NewEventBtn>+ inserir novo</NewEventBtn>
            </div>
            <Titles>
                <li>Nome do evento</li>
                <li>Total de equipes</li>
                <li>Status</li>
                <li>Data</li>
                <li></li>
            </Titles>
            <EventsList data={eventsData} search={search} />
        </Container>
    )
}

export default EventosContainer