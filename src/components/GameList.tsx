import type { Game } from '../types/game';

interface GameListProps {
    games: Game[];
}

const GameList = ({ games }: GameListProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Title</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Platform</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Physical</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Digital</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Genre</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Publisher</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Release</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {games.map((game: Game, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-sm text-gray-800">{game.title}</td>
                        <td className="px-4 py-2 text-sm text-gray-800">{game.platformId}</td>
                        <td className="px-4 py-2 text-sm text-gray-800">{game.isPhysical ? 'Yes' : 'No'}</td>
                        <td className="px-4 py-2 text-sm text-gray-800">{game.isDigital ? 'Yes' : 'No'}</td>
                        <td className="px-4 py-2 text-sm text-gray-800">{game.genreId}</td>
                        <td className="px-4 py-2 text-sm text-gray-800">{game.publisherId}</td>
                        <td className="px-4 py-2 text-sm text-gray-800">{game.releaseYear}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

};

export default GameList;