import { useEffect, useState } from 'react';
import type { Game } from '../types/game';
import { fetchGames } from '../service/fetch-games';
import GameList from '../components/GameList';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const GamesListView = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            try {
                const games: Game[] = await fetchGames();
                setGames(games);
            } catch {
                setErrorMsg('Could not load games!');
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return (
        <main className="max-w-screen-xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">App Game Library</h1>

            <ErrorMessage message={errorMsg} />

            {isLoading ? (
                <Loading />
            ) : (
                <GameList games={games} />)
            }
        </main>
    );
}

export default GamesListView;