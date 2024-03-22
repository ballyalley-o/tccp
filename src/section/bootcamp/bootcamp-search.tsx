import React, { useState } from 'react'
import { TextField, Select, MenuItem, Button, Grid } from '@mui/material'
import { BUTTON } from 'constant'

const BootcampSearch = () => {
  const [milesFrom, setMilesFrom] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [rating, setRating] = useState('')
  const [budget, setBudget] = useState('')

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for bootcamps with the following criteria:')
    console.log(`Miles From: ${milesFrom}`)
    console.log(`Zipcode: ${zipcode}`)
    console.log(`Rating: ${rating}`)
    console.log(`Budget: ${budget}`)
  }

  return (
    <Grid container spacing={2} alignItems='center' flexDirection='column'>
      <Grid container spacing={2} mb={2}>
        <Grid item lg={6}>
          <TextField label='Miles From' value={milesFrom} onChange={(e) => setMilesFrom(e.target.value)} />
        </Grid>
        <Grid item lg={6}>
          <TextField label='Enter Zipcode' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
        </Grid>
      </Grid>

      <Grid container mb={2}>
        <Button
          variant='contained'
          onClick={handleSearch}
          fullWidth
          size='large'
          sx={{
            borderRadius: 0.8,
          }}
        >
          {BUTTON.FIND_BOOTCAMP}
        </Button>
      </Grid>

      <Grid container spacing={2} flexDirection='row'>
        <Grid item lg={12}>
          <Select value={rating} onChange={(e) => setRating(e.target.value)} fullWidth displayEmpty>
            <MenuItem value='' disabled>
              Select a rating
            </MenuItem>
            <MenuItem value='5'>5 Stars</MenuItem>
            <MenuItem value='4'>4 Stars</MenuItem>
            <MenuItem value='3'>3 Stars</MenuItem>
            <MenuItem value='2'>2 Stars</MenuItem>
            <MenuItem value='1'>1 Star</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={12}>
          <Select value={budget} onChange={(e) => setBudget(e.target.value)} fullWidth displayEmpty>
            <MenuItem value='' disabled>
              Select a budget
            </MenuItem>
            <MenuItem value='low'>Low</MenuItem>
            <MenuItem value='medium'>Medium</MenuItem>
            <MenuItem value='high'>High</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={12}>
          <Button
            variant='contained'
            onClick={handleSearch}
            size='large'
            fullWidth
            sx={{
              borderRadius: 0.8,
            }}
          >
            {BUTTON.FIND_BOOTCAMP}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BootcampSearch
