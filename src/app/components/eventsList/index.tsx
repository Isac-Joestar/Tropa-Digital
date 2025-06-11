'use client'
import React, { useEffect, useState, useRef } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styled from 'styled-components';

const Container = styled.div``;
const Row = styled.div.attrs({ role: 'row' })`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  border-bottom: 1px solid black;    
  border-bottom: 1px solid ${props => props.theme.stroke};

  & li {
   
  }
  
  & li:not(:first-child) {
    padding-left: 20px;
  }

  @media (max-width: 1440px) {
  & li {
    font-size: 11px;
  }
  }

  @media (max-width: 1280px) {
    & li {
      font-size: 10px;
    }
  }
`
const Cell = styled.div.attrs({ role: 'cell' })`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 12px;
  color: ${props => props.theme.secondaryText};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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

const Edit = styled.button`
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

`
const Bottom = styled.div`
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
const PageButton = styled.button<{ $active: boolean }>`
    height: 35px;
    width: 35px;
    background-color: ${({ $active, theme }) =>
    $active ? theme.specialBg : theme.tertiaryBg};
    color: ${({ $active }) => ($active ? '#fff' : '#333')};
    border: none;
 
    cursor: ${({ $active }) => ($active ? 'default' : 'pointer')};
    transition: background-color 0.2s;
`;
const Last = styled.button`
    width: 77px;
`
const Next = styled.button`
    width: 77px;
    background-color: ${props => props.theme.specialBg} !important;
    color: #FFFFFF;
`
export const StatusDot = styled.div<{ status: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${({ status }) =>
    status === 'Ativo' ? '#4DEF00' : status === 'Inativo' ? '#F44336' : '#9E9E9E'};
`;

export interface EventInfo {
    name: string;
    totalTeams: number;
    status: string;
    date: string;
  }
interface EventsListProps {
  data: EventInfo[];
  search: string;
}

const EventsList: React.FC<EventsListProps> = ({ data, search }) => {
  const [filteredEvents, setFilteredEvents] = useState<EventInfo[]>(data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const firstRowRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);


  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = data.filter(event =>
      event.name.toLowerCase().includes(lowerSearch)
    );
    setFilteredEvents(filtered);
  
    setCurrentPage(1);
  }, [search, data]);
  
  useEffect(() => {
    isFirstRender.current = false;
  }, []);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  
    setTimeout(() => {
      firstRowRef.current?.focus();
    }, 0);
  };

  return (
    <Container>
      {paginatedEvents.map((event, index) => (
        <Row 
          key={event.name}
          ref={index === 0 ? firstRowRef : null}
          role="row"
          tabIndex={0}
          aria-label={`Evento: ${event.name}, ${event.status}, ${event.date}`}
          >
          <Cell>{event.name}</Cell>
          <Cell>{event.totalTeams}</Cell>
          <Cell>
            <StatusDot status={event.status} /> {event.status}
          </Cell>
          <Cell>{event.date}</Cell>
          <Edit aria-label={`Abrir ações para ${event.name}`}>
            <BsThreeDotsVertical />
          </Edit>
        </Row>
      ))}

      {totalPages > 1 && (
        <Bottom>
          <Last
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            aria-label={`Página anterior`}
            style={{
              cursor: currentPage > 1 ? 'pointer' : 'default',
              opacity: currentPage > 1 ? 1 : 0.5,
            }}
          >
            Anterior
          </Last>

          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i}
              onClick={() => handlePageChange(i + 1)}
              $active={currentPage === i + 1}
              aria-label={`Página ${i + 1}`}
            >
              {i + 1}
            </PageButton>
          ))}

          <Next
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
            aria-label={`Próxima página`}
            style={{
              cursor: currentPage < totalPages ? 'pointer' : 'default',
              opacity: currentPage < totalPages ? 1 : 0.5,
            }}
          >
            Próxima
          </Next>
        </Bottom>
      )}
    </Container>
  );
};

export default EventsList;
