import { memo } from 'react';
import { useDrag } from 'react-dnd';

export const Box = memo(function Box({ name, type, isDropped, image, closeModal }) {

    const [{ opacity }, drag] = useDrag(() => ({
        type,
        item: { name },
        collect: (monitor) => (
            {
                opacity: monitor.isDragging() ? 0.4 : 1,
                // eslint-disable-next-line no-sequences
            }, monitor.isDragging() ? closeModal() : ''
        ),
    }), [name, type]);

    return (<div className={`${opacity} w-1/4 h-auto mx-1% my-2`} ref={drag} >
        {/* {isDropped ? <s>{name}</s> : name} */}
        {<img className='w-full cursor-pointer rounded-lg' src={image} alt={name} width="50px" />}
    </div>);
});
