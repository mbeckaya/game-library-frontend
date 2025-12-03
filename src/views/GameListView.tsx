import { useEffect, useState } from 'react';
import type { Game } from '../types/game';
import { getGames } from '../service/game-service';
import GameList from '../components/GameList';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const GameListView = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            try {
                const games: Game[] = await getGames();
                setGames(games);
            } catch {
                setErrorMsg('Could not load games!');
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Game List</h1>

            <ErrorMessage message={errorMsg} />

            {isLoading ? (
                <Loading />
            ) : (
                <GameList games={games} />)
            }
        </>
    );
}

export default GameListView;