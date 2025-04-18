import React, { useState } from 'react';
import { Toast } from './components/Feedback/Toast';
import { TextInput } from './components/DataEntry/TextInput';
import { Typography } from './components/Typography/Typography';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="App p-6">
      <Typography variant="h1">Design System Demo</Typography>
      <Typography variant="body1" className="mt-4 mb-6">
        A demo of our design system components
      </Typography>

      <div className="mb-6">
        <TextInput 
          label="Example Input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          helperText="Type something here"
          placeholder="Enter text"
        />
      </div>

      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowToast(true)}
      >
        Show Toast
      </button>

      {showToast && (
        <Toast 
          variant="success"
          message="This is a success toast message!"
          title="Success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default App;