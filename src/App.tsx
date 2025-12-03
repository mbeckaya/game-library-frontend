import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamesListView from './views/GamesListView';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<GamesListView />} />
        </Routes>
    </BrowserRouter>
);

export default App;