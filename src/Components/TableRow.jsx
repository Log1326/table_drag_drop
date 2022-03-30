import React from 'react';
import TableCell from "./TableCell";
import TableCellOptions from "./TableCellOptions";


const TableRow = ({item, provided}) => {
    return (
        <div className='_tableRow'>
            <TableCellOptions size='smallWidth' item={item} provided={provided}/>
            <TableCell size='standardWidth' item={item.Hours}/>
            <TableCell size='standardWidth' item={item.Total_Hours}/>
            <TableCell size='standardWidth' item={item.Manual_Hours}/>
            <TableCell size='standardWidth' item={item.ExtraordinaryHours}/>
            <TableCell size='wideWidth' item={item.fullName}/>
            <TableCell size='standardWidth' item={item.id}/>
        </div>
    );
};

export default TableRow;