import React from 'react';
import './App.css';
import CoursesList from './CoursesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React JS Website</h1>
      </header>
      <main className="App-main">
        <CoursesList />
      </main>
    </div>
  );
}

export default App;
