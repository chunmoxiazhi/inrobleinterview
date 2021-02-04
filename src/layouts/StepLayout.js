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
    width: '100%',
    justifyContent: 'space-between'
  }
}

export default function StepLayout ({
  title,
  goNext,
  children
}) {
  return (
    <section style={styles.mainContainer}>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.fieldsContainer}>
        {children}
      </div>
      <div style={styles.actionContainer}>
        <div />
        <button onClick={goNext}>
          Next
        </button>
      </div>
    </section>
  )
}
