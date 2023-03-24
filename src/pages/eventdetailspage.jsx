import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchEvent } from 'components/hooks/useFetchEvent';

export const EventDetailsPage = () => {
  const data = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    data && (
      <div>
        <button
          type="button"
          onClick={() => {
            navigate(location?.state?.from);
          }}
        >
          nav Go Back
        </button>
        <h3>{data.classifications[0].genre.name}</h3>
        <h3>{data.classifications[0].SubGenre.name}</h3>
      </div>
    )
  );
};
