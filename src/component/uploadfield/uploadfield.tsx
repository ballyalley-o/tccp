import { useState, ChangeEventHandler, SetStateAction } from 'react'
import { m } from 'framer-motion'
import {
  Button,
  Box,
  Typography,
  Input,
  Grid,
  CardMedia,
  IconButton,
} from '@mui/material'
import { BUTTON } from 'constant'
import { ICON_WEB_NAME } from 'config'
import { useIcon } from 'hook'

const UploadField = () => {
  const [file, setFile] = useState<null | File>(null)
  const [previewUrl, setPreviewUrl] = useState<null | string>(null)
  const [hovered, setHovered] = useState<boolean>(false)

  const { Icon, iconSrc: clearSrc } = useIcon(ICON_WEB_NAME.CLOSE)
  const { iconSrc: uploadSrc } = useIcon(ICON_WEB_NAME.UPLOAD)

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
    <Grid container my={4} spacing={2} flexDirection='row'>
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
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
              backgroundColor: 'common.white',
              color: 'primary.main',
              height: 60,
              '&:hover': {
                backgroundColor: 'secondary.main',
              },
            }}
          >
            {hovered ? (
              <Icon
                icon={uploadSrc}
                sx={{
                  height: 40,
                }}
              />
            ) : (
              BUTTON.UPLOAD_AVATAR
            )}
          </Button>
        </label>
      </Grid>
      <Grid item lg={6}>
        {previewUrl && (
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={previewUrl} alt='preview' style={{ height: 80 }} />
            {previewUrl && (
              <IconButton
                onClick={handleClearPreview}
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  color: 'common.black',
                  opacity: 0.8,
                  zIndex: 1,
                  cursor: 'pointer',
                  margin: 'auto',
                  minHeight: 0,
                  '&:hover': {
                    backgroundColor: 'common.white',
                    opacity: 0.6,
                  },
                }}
              >
                <Icon icon={clearSrc} />
              </IconButton>
            )}
          </div>
        )}
      </Grid>
    </Grid>
  )
}

export default UploadField
