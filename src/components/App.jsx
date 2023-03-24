import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Homepage } from 'pages/homepages';
import { EventPage } from 'pages/eventpage';
import { EventSubPage } from '../pages/eventsubpage';
import { SearchPage } from '../pages/searchpage';
import { EventDetailsPage } from 'pages/eventdetailspage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="events" element={<EventPage />}>
            <Route path=":eventid" element={<EventSubPage />} />
          </Route>
          <Route path="search" element={<SearchPage />}>
            <Route path=":eventid" element={<EventSubPage />} />
          </Route>
          <Route
            path="search/:eventid/details"
            element={<EventDetailsPage />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
