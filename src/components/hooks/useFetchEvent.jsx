import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'services/eventsApi';

export const useFetchEvent = () => {
  const [evt, setAEvt] = useState(null);
  const { eventId } = useParams();
  useEffect(() => {
    fetchEventById(eventId)
      .then(setAEvt)
      .catch(error => console.log(error));
  }, [eventId]);
  return evt;
};
