import React from 'react';
import StepLayout from '../layouts/StepLayout';

const styles = {
  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 15
  },
  inputContainer: {
    display: 'flex',
    width: '100%'
  },
  commonInput: {
    width: '100%',
  },
  nameInput: {
    width: '50%'
  }
}

export default function InfoStep({
  details,
  onChangeDetail,
  registeredVehicles,
  setStepIndex
}) {

  const getFields = () => (
    <section>
      <div style={styles.fieldContainer}>
        <label>Phone</label>
        <div style={styles.inputContainer}>
          <input
            type='text'
            value={details.phone}
            style={styles.commonInput}
            onChange={(e) => onChangeDetail('phone', e.target.value)}
            placeholder='xxx-xxx-xxxx'
          />
        </div>
      </div>
      <div style={styles.fieldContainer}>
        <label style={styles.label}>Name</label>
        <div style={styles.inputContainer}>
          <input
            type='text'
            value={details.firstName}
            style={styles.nameInput}
            placeholder='First Name'
            onChange={(e) => onChangeDetail('firstName', e.target.value)}
          />
          <input
            type='text'
            value={details.lastName}
            style={styles.nameInput}
            placeholder='Last Name'
            onChange={(e) => onChangeDetail('lastName', e.target.value)}
          />
        </div>
      </div>
      <div style={styles.fieldContainer}>
        <label style={styles.label}>Email</label>
        <div style={styles.inputContainer}>
          <input
            type='email'
            value={details.email}
            style={styles.commonInput}
            onChange={(e) => onChangeDetail('email', e.target.value)}
            placeholder='xxx-xxx-xxxx'
          />
        </div>
      </div>
      <div style={styles.fieldContainer}>
        <label style={styles.label}>Select Vehicle</label>
        <div style={styles.inputContainer}>
          <select
            style={styles.commonInput}
            onChange={(e) => onChangeDetail('vehicle', e.target.value)}
          >
            {registeredVehicles.map(registeredVehicle => (
              <option value={registeredVehicle.id}>
                {registeredVehicle.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  )

  return (
    <StepLayout
      title="Start a Booking"
      goNext={() => setStepIndex(1)}
    >
      <section>
        {getFields()}
      </section>
    </StepLayout>
  )
}