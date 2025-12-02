import { useEffect, useState } from 'react';
import type { Game } from '../types/game';
import { fetchGames } from '../service/fetch-games';
import GameList from './GameList';

const GameView = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            const games: Game[] = await fetchGames();

            setGames(games);

            setIsLoading(false);
        })();
    }, []);

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <GameList games={games} />)
            }
        </>
    );
};

export default GameView;