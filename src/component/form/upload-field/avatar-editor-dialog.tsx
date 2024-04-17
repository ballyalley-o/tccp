import { FC } from 'react'
import { Dialog, DialogContent, Button } from '@mui/material'
import AvatarEditor from 'react-avatar-editor'
import { SIconButton, AvatarEditorProps } from './style'
import { useIcon } from 'hook'
import { ICON_WEB_NAME } from 'config'
import { BUTTON } from 'constant'

interface AvatarEditorDialogProps {
  onSave: () => void
  openDialog: boolean
  setOpenDialog: (open: boolean) => void
  handleClearPreview: () => void
  previewUrl: string | null
  setEditor: (editor: AvatarEditor | null) => void
}

const AvatarEditorDialog: FC<AvatarEditorDialogProps> = ({ onSave, openDialog, setOpenDialog, setEditor, previewUrl, handleClearPreview }) => {
  const { Icon, iconSrc: clearSrc } = useIcon(ICON_WEB_NAME.CLOSE)

  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
      <DialogContent>
        <AvatarEditor ref={(editor: AvatarEditor | null) => setEditor(editor)} image={previewUrl || 'default_image_path'} {...AvatarEditorProps} />
        <SIconButton onClick={handleClearPreview}>
          <Icon icon={clearSrc} />
        </SIconButton>
        <Button onClick={onSave}>{BUTTON.SAVE}</Button>
      </DialogContent>
    </Dialog>
  )
}

export default AvatarEditorDialog
