import React from 'react';
import { DARK_BLUE, LIGHT_BLUE, LIGHT_GREY } from '../constants';

const styles = {
  mainContainer: {
    border: '1px solid',
    borderRadius: 5,
    borderColor: LIGHT_GREY,
    width: '70%',
    marginLeft: '15%',
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    color: DARK_BLUE
  },
  fieldsContainer: {
    backgroundColor: LIGHT_BLUE,
    width: '90%',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  actionContainer: {
    display: 'flex',
    width: '90%',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: 10
  },
  stepContainer: {
    display: 'flex',
    width: '90%',
    justifyContent: 'space-around',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: 10
  },
  activeStep: {
    backgroundColor: DARK_BLUE,
    borderRadius: '50%',
    color: 'white',
    height: 20,
    width: 20
  },
  inactiveStep: {
    border: '1px solid',
    borderColor: LIGHT_GREY,
    borderRadius: '50%',
    height: 20,
    width: 20
  },
  button: {
    fontSize: 20,
    backgroundColor: LIGHT_BLUE,
    color: DARK_BLUE,
    borderRadius: '50%',
    width: 50,
    height: 50,
    border: 'none'
  }
}

export default function StepLayout ({
  title,
  stepIndex,
  setStepIndex,
  children
}) {

  const renderSteps = () => {
    const steps = [1, 2, 3, 4];
    return steps.map(step => {
      const style = step === stepIndex + 1
        ? styles.activeStep
        : styles.inactiveStep;
      const value = step === stepIndex + 1 ? step : '';
      return (
        <div key={step} style={style}>
          {value}
        </div>
      );
    })
  }

  return (
    <section style={styles.mainContainer}>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.stepContainer}>
        {renderSteps()}
      </div>
      <div style={styles.fieldsContainer}>
        {children}
      </div>
      <div style={styles.actionContainer}>
        {stepIndex !== 0 ? (
          <button
            style={styles.button}
            onClick={() => setStepIndex(stepIndex - 1)}
          >
            {'<'}
          </button>
        ) : <div />}
        <button
          style={styles.button}
          onClick={() => setStepIndex(stepIndex + 1)}
        >
          {'>'}
        </button>
      </div>
    </section>
  )
}
