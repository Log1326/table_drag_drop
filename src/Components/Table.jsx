import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {_Get_Data_Table} from "../store/Actions/tableAction";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {Is_Get_Data} from "../store/Reducers/tableReducer";

const Table = () => {
    const {data} = useSelector(state => state.table)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(_Get_Data_Table())
    }, [])

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        dispatch(Is_Get_Data(items))
    }


    return (
        <>

            <TableHeader/>


            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="_id_droppableId" direction="vertical">
                    {provided => (
                        <div ref={provided.innerRef}>
                            {data.map((item, index) =>
                                <Draggable key={`key_${String(item.id)}`}
                                           draggableId={`id_${String(item.id)}`}
                                           index={index}
                                >
                                    {provided => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            <TableRow provided={provided} item={item}/>
                                        </div>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    );
};

export default Table;