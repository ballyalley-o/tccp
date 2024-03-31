import { styled, alpha, Theme } from '@mui/material/styles'
import { KEY, MENU_POPOVER_ARROW } from 'constant'

export const SArrow = styled('span')<{ arrow: string; theme?: Theme }>(({ arrow, theme }) => {
  const SIZE = 12

  const POSITION = -(SIZE / 2)

  const borderStyle = `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`

  const topStyle = {
    borderRadius: '0 0 3px 0',
    top: POSITION,
    borderBottom: borderStyle,
    borderRight: borderStyle
  }

  const bottomStyle = {
    borderRadius: '3px 0 0 0',
    bottom: POSITION,
    borderTop: borderStyle,
    borderLeft: borderStyle
  }

  const leftStyle = {
    borderRadius: '0 3px 0 0',
    left: POSITION,
    borderTop: borderStyle,
    borderRight: borderStyle
  }

  const rightStyle = {
    borderRadius: '0 0 0 3px',
    right: POSITION,
    borderBottom: borderStyle,
    borderLeft: borderStyle
  }

  return {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      zIndex: 1,
      width: SIZE,
      height: SIZE,
      content: "''",
      display: 'block',
      position: 'absolute',
      transform: 'rotate(-135deg)',
      background: theme.palette.grey[400]
    },

    // top
    ...(arrow === MENU_POPOVER_ARROW.TOP_LEFT && { ...topStyle, left: 20 }),
    ...(arrow === MENU_POPOVER_ARROW.TOP_CENTER && { ...topStyle, left: 0, right: 0, margin: KEY.AUTO }),
    ...(arrow === MENU_POPOVER_ARROW.TOP_RIGHT && { ...topStyle, right: 20 }),
    // bottom
    ...(arrow === MENU_POPOVER_ARROW.BOTTOM_LEFT && { ...bottomStyle, left: 20 }),
    ...(arrow === MENU_POPOVER_ARROW.BOTTOM_CENTER && { ...bottomStyle, left: 0, right: 0, margin: KEY.AUTO }),
    ...(arrow === MENU_POPOVER_ARROW.BOTTOM_RIGHT && { ...bottomStyle, right: 20 }),
    // left
    ...(arrow === MENU_POPOVER_ARROW.LEFT_TOP && { ...leftStyle, top: 20 }),
    ...(arrow === MENU_POPOVER_ARROW.LEFT_CENTER && { ...leftStyle, top: 0, bottom: 0, margin: KEY.AUTO }),
    ...(arrow === MENU_POPOVER_ARROW.LEFT_BOTTOM && { ...leftStyle, bottom: 20 }),
    // right
    ...(arrow === MENU_POPOVER_ARROW.RIGHT_TOP && { ...rightStyle, top: 20 }),
    ...(arrow === MENU_POPOVER_ARROW.RIGHT_CENTER && { ...rightStyle, top: 0, bottom: 0, margin: KEY.AUTO }),
    ...(arrow === MENU_POPOVER_ARROW.RIGHT_BOTTOM && { ...rightStyle, bottom: 20 })
  }
})
