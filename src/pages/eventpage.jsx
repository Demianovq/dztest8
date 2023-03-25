import { fetchEvents } from '../services/eventsApi';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const EventPage = () => {
  const [events, setAEvents] = useState([]);
  const { eventId } = useParams();

  useEffect(() => {
    fetchEvents(eventId)
      .then(setAEvents)
      .catch(error => console.log(error));
  }, [eventId]);
  return (
    <div>
      <ul>
        {events.map(event => {
          return (
            <li key={event.id}>
              <Link to={event.id}>{event.name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};
