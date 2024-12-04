import React from 'react';
import { ParentComponent, Counter, TodoList, LiveTime} from '../Memo/MemoComponents'
import BackButton from './back';

 function Memo(){

    return (
        <div className='Memo'>
        <BackButton/>
        <ParentComponent/>
        <Counter/>
        <TodoList/>
        <LiveTime/>
        </div>
    )
 }   

 export default Memo;
    