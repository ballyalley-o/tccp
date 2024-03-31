import { ReactNode } from 'react'
import { Stack, Tooltip, Typography } from '@mui/material'
import { useIcon } from 'hook'
import { useTheme } from '@mui/material/styles'

const SPACING = 2.5

interface BlockProps {
  title: string
  tooltip?: string
  sx?: object
  children: ReactNode
}

function Block({ title, tooltip, children, sx, ...other }: BlockProps) {
  const { Icon, iconSrc } = useIcon('INFO')
  const theme = useTheme()
  return (
    <Stack spacing={1.5} sx={{ mb: SPACING, ...sx }} {...other}>
      <Stack direction='row' alignItems='center'>
        <Typography variant='body2' sx={{ fontWeight: 'fontWeightMedium' }}>
          {title}
        </Typography>

        {tooltip && (
          <Tooltip title={tooltip}>
            <Icon
              icon={iconSrc}
              width={16}
              sx={{
                mx: 0.5,
                '&: MuiIconButton-paper': {
                  backgroundColor: theme.palette.background.paper
                }
              }}
            />
          </Tooltip>
        )}
      </Stack>

      {children}
    </Stack>
  )
}

export default Block
