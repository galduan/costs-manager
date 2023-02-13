import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CostForm from './CostForm';

const Cost = () => {
  const [showForm, setShowForm] = useState(false);
  const ShowForm = () => {
    setShowForm((prevShowForm)=>!prevShowForm);
  };

  return (
    <div>
      <Button
        style={{ margin: '20px 20px' }}
        variant='contained'
        onClick={ShowForm}
      >
        Add cost
      </Button>
      {showForm && <CostForm />}
    </div>
  );
};
export default Cost;
