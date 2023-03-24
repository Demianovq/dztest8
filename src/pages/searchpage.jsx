import { fetchEventsByName } from 'services/eventsApi';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';

export const SearchPage = () => {
  const [Evts, SetAEvts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventName = searchParams.get('eventName');
  const location = useLocation();
  useEffect(() => {
    if (!eventName) return;
    fetchEventsByName(eventName)
      .then(SetAEvts)
      .catch(error => console.log(error));
  }, [eventName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ username: form.elements.eventName.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventName" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {Evts.map(evt => {
          console.log(Evts);
          return (
            <li key={evt.id}>
              <Link to={evt.id}>
                {evt.name} state={{ from: location }}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
