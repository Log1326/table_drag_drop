import React from 'react';
import {BsFillBarChartFill, BsThreeDotsVertical} from "react-icons/bs";

const TableCellOptions = ({ size, provided}) => {
    return (
        <div className={` _headerTable ${size}`}>
            <span {...provided.dragHandleProps} className='table_cell smallWidth2'><i>{BsThreeDotsVertical()}</i></span>
            <span onClick={() => alert('filter')}
                  className='table_cell smallWidth2'><i>{BsFillBarChartFill()}</i></span>
        </div>
    );
};

export default TableCellOptions;