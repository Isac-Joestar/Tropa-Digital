// components/EventsList.tsx
import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styled from 'styled-components';

const Container = styled.div``;
const Infos = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 38px;
    border-bottom: 1px solid black;    
    border-bottom: 1px solid ${props => props.theme.stroke};

    & li {
        width: 25%;
        display: flex;
        flex-direction: row;
        align-items: center;

        font-size: 12px;
        color: ${props => props.theme.secondaryText};
    }
    
    & li:not(:first-child) {
        padding-left: 20px;
    }
`
const Edit = styled.div`
width: 40px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

font-size: 18px;
color: ${props => props.theme.specialText} !important;
cursor: pointer;

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
    color: ${props => props.theme.secondaryBg};;
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

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = data.filter(event =>
      event.name.toLowerCase().includes(lowerSearch)
    );
    setFilteredEvents(filtered);
    setCurrentPage(1);
  }, [search, data]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container>
      {paginatedEvents.map((event, index) => (
        <Infos key={index}>
          <li>{event.name}</li>
          <li>{event.totalTeams}</li>
          <li>
            <StatusDot status={event.status} /> {event.status}
          </li>
          <li>{event.date}</li>
          <Edit>
            <BsThreeDotsVertical />
          </Edit>
        </Infos>
      ))}

      {totalPages > 1 && (
        <Bottom>
          <Last
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
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
              onClick={() => setCurrentPage(i + 1)}
              $active={currentPage === i + 1}
            >
              {i + 1}
            </PageButton>
          ))}

          <Next
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
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
