import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ParentComponent, Counter, TodoList, LiveTime } from './components/MemoComponents';
import { LecturerForm, StudentForm } from './components/Forms';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/parent">Parent Component</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/todo">Todo List</Link></li>
            <li><Link to="/time">Live Time</Link></li>
            <li><Link to="/lecturer">Lecturer Form</Link></li>
            <li><Link to="/student">Student Form</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/parent" element={<ParentComponent />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/time" element={<LiveTime />} />
          <Route path="/lecturer" element={<LecturerForm />} />
          <Route path="/student" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
