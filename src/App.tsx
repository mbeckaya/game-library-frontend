import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameListView from './views/GameListView';
import GameItemView from './views/GameItemView';

const App = () => (
    <BrowserRouter>
        <main className="max-w-screen-xl mx-auto p-4">
            <Routes>
                <Route path="/" element={<GameListView />} />
                <Route path="/detail/:id" element={<GameItemView />} />
            </Routes>
        </main>
    </BrowserRouter>
);

export default App;