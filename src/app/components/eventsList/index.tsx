'use client'
import React, { useEffect, useState, useRef } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {Container, Content_table, Row, Cell, StatusDot, Edit, Bottom, PageButton, Last, Next} from './styles'



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
      <Content_table>
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
      </Content_table>

      {totalPages > 1 && (
        <Bottom>
          <Last
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            aria-label="Página anterior"
            $disabled={currentPage === 1}
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
