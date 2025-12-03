type GameItemEntryProps = {
    title: string;
    value: string|number|undefined;
};

const GameItemEntry = ({ title, value }: GameItemEntryProps) => (
    <li>
        <span className="font-bold">{title}:</span> <span>{value}</span>
    </li>
);

export default GameItemEntry;