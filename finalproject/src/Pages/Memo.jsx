import React from 'react';
import { ParentComponent, Counter, TodoList, LiveTime} from '../Memo/MemoComponents'
import BackButton from './back';

 function Memo(){

    return (
        <>
        <BackButton/>
        <ParentComponent/>
        <Counter/>
        <TodoList/>
        <LiveTime/>
        </>
    )
 }   

 export default Memo;
    