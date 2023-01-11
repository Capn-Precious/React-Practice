import { Route, Routes } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpsPage from './pages/NewMeetUps';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
    return (
        <Layout>
            <Routes>
                <Route exact path='/' element={<AllMeetUpsPage />} />
                <Route path='/new-meetup' element={ <NewMeetUpsPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
