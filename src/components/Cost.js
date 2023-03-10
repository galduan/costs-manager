
// Team Manager: gal duan – 207951930
// Partner: Tomer Gat – 314754607import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CostForm from './CostForm';

const Cost = () => {
  const [showForm, setShowForm] = useState(false);
  const ShowForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
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
