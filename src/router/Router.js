// ** Router Components
import { Route, Routes } from 'react-router-dom';
import DataTable from '../components/DataTable';
import Layout from '../components/Layout';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import RentList from '../views/rent/List/RentList';
// ** Routes & Default Routes

const MainRouter = ( props ) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rents" element={<RentList />} />
        <Route path="dt" element={<DataTable />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
