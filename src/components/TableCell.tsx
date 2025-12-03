type TableCellProps = {
    type: 'header' | 'cell';
    children: React.ReactNode;
};

const TableCell = ({ type, children }: TableCellProps) => {
    const Tag = type === 'header' ? 'th' : 'td';

    return (
        <Tag className="border border-gray-300 p-2">
            {children}
        </Tag>
    );
};

export default TableCell;