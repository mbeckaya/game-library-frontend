import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Game } from '../types/game';
import { getGameById } from '../service/game-service';
import { boolToText } from '../utils/boolToText';
import ErrorMessage from '../components/ErrorMessage';
import GameItemEntry from '../components/GameItemEntry';

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

            <ul className="space-y-1">
                <GameItemEntry title="ID" value={game.id} />
                <GameItemEntry title="Title" value={game.title} />
                <GameItemEntry title="Platform" value={game.platformId} />
                <GameItemEntry title="Physical" value={boolToText(game.isPhysical)} />
                <GameItemEntry title="Digital" value={boolToText(game.isDigital)} />
                <GameItemEntry title="Genre" value={game.genreId} />
                <GameItemEntry title="Publisher" value={game.publisherId} />
                <GameItemEntry title="Release" value={game.releaseYear} />
            </ul>
        </>
    );
}

export default GameItemView;