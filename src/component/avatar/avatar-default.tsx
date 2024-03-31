import { FC, forwardRef } from 'react'
import { useTheme } from '@mui/material/styles'
import { Badge, Avatar } from '@mui/material'
import { KEY } from 'constant'

const getCharAtName = (name: string) => name && name.charAt(0).toUpperCase()
const getCharAtSecondName = (name: string) => name && name.split(' ')[1]?.charAt(0).toUpperCase()

const getColorByName = (name: string) => {
  if (['A', 'N', 'H', 'L', 'Q'].includes(getCharAtName(name))) return KEY.PRIMARY
  if (['F', 'G', 'T', 'I', 'J'].includes(getCharAtName(name))) return KEY.SECONDARY
  if (['K', 'D', 'Y', 'B', 'O'].includes(getCharAtName(name))) return KEY.INFO
  if (['P', 'E', 'R', 'S', 'U'].includes(getCharAtName(name))) return KEY.SUCCESS
  if (['V', 'W', 'X', 'M', 'Z'].includes(getCharAtName(name))) return KEY.ERROR
  return KEY.DEFAULT
}

interface DefaultAvatarProps {
  color?: COLOR
  firstName?: string
  lastName?: string
  extension?: string
  children?: React.ReactNode
  BadgeProps?: object
  sx?: object
}

const DefaultAvatar: FC<DefaultAvatarProps> = forwardRef<HTMLDivElement, DefaultAvatarProps>(
  ({ color, firstName = '', lastName = '', BadgeProps, children, extension, sx, ...other }, ref) => {
    const theme = useTheme()
    const charAtName = lastName ? getCharAtName(firstName) + getCharAtName(lastName) : getCharAtName(firstName)

    const colorByName = getColorByName(firstName)

    const colr = colorByName || color

    const renderContent =
      colr === KEY.DEFAULT ? (
        <Avatar
          ref={ref}
          sx={{
            color: theme.palette.common.white,
            backgroundColor: theme.palette[colr]?.main,
            fontWeight: theme.typography.fontWeightBold,
            ...sx
          }}
          {...other}>
          {firstName && charAtName}
          {extension}
          {children}
        </Avatar>
      ) : (
        <Avatar
          ref={ref}
          sx={{
            color: theme.palette[colr]?.contrastText,
            backgroundColor: theme.palette[colr]?.main,
            fontWeight: theme.typography.fontWeightBold,
            ...sx
          }}
          {...other}>
          {firstName && charAtName}
          {children}
        </Avatar>
      )

    return BadgeProps ? (
      <Badge overlap='circular' anchorOrigin={{ vertical: KEY.BOTTOM, horizontal: KEY.RIGHT }} {...BadgeProps}>
        {renderContent}
      </Badge>
    ) : (
      renderContent
    )
  }
)

export default DefaultAvatar
