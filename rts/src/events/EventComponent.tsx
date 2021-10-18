
const EventComponent: React.FC = () => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }

    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e.clientX);
    }

    return (
        <>
        <input onChange={onChangeHandler} />
        <div draggable onDragStart={onDragStart}>Drag me!</div>
        </>
    )
}

export default EventComponent;