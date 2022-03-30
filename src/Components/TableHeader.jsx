import React, {useState} from 'react';

const headerArr = [
    {id: 1111, name: 'אפשרויות'},
    {id: 2222, name: 'סך הכל שעות'},
    {id: 3333, name: 'שעות'},
    {id: 4444, name: 'שעות ידניות'},
    {id: 5555, name: 'שעות חריגות'},
    {id: 6666, name: 'שם עובד'},
    {id: 7777, name: 'מספר ת.ז.'}
]

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const TableHeader = () => {

    const [headerHebrew, setHeaderHebrew] = useState(headerArr)

    const onDragEnd = (result) => {
        if (!result.destination) return
        const items = reorder(
            headerHebrew,
            result.source.index,
            result.destination.index
        );
        setHeaderHebrew(items)
    }

    return (
        <>
            {/*<DragDropContext onDragEnd={onDragEnd}>*/}
            {/*    <Droppable droppableId="droppable-unit" direction="horizontal">*/}
            {/*        {provided => (*/}
            {/*            <div ref={provided.innerRef}>*/}
            {/*                {headerHebrew.map((item, index) => (*/}
            {/*                    <Draggable key={item.id} draggableId={item.id} index={index}>*/}
            {/*                        {provided => (*/}
            {/*                            <div style={{display: 'inline-flex'}}>*/}
            {/*                                <div*/}
            {/*                                    ref={provided.innerRef}*/}
            {/*                                    {...provided.draggableProps}*/}
            {/*                                    {...provided.dragHandleProps}*/}
            {/*                                >*/}
            {/*                                    {item.name}*/}
            {/*                                </div>*/}
            {/*                                {provided.placeholder}*/}
            {/*                            </div>*/}
            {/*                        )}*/}
            {/*                    </Draggable>*/}
            {/*                ))}*/}
            {/*                {provided.placeholder}*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </Droppable>*/}
            {/*</DragDropContext>*/}

            <div className='_tableRow'>
                <div className='table_cell header smallWidth'>אפשרויות</div>
                <div className='table_cell header standardWidth'>סך הכל שעות</div>
                <div className='table_cell header standardWidth'>שעות</div>
                <div className='table_cell header standardWidth'>שעות ידניות</div>
                <div className='table_cell header standardWidth'>שעות חריגות</div>
                <div className='table_cell header wideWidth'>שם עובד</div>
                <div className='table_cell header standardWidth'>מספר ת.ז.</div>
            </div>

        </>
    );
};

export default TableHeader;
