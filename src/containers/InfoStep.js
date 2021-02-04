import React, { useState } from 'react';
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
    width: '100%',
    justifyContent: 'space-between'
  },
  commonInput: {
    width: '100%',
  },
  nameInput: {
    width: '48%'
  },
  addInput: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column'
  }
}

export default function InfoStep({
  details,
  onChangeDetail,
  registeredVehicles,
  stepIndex,
  setStepIndex
}) {
  const [isAddNew, setIsAddNew] = useState(false);

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
              <option key={registeredVehicle.id} value={registeredVehicle.id}>
                {registeredVehicle.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div style={styles.fieldContainer}>
        {
          isAddNew ? (
            <div style={styles.inputContainer}>
              <div style={styles.addInput}>
                <label>Vehicle Year</label>
                <input
                  type='text'
                  value={details.newVehicle.year}
                  placeholder='Vehicle Year'
                  onChange={(e) => onChangeDetail(
                    'newVehicle', { ...details.newVehicle, year: e.target.value })
                  }
                />
              </div>
              <div style={styles.addInput}>
                <label>Vehicle Make</label>
                <input
                  type='text'
                  value={details.newVehicle.make}
                  placeholder='Yehicle Make'
                  onChange={(e) => onChangeDetail(
                    'newVehicle', { ...details.newVehicle, make: e.target.value })
                  }
                />
              </div>
              <div style={styles.addInput}>
                <label>Vehicle Model</label>
                <input
                  type='text'
                  value={details.newVehicle.model}
                  placeholder='Yehicle Model'
                  onChange={(e) => onChangeDetail(
                    'newVehicle', { ...details.newVehicle, model: e.target.value })
                  }
                />
              </div>
            </div>
          ) : (
            <button onClick={() => setIsAddNew(true)}>+ Add New</button>
          )
        }
      </div>
    </section>
  )

  return (
    <StepLayout
      title="Start a Booking"
      stepIndex={stepIndex}
      setStepIndex={setStepIndex}
    >
      <section>
        {getFields()}
      </section>
    </StepLayout>
  )
}