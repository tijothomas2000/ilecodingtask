import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';

function App() {
  const [res, setRes] = useState("");

  const handleDataFromChild = async (data) => {
    try {
      const response = await axios.post("http://localhost:8800/submitform", data);
      console.log(response.data);
      setRes("Form Submitted !");
    } catch (err) {
      console.log(err);
      setRes("Failed to Submit");
    }
  }

  return (
    <div className="App">
      <Form sendDataToParent={handleDataFromChild} statusMsg={res} />
    </div>
  );
}

export default App;
