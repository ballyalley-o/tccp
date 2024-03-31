import { Popover } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { getPosition, SArrow, PopoverOrigin } from 'component/menu-popover'
import { MENU_POPOVER_ARROW } from 'constant'

interface MenuPopoverProps {
  open: any
  children: React.ReactNode
  arrow?: (typeof MENU_POPOVER_ARROW)[keyof typeof MENU_POPOVER_ARROW]
  disabledArrow?: boolean
  sx?: object
  [key: string]: any
}

function MenuPopover({ open, children, arrow = MENU_POPOVER_ARROW.TOP_RIGHT, disabledArrow, sx, ...other }: MenuPopoverProps) {
  const { style, anchorOrigin, transformOrigin } = getPosition(arrow)
  const theme = useTheme()

  return (
    <Popover
      open={Boolean(open)}
      anchorEl={open}
      anchorOrigin={anchorOrigin as any}
      transformOrigin={transformOrigin as any}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.background.default,
          p: 1,
          width: 'auto',
          overflow: 'inherit',
          ...style,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20, flexShrink: 0 }
          },
          ...sx
        }
      }}
      {...other}>
      {!disabledArrow && <SArrow arrow={arrow} theme={theme} />}

      {children}
    </Popover>
  )
}

export default MenuPopover
