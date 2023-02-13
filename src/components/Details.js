// Team Manager: gal duan – 207951930
// Partner: Tomer Gat – 314754607
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DetailsForm from './DetailsForm';

const Details = () => {
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
        Get Details
      </Button>
      {showForm && <DetailsForm />}
    </div>
  );
}
export default Details
