// import { Block, ModeOption, FullScreenOption, ContrastOption } from 'component/setting'
import { FC } from 'react'
import { Box, Dialog, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { Scrollbar } from 'component/scrollbar'
import { MotionDialog } from 'component/motion'
import { useSettingContext } from 'component/setting'
import { Block } from 'component/setting'
import { useIcon, ICON_NAME } from 'hook'
import { LABEL, KEY, TITLE } from 'constant'
import { NAV } from 'config'
import { ModeOption } from './option'

interface DisplayDialogProps {
  open: boolean
  handleClose: () => void
  onResetSetting: () => void
}

export const DisplayDialog: FC<DisplayDialogProps> = ({ open, handleClose, onResetSetting }) => {
  const { Icon: WebIcon, iconSrc: refreshSrc } = useIcon(ICON_NAME.REFRESH)
  const { iconSrc: closeSrc } = useIcon(ICON_NAME.CLOSE)

  const { themeMode } = useSettingContext()

  return (
    <MotionDialog open={open} onClose={handleClose}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ py: 1, pr: 1, pl: NAV.SPACING }}>
        <Typography variant='body1' my={0} sx={{ flexGrow: 1 }}>
          {LABEL.DISPLAY_SETTINGS}
        </Typography>

        <Tooltip title='Reset'>
          <Box sx={{ position: 'relative' }}>
            <IconButton onClick={onResetSetting}>
              <WebIcon icon={refreshSrc} />
            </IconButton>
          </Box>
        </Tooltip>

        <IconButton onClick={handleClose}>
          <WebIcon icon={closeSrc} />
        </IconButton>
      </Stack>

      <Divider />

      <Scrollbar sx={{ p: NAV.SPACING, pb: 0 }}>
        <Block {...LABEL.MODE(themeMode as KEY)}>
          <ModeOption />
        </Block>
      </Scrollbar>
    </MotionDialog>
  )
}
