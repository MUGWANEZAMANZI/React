import React, { useState } from 'react';

// 21. Parent component passing prop to a child with React.memo
function ChildComponent (props){
  console.log('Child rendered');
  return <div>Child Component: {props.name}</div>;
};

export function ParentComponent() {
  const [name, setName] = useState('John');
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name={name} />
      <button onClick={() => setName('Doe')}>Change Name</button>
    </div>
  );
}

// 22. Counter with React.memo for unrelated items
const ListItem = React.memo(({ item }) => {
  console.log('ListItem rendered');
  return <li>{item}</li>;
});

export function Counter() {
  const [count, setCount] = useState(0);
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>Counter</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

// 23. Heavy calculation component with React.memo
export const HeavyCalculation = React.memo(() => {
  const calculate = () => {
    console.log('Heavy calculation running');
    return 2 + 2;
  };

  return (
    <div>
      <h1>Heavy Calculation</h1>
      <p>Calculation Result: {calculate()}</p>
    </div>
  );
});

// 24. Todo list with React.memo
const TodoListItem = React.memo(({ todo }) => {
  console.log('TodoListItem rendered');
  return <li>{todo}</li>;
});

export function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Learn JavaScript', 'Build a project']);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <TodoListItem key={index} todo={todo} />
        ))}
      </ul>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

// 25. Live time updates with React.memo
export const LiveTime = React.memo(() => {
  console.log('LiveTime rendered');
  const time = new Date().toLocaleTimeString();
  return (
    <div>
      <h1>Live Time</h1>
      <p>Current Time: {time}</p>
    </div>
  );
});
