import './App.css';
import {Route, Routes} from 'react-router-dom';

import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUps";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return (
        <div>
            <MainNavigation />
            <Routes>
                <Route path={'/'} element={<AllMeetUpsPage />} />
                <Route path={'/new-meetup'} element={<NewMeetUpsPage/>} />
                <Route path={'/favorites'} element={<FavoritesPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
