import './draggable.scss';

import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const initialDays = [
  { id: 1, name: 'column1' },
  { id: 2, name: 'column2' },
  { id: 3, name: 'column3' },
  { id: 4, name: 'column4' },
];

function DraggableDays({ showSidebar, colored, color, pinIndex, rowIndex }) {
  const [days, setDays] = useState(initialDays);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(days);
    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);

    setDays(items);
  };

  return (
    <div className="day-list-container">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="days" direction="horizontal">
          {(provided) => (
            <div
              className={
                showSidebar
                  ? 'day-list-sidebar-open'
                  : 'day-list-sidebar-closed'
              }
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {days.map((day, index) => (
                <Draggable key={day.id} draggableId={day.name} index={index}>
                  {(dragProvider) => (
                    <div
                      ref={dragProvider.innerRef}
                      {...dragProvider.draggableProps}
                      {...dragProvider.dragHandleProps}
                      className={
                        pinIndex === rowIndex
                          ? `day-regular-${color}`
                          : `day-${colored}-${color}`
                      }
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
export default DraggableDays;
