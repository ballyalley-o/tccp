import { useState, ChangeEventHandler } from 'react'
import { m } from 'framer-motion'
import AvatarEditor from 'react-avatar-editor'
import { Button, Grid, IconButton, Dialog, DialogContent } from '@mui/material'
import {
  SUploadAvatarButton,
  AvatarEditorDialog,
} from 'component/form/upload-field'
// import { AvatarEditorDialog } from 'component/upload-field'
import { ICON_WEB_NAME } from 'config'
import { useIcon } from 'hook'
import { BUTTON } from 'constant'
import { FORM } from 'section/auth'
import { SImg, SClearIconButton, SPreviewContainerDivBox } from './style'

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
    setUploaded(true)
    setOpenDialog(false)
  }

  return (
    <Grid container my={4} spacing={2} flexDirection='row'>
      <Grid item lg={6}>
        <input onChange={handleFileChange} {...FORM.AVATAR.INPUT} />
        <label htmlFor='avatar-upload'>
          <SUploadAvatarButton
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            disabled={uploaded}
            {...FORM.AVATAR.BUTTON}
          >
            {uploaded ? (
              BUTTON.UPLOADED_AVATAR
            ) : hovered ? (
              <Icon icon={uploadSrc} />
            ) : (
              BUTTON.UPLOAD_AVATAR
            )}
          </SUploadAvatarButton>
        </label>
      </Grid>
      <Grid item lg={6}>
        <AvatarEditorDialog
          onSave={onSave}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          setEditor={setEditor}
          previewUrl={previewUrl}
          handleClearPreview={handleClearPreview}
        />
        {previewUrl && (
          <SPreviewContainerDivBox component={m.div}>
            {uploaded && <SImg src={previewUrl} alt='preview' />}
            {previewUrl && (
              <SClearIconButton onClick={handleClearPreview}>
                <Icon icon={clearSrc} />
              </SClearIconButton>
            )}
          </SPreviewContainerDivBox>
        )}
      </Grid>
    </Grid>
  )
}

export default UploadField
