import React, { useState } from 'react';
import InfoStep from './containers/InfoStep';
import ServiceStep from './containers/ServiceStep';
import './App.css';

const INIT_DETAILS = {
  newVehicle: {},
  services: [],
  isWait: true
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
      case 1:
        return (
          <ServiceStep
            details={details}
            onChangeDetail={onChangeDetail}
            registeredVehicles={RegisteredVehiclesFromBackend}
            stepIndex={stepIndex}
            setStepIndex={setStepIndex}
          />
        );
      case 0:
        return (
          <InfoStep
            details={details}
            onChangeDetail={onChangeDetail}
            registeredVehicles={RegisteredVehiclesFromBackend}
            stepIndex={stepIndex}
            setStepIndex={setStepIndex}
          />
        );
      default:
        return <div>No such step</div>;
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
