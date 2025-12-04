import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Game } from '../types/game';
import { getGameById } from '../service/game-service';
import ErrorMessage from '../components/ErrorMessage';
import GameItem from '../components/GameItem';

const GameItemView = ()=> {
    const [game, setGame] = useState<Game>({} as Game);
    const [errorMsg, setErrorMsg] = useState('');
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const gameItem: Game = await getGameById(id);
                setGame(gameItem);
            } catch {
                setErrorMsg('Could not load game details!');
            }
        })();
    }, [id]);

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Game Detail</h1>

            <ErrorMessage message={errorMsg}/>

            <GameItem game={game} />
        </>
    );
}

export default GameItemView;