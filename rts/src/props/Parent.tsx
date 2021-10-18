import Child from './Child';

const onClickHandler = () => {
    console.log('hello')
}

const Parent = () => {
    return <Child onClick={onClickHandler} />
}

export default Parent;