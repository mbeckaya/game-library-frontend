import type { Game } from '../types/game';
import TableCell from './TableCell';

type GameListProps = {
    games: Game[];
}

const GameList = ({ games }: GameListProps) => {
    if (games.length === 0) return;

    return (
        <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-2">Games ({games.length})</h2>

            <table className="border border-gray-300 w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <TableCell type="header" text="Title" />
                        <TableCell type="header" text="Platform" />
                        <TableCell type="header" text="Physical" />
                        <TableCell type="header" text="Digital" />
                        <TableCell type="header" text="Genre" />
                        <TableCell type="header" text="Publisher" />
                        <TableCell type="header" text="Release" />
                    </tr>
                </thead>
                <tbody className="">
                    {games.map((game: Game) => (
                        <tr key={game.id}>
                            <TableCell type="cell" text={game.title} />
                            <TableCell type="cell" text={game.platformId} />
                            <TableCell type="cell" text={game.isPhysical ? 'Yes' : 'No'} />
                            <TableCell type="cell" text={game.isDigital ? 'Yes' : 'No'} />
                            <TableCell type="cell" text={game.genreId} />
                            <TableCell type="cell" text={game.publisherId} />
                            <TableCell type="cell" text={game.releaseYear} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default GameList;