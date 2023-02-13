import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import BasicTable from './BasicTablse';
import { getStorageValue } from '../localStorage/useLocalStorage';
import { Alert } from '@mui/material';

const DetailsForm = () => {
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // data from localStorage
  const [historyData, setHistoryData] = useState([]);

  // data after search
  const [data, setData] = useState([]);

  useEffect(() => {
    // get the data from localStorage
    async function fetchData() {
      const response = await getStorageValue('data', [])
      setHistoryData(response)
    }
    fetchData();
  }, []);

  // on Click "Get" button - do filter
  const getDetails = () => {
    if (name && year && month) {
      setData(historyData.filter((cost) => name === cost.name && year === cost.year && month === cost.month))
      setErrorMessage('')
    } else {
      setErrorMessage('enter name, year and month')
    }
  };
  return (
    <div>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete='off'
      >
        <Input
          value={name}
          onInput={(e) => setName(e.target.value)}
          placeholder='name'
        />
        <Input
          value={month}
          onInput={(e) => setMonth(e.target.value)}
          placeholder='Month'
        />
        <Input
          value={year}
          onInput={(e) => setYear(e.target.value)}
          placeholder='Year'
        />
        <Button variant='contained' onClick={getDetails}>
          Get
        </Button>
      </Box>
      {errorMessage && (
        <Alert style={{ justifyContent: 'center' }} severity='error'>
          {errorMessage}
        </Alert>
      )}

      <BasicTable historyData={data}></BasicTable>
    </div>
  );
}
export default DetailsForm