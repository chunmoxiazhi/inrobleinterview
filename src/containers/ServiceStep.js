import React, { useState } from 'react';
import StepLayout from '../layouts/StepLayout';

const styles = {
  fieldsContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 15
  },
  serviceContainer: {
    width: '55%',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    padding: 5
  },
  waitContainer: {
    width: '35%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5
  },
  selector: {
    display: 'flex',
    alignItems: 'center'
  }
}

export default function ServiceStep({
  details,
  onChangeDetail,
  stepIndex,
  setStepIndex
}) {

  const getFields = () => {
    const serviceTypes = [
      'Tire Change',
      'Brake Service',
      'Oil Change',
      'Others'
    ];
    const serviceSelector = serviceTypes.map(serviceType => {
      return (
        <div key={serviceType} style={styles.selector}>
          <input
            type='checkbox'
            name='serviceType'
            value={serviceType}
            checked={details.services.includes(serviceType)}
            onChange={e => {
              const value = e.target.value;
              const newSelected = details.services.includes(value)
                ? details.services.filter(service => service !== value)
                : [...details.services, value];
              onChangeDetail('services', newSelected);
            }}
          />
          <label>{serviceType}</label>
        </div>
      )
    });
    return (
      <section style={styles.fieldsContainer}>
        <div style={styles.serviceContainer}>
          {serviceSelector}
        </div>
        <div style={styles.waitContainer}>
          <div style={styles.selector}>
            <input
              type="radio"
              value="wait"
              checked={details.isWait}
              onChange={e => {
                const value = e.target.value;
                onChangeDetail('isWait', value === 'wait');
              }}
            />
            <label>Wait</label>
          </div>
          <div style={styles.selector}>
            <input
              type="radio"
              value="Drop-Off"
              checked={!details.isWait}
              onChange={e => {
                const value = e.target.value;
                onChangeDetail('isWait', value === 'wait');
              }}
            />
            <label>Drop-Off</label>
          </div>
        </div>
      </section>
    );
  }

  return (
    <StepLayout
      title="Select Service"
      stepIndex={stepIndex}
      setStepIndex={setStepIndex}
    >
      <section>
        {getFields()}
      </section>
    </StepLayout>
  )
}