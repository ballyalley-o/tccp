import { FC } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Dialog, Box, Paper } from '@mui/material'
import { varFade } from './variant'

interface MotionDialogProps {
  open?: boolean
  variants?: any
  onClose: () => void
  children: React.ReactNode
  sx?: any
}

const MotionDialog: FC<MotionDialogProps> = ({
  open = false,
  variants,
  onClose,
  children,
  sx,
  ...other
}): JSX.Element => {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth='xs'
          open={open}
          onClose={onClose}
          PaperComponent={(props) => (
            <Box
              component={m.div}
              {...(variants ||
                varFade({
                  distance: 120,
                  durationIn: 0.32,
                  durationOut: 0.24,
                  easeIn: 'easeInOut',
                }).inUp)}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                onClick={onClose}
                sx={{ width: '100%', height: '100%', position: 'fixed' }}
              />
              <Paper sx={sx} {...props}>
                {props.children}
              </Paper>
            </Box>
          )}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default MotionDialog
