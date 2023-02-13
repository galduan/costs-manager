// Team Manager: gal duan – 207951930
// Partner: Tomer Gat – 314754607
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { getStorageValue, setStorageValue } from '../localStorage/useLocalStorage';
import { Alert, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

const CostForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(moment().format('l'));
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // get the data from localStorage
    async function fetchData() {
      const response = await getStorageValue('data', [])
      setData(response)
    }
    fetchData();
  }, []);

  // on Click "ADD" button - save new object in localStorage and present appropriate message
  const addCost = async () => {
    if (name && description && category && sum) {
      // getting the year and month from date
      const [month, , year] = date.split('/')
      // store data
      setStorageValue('data', [...data, { name, category, description, sum, month, year }]).then((res) => {
        setData((prevData) => [
          ...prevData,
          { name, category, description, sum, month, year },
        ]);
        setErrorMessage('');
        alert('added to expenses')

      }).catch(e => {
        setErrorMessage('something worng , try later');

      })
    } else {
      setErrorMessage('please enter all the cost data');
    }
  };
  return (
    <>
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
          value={category}
          onInput={(e) => setCategory(e.target.value)}
          placeholder='category'
        />

        <Input
          value={description}
          onInput={(e) => setDescription(e.target.value)}
          placeholder='description'
        />
        <Input
          value={sum}
          onInput={(e) => setSum(parseInt(e.target.value))}
          placeholder='sum'
        />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label='date'
            value={date}
            onChange={(newValue) => {
              setDate(newValue.format('l'));
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button variant='contained' onClick={addCost}>
          Add
        </Button>
      </Box>
      {errorMessage && (
        <Alert style={{ justifyContent: 'center' }} severity='error'>
          {errorMessage}
        </Alert>
      )}
    </>
  );
};
export default CostForm;
