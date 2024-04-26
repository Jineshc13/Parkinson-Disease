import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';

const Detection = () => {
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log(formData)
  //     const response = await axios.post('/predict_api', formData);
  //     console.log(response.data)
  //     setPrediction(response.data);
  //   } catch (error) {
  //     console.error('Error fetching prediction:', error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await fetch('http://localhost:5000/predict_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json()
      console.log(data)
      if (data.error) { // Check if the response contains an error
        setError(data.error); // Set the error state
        setPrediction(null); // Clear the prediction state
      } else {
        console.log(data)
        setPrediction(data); // Set the prediction state
        setError(null); // Clear the error state
      }
    } catch (error) {
      setError('Error submitting form:', error.message);
      setPrediction(null);
    }
  }
  return (
    <>
    <Navbar/>
    <div>
      <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
      <h1 className=''>Predict Form</h1>
        <label>
          Input 1:
          <input type="text" name="PPE" placeholder="PPE" onChange={handleChange} class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </label>
        <label>
          Input 2:
          <input type="text" name="DFA" placeholder="DFA" onChange={handleChange} class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </label>
        <label>
          Input 3:
          <input type="text" name="RPDE" placeholder="RPDE" onChange={handleChange} class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </label>
        <label>
          Input 4:
          <input type="text" name="numPulses" placeholder="numPulses" onChange={handleChange} class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </label>
        <label>
          Input 5:
          <input type="text" name="numPeriodsPulses" placeholder="numPeriodsPulses" onChange={handleChange} class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </label>
        {/* Add more input fields as needed */}
        <button type="submit" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Predict</button>
      {prediction && <div>Prediction: {prediction}</div>}
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Detection;
