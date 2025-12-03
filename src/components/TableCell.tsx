type TableCellProps = {
    type: 'header' | 'cell';
    text: string|number;
};

const TableCell = ({ type, text }: TableCellProps) => {
    const Tag = type === 'header' ? 'th' : 'td';

    return (
        <Tag className="border border-gray-300 p-2">
            {text}
        </Tag>
    );
};

export default TableCell;