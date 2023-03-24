import { useFetchEvent } from 'components/hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';
export const EventSubPage = () => {
  const evtObj = useFetchEvent();
  const location = useLocation();
  return (
    evtObj && (
      <>
        <h2>{evtObj.name}</h2>
        <img src={evtObj.images[0].url} alt={evtObj.name} />
        <Link to="details" state={{ from: location }}>
          More Info
        </Link>
      </>
    )
  );
};
