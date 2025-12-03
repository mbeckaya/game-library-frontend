import { useNavigate } from 'react-router-dom';
import type { Game } from '../types/game';
import TableCell from './TableCell';
import { boolToText } from '../utils/boolToText';

type GameListProps = {
    games: Game[];
}

const GameList = ({ games }: GameListProps) => {
    const navigate = useNavigate();

    const handleDetailClick = (id: number|undefined) => {
        navigate(`/detail/${id}`);
    };

    if (games.length > 0) {
        return (
            <div className="overflow-x-auto">
                <h2 className="text-xl font-bold mb-2">Games ({games.length})</h2>

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
                                    <button
                                        onClick={() => handleDetailClick(game.id)}
                                        className="cursor-pointer bg-blue-500 rounded text-white p-2"
                                    >
                                        Details
                                    </button>
                                </TableCell>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

};

export default GameList;