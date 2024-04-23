import { useState } from 'react'
import { TextField, Select, MenuItem, Button, Grid } from '@mui/material'
import { BUTTON, PLACEHOLDER } from 'constant'

const CourseSearch = () => {
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
    <Grid container flexDirection='column'>
      <Grid container spacing={2} flexDirection='row'>
        <Grid item lg={12}>
          <TextField fullWidth label='Search' variant='outlined' />
        </Grid>
        <Grid item lg={12}>
          <Select value={rating} onChange={(e) => setRating(e.target.value)} fullWidth displayEmpty>
            <MenuItem value='' disabled>
              {PLACEHOLDER.SELECT_SKILL}
            </MenuItem>
            <MenuItem value='beginner'>Beginner</MenuItem>
            <MenuItem value='intermediate'>Intermediate</MenuItem>
            <MenuItem value='advanced'>Advanced</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={12}>
          <Select value={budget} onChange={(e) => setBudget(e.target.value)} fullWidth displayEmpty>
            <MenuItem value='' disabled>
              {PLACEHOLDER.SELECT_BUDGET}
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
              borderRadius: 0.8
            }}>
            {BUTTON.FIND_COURSE}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CourseSearch
