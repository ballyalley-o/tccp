import { useState, ChangeEventHandler, SetStateAction } from 'react'
import { Button, Box, Typography, Input, Grid } from '@mui/material'
import { BUTTON } from 'constant'

const UploadField = () => {
  const [file, setFile] = useState<null | File>(null)
  const [previewUrl, setPreviewUrl] = useState<null | string>(null)

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreviewUrl(URL.createObjectURL(selectedFile))
    }
  }

  const handleClearPreview = () => {
    setFile(null)
    setPreviewUrl(null)
  }

  return (
    <Grid container my={4} spacing={2}>
      <Grid item lg={6}>
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id='picture-upload'
        />
        <label htmlFor='picture-upload'>
          <Button
            size='large'
            fullWidth
            variant='contained'
            component='span'
            sx={{
              backgroundColor: 'secondary.main',
            }}
          >
            {BUTTON.UPLOAD_AVATAR}
          </Button>
        </label>
      </Grid>
      <Grid item lg={6}>
        {previewUrl && (
          <Box>
            {/* <Typography variant='subtitle1'>Preview:</Typography> */}
            <img src={previewUrl} alt='Preview' style={{ height: 80 }} />
            <Button onClick={handleClearPreview} sx={{ color: '#FFF' }}>
              {BUTTON.CLEAR_PREVIEW}
            </Button>
          </Box>
        )}
      </Grid>
    </Grid>
  )
}

export default UploadField
