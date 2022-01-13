import { memo } from 'react';
import { useDrop } from 'react-dnd';

export const Board = memo(function Board({ accept, lastDroppedItem, onDrop, soal, Iqra }) {

    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const isActive = isOver && canDrop;
    let backgroundColor = 'bg-white';
    let color, transform = '';

    if (isActive) {
        backgroundColor = 'bg-gray-400';
        transform = 'scale-110'
    }
    else if (canDrop) {
        color = "text-custom-text"
        backgroundColor = 'bg-white';
    }

    // className={`${color} ${backgroundColor} ${transform} flex justify-center items-center w-3/12 h-60 m-2 text-gray-200 text-2xl border-2 border-dashed border-custom-text rounded-lg `} 

    return (<div className={`${color} ${backgroundColor} ${transform} flex justify-center items-center w-3/12 h-40 m-2 text-custom-text text-2xl border-2 border-dashed border-custom-text rounded-lg `} ref={drop} >
        <p className='text-center'>{lastDroppedItem ? '' : isActive ? 'Release to drop' : soal['name']}</p>

        {lastDroppedItem &&
            (Iqra.filter(f => lastDroppedItem.name === f.nama_huruf).map(m => {
                return <img className='w-2/5 rounded-lg' key={m.id_huruf} src={m.gambar_huruf} alt={m.nama_huruf}></img>
            }))
        }
    </div>);
});
