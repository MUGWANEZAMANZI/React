import React from 'react';
import { ParentComponent, Counter, TodoList, LiveTime, HeavyCalculation} from '../Memo/MemoComponents'
import BackButton from './back';

 function Memo(){

    return (
        <>
        <BackButton/>
        <div className='Memo'>
        <ParentComponent/>
        <Counter/>
        <HeavyCalculation/>
        <TodoList/>
        <LiveTime/>
        </div>
        </>
    );
 }   

 export default Memo;
    