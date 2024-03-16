import { useState, ChangeEventHandler, SetStateAction } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { Button, Grid, IconButton, Dialog, DialogContent } from '@mui/material'
import { BUTTON } from 'constant'
import { ICON_WEB_NAME } from 'config'
import { useIcon } from 'hook'

const UploadField = () => {
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [editor, setEditor] = useState<AvatarEditor | null>(null)
  const [uploaded, setUploaded] = useState(false)

  const { Icon, iconSrc: clearSrc } = useIcon(ICON_WEB_NAME.CLOSE)
  const { iconSrc: uploadSrc } = useIcon(ICON_WEB_NAME.UPLOAD)

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreviewUrl(URL.createObjectURL(selectedFile))
      setOpenDialog(true)
    }
  }

  const handleClearPreview = () => {
    setFile(null)
    setPreviewUrl(null)
    setOpenDialog(false)
  }

  const onSave = () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas()
      const previewUrl = canvas.toDataURL()
      setPreviewUrl(previewUrl)
    }
    console.log('Image saved')
    setUploaded(true)
    setOpenDialog(false)
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
            disabled={uploaded}
            sx={{
              backgroundColor: 'common.white',
              color: 'primary.main',
              height: 60,
              width: '100%',
              '&:hover': {
                backgroundColor: 'secondary.main',
              },
              '&.Mui-disabled': {
                backgroundColor: 'common.white',
                color: 'grey.500',
              },
            }}
          >
            {uploaded ? (
              BUTTON.UPLOADED_AVATAR
            ) : hovered ? (
              <Icon icon={uploadSrc} />
            ) : (
              BUTTON.UPLOAD_AVATAR
            )}
          </Button>
        </label>
      </Grid>
      <Grid item lg={6}>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogContent>
            <AvatarEditor
              ref={(editor: AvatarEditor | null) => setEditor(editor)}
              image={previewUrl || 'default_image_path'}
              width={250}
              height={250}
              border={50}
              borderRadius={125} // This will make the avatar circle
              color={[255, 255, 255, 0.6]}
              scale={1}
              rotate={0}
            />
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
                '&:hover': {
                  backgroundColor: 'common.white',
                  opacity: 0.6,
                },
              }}
            >
              <Icon icon={clearSrc} />
            </IconButton>
            <Button onClick={onSave}>Save</Button>
          </DialogContent>
        </Dialog>
        {previewUrl && (
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {uploaded && (
              <img
                src={previewUrl}
                alt='preview'
                style={{
                  maxHeight: 150,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  overflow: 'hidden',
                }}
              />
            )}

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
