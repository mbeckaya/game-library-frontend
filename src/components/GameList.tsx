import { Link } from 'react-router-dom';
import type { Game } from '../types/game';
import TableCell from './TableCell';
import { boolToText } from '../utils/boolToText';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';

type GameListProps = {
    games: Game[];
}

const GameList = ({ games }: GameListProps) => {
    if (games.length === 0) return;

    return (
        <div className="overflow-x-auto">
            <table className="border border-gray-300 w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <TableCell type="header">Title</TableCell>
                        <TableCell type="header">Platform</TableCell>
                        <TableCell type="header">Physical</TableCell>
                        <TableCell type="header">Digital</TableCell>
                        <TableCell type="header">Genre</TableCell>
                        <TableCell type="header">Publisher</TableCell>
                        <TableCell type="header">Release</TableCell>
                        <TableCell type="header">Action</TableCell>
                    </tr>
                </thead>
                <tbody className="">
                    {games.map((game: Game) => (
                        <tr key={game.id}>
                            <TableCell type="cell">{game.title}</TableCell>
                            <TableCell type="cell">{game.platformId}</TableCell>
                            <TableCell type="cell">{boolToText(game.isPhysical)}</TableCell>
                            <TableCell type="cell">{boolToText(game.isDigital)}</TableCell>
                            <TableCell type="cell">{game.genreId}</TableCell>
                            <TableCell type="cell">{game.publisherId}</TableCell>
                            <TableCell type="cell">{game.releaseYear}</TableCell>
                            <TableCell type="cell">
                                <Link
                                    to={`/detail/${game.id}`}
                                    className="flex items-center gap-1 justify-center bg-blue-500 rounded text-white p-2"
                                >
                                    <MagnifyingGlassCircleIcon className="h-4 w-4" />
                                    <span>Details</span>
                                </Link>
                            </TableCell>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default GameList;