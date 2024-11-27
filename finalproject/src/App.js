import React, { useState, useMemo } from 'react';
import './App.css';

// 5. React.memo Section
function SectionTitle({ title, questionNumber, question }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Question {questionNumber}: {question}</h2>
    </div>
  );
}

// 21. Parent component passing prop to a child with React.memo
const ChildComponent = React.memo(({ name }) => {
  console.log('Child rendered');
  return <div>Child Component: {name}</div>;
});

function ParentComponent() {
  const [name, setName] = useState('John');
  return (
    <div>
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

function Counter() {
  const [count, setCount] = useState(0);
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
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
const HeavyCalculation = React.memo(() => {
  const calculate = () => {
    console.log('Heavy calculation running');
    return 2 + 2;
  };

  return <div>Calculation Result: {calculate()}</div>;
});

// 24. Todo list with React.memo to prevent unnecessary re-renders
const TodoListItem = React.memo(({ todo }) => {
  console.log('TodoListItem rendered');
  return <li>{todo}</li>;
});

function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Learn JavaScript', 'Build a project']);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoListItem key={index} todo={todo} />
        ))}
      </ul>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

// 25. Live time updates with React.memo to prevent unnecessary re-renders
const LiveTime = React.memo(() => {
  console.log('LiveTime rendered');
  const time = new Date().toLocaleTimeString();
  return <div>Live Time: {time}</div>;
});

// Registration Forms Section
// 26. Registration Form for Lecturers
function LecturerForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const phoneRegex = /^[0-9]+$/;
    if (!emailRegex.test(email)) {
      setFormError('Invalid email format');
    } else if (!phoneRegex.test(phone)) {
      setFormError('Phone number should be numeric');
    } else {
      setFormError('');
      alert('Lecturer registration successful');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
      />
      <input 
        type="text" 
        placeholder="Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required
      />
      <input 
        type="text" 
        placeholder="Subject" 
        required
      />
      <button type="submit">Register</button>
      {formError && <p style={{color: 'red'}}>{formError}</p>}
    </form>
  );
}

// 27. Registration Form for Students
function StudentForm() {
  const [studentId, setStudentId] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentIdRegex = /^[a-zA-Z0-9]+$/;
    if (!studentIdRegex.test(studentId)) {
      setFormError('Student ID must contain only alphanumeric characters');
    } else {
      setFormError('');
      alert('Student registration successful');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="First Name" 
        required
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        required
      />
      <input 
        type="text" 
        placeholder="Student ID" 
        value={studentId} 
        onChange={(e) => setStudentId(e.target.value)} 
        required
      />
      <input 
        type="date" 
        placeholder="Date of Birth" 
        required
      />
      <button type="submit">Register</button>
      {formError && <p style={{color: 'red'}}>{formError}</p>}
    </form>
  );
}

// 28. Registration Form for Drivers
function DriverForm() {
  const [vehicleType, setVehicleType] = useState('');
  return (
    <form>
      <input 
        type="text" 
        placeholder="Name" 
        required
      />
      <input 
        type="text" 
        placeholder="License Number" 
        required
      />
      <input 
        type="text" 
        placeholder="Phone Number" 
        required
      />
      <select 
        value={vehicleType} 
        onChange={(e) => setVehicleType(e.target.value)} 
        required
      >
        <option value="">Select Vehicle Type</option>
        <option value="car">Car</option>
        <option value="truck">Truck</option>
        <option value="motorcycle">Motorcycle</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

// 29. Registration Form for Books
function BookForm() {
  const [publishedYear, setPublishedYear] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (publishedYear.length !== 4 || isNaN(publishedYear)) {
      setFormError('Published Year must be a four-digit number');
    } else {
      setFormError('');
      alert('Book registration successful');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Book Title" 
        required
      />
      <input 
        type="text" 
        placeholder="Author" 
        required
      />
      <input 
        type="text" 
        placeholder="ISBN" 
        required
      />
      <input 
        type="text" 
        placeholder="Published Year" 
        value={publishedYear} 
        onChange={(e) => setPublishedYear(e.target.value)} 
        required
      />
      <button type="submit">Register</button>
      {formError && <p style={{color: 'red'}}>{formError}</p>}
    </form>
  );
}

// 30. Registration Form for Modules
function ModuleForm() {
  const [credits, setCredits] = useState('');
  return (
    <form>
      <input 
        type="text" 
        placeholder="Module Name" 
        required
      />
      <input 
        type="text" 
        placeholder="Module Code" 
        required
      />
      <textarea 
        placeholder="Description" 
        required
      />
      <input 
        type="number" 
        placeholder="Credits" 
        value={credits} 
        onChange={(e) => setCredits(e.target.value)} 
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

// Main App component
function App() {
  return (
    <div>
      {/* React.memo Section */}
      <SectionTitle 
        title="React.memo"
        questionNumber="21"
        question="Create a parent component that passes a prop to a child component. Use React.memo to prevent the child component from re-rendering unnecessarily."
      />
      <ParentComponent />
      <hr />

      <SectionTitle 
        title="React.memo"
        questionNumber="22"
        question="Build a component that displays a counter. Use React.memo to optimize a list of unrelated items from re-rendering."
      />
      <Counter />
      <hr />

      <SectionTitle 
        title="React.memo"
        questionNumber="23"
        question="Create a 'heavy calculation' component that uses React.memo to optimize performance."
      />
      <HeavyCalculation />
      <hr />

      <SectionTitle 
        title="React.memo"
        questionNumber="24"
        question="Build a todo list app where the list component is memoized to prevent re-renders when the input changes."
      />
      <TodoList />
      <hr />

      <SectionTitle 
        title="React.memo"
        questionNumber="25"
        question="Implement a component that shows live time updates but prevents unnecessary re-renders of static UI parts."
      />
      <LiveTime />
      <hr />

      {/* Registration Forms Section */}
      <SectionTitle 
        title="Registration Forms"
        questionNumber="26"
        question="Registration Form for Lecturers"
      />
      <LecturerForm />
      <hr />

      <SectionTitle 
        title="Registration Forms"
        questionNumber="27"
        question="Registration Form for Students"
      />
      <StudentForm />
      <hr />

      <SectionTitle 
        title="Registration Forms"
        questionNumber="28"
        question="Registration Form for Drivers"
      />
      <DriverForm />
      <hr />

      <SectionTitle 
        title="Registration Forms"
        questionNumber="29"
        question="Registration Form for Books"
      />
      <BookForm />
      <hr />

      <SectionTitle 
        title="Registration Forms"
        questionNumber="30"
        question="Registration Form for Modules"
      />
      <ModuleForm />
      <hr />
    </div>
  );
}

export default App;
