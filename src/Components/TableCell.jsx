import React from 'react';

const TableCell = ({item, size}) => {
    return (
        <div className={`table_cell ${size}`}>
            {item}
        </div>
    );
};

export default TableCell;