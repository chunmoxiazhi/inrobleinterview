import React, { useState } from 'react';
import InfoStep from './containers/InfoStep';
import './App.css';

const INIT_DETAILS = {

};

const RegisteredVehiclesFromBackend = [
  { id: 1, name: 'vehicle 1' },
  { id: 2, name: 'vehicle 2' },
  { id: 3, name: 'vehicle 3' }
];

function App() {
  const [details, setDetails] = useState(INIT_DETAILS);
  const [stepIndex, setStepIndex] = useState(0);

  const onChangeDetail = (name, value) => {
    const newDetails = { ...details };
    newDetails[name] = value;
    setDetails(newDetails);
  }

  const getStepContainer = () => {
    switch (stepIndex) {
      case 0:
      default:
        return (
          <InfoStep
            details={details}
            onChangeDetail={onChangeDetail}
            registeredVehicles={RegisteredVehiclesFromBackend}
            setStepIndex={setStepIndex}
          />
        );
    }
  }
  
  const stepContainer = getStepContainer();

  return (
    <div className="App">
      {stepContainer}
    </div>
  );
}

export default App;
