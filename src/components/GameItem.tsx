import type { Game } from '../types/game';
import { boolToText } from '../utils/boolToText';
import GameItemEntry from './GameItemEntry';

type GameItemProps = {
    game: Game;
}

const GameItem = ({ game }: GameItemProps) => (
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
);

export default GameItem;