import { KEY, MENU_POPOVER_ARROW } from 'constant'

export interface PopoverOrigin {
  vertical: KEY
  horizontal: KEY
}

interface PositionProps {
  style?: Record<string, number>
  anchorOrigin: PopoverOrigin
  transformOrigin: PopoverOrigin
}

export function getPosition(arrow: string): PositionProps {
  let props

  switch (arrow) {
    case MENU_POPOVER_ARROW.TOP_LEFT:
      props = {
        style: { ml: -0.75 },
        anchorOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.LEFT },
        transformOrigin: { vertical: KEY.TOP, horizontal: KEY.LEFT }
      }
      break
    case MENU_POPOVER_ARROW.TOP_CENTER:
      props = {
        style: {},
        anchorOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.CENTER },
        transformOrigin: { vertical: KEY.TOP, horizontal: KEY.CENTER }
      }
      break
    case MENU_POPOVER_ARROW.TOP_RIGHT:
      props = {
        style: { ml: 0.75 },
        anchorOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.RIGHT },
        transformOrigin: { vertical: KEY.TOP, horizontal: KEY.RIGHT }
      }
      break
    case MENU_POPOVER_ARROW.BOTTOM_LEFT:
      props = {
        style: { ml: -0.75 },
        anchorOrigin: { vertical: KEY.TOP, horizontal: KEY.LEFT },
        transformOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.LEFT }
      }
      break
    case MENU_POPOVER_ARROW.BOTTOM_CENTER:
      props = {
        style: {},
        anchorOrigin: { vertical: KEY.TOP, horizontal: KEY.CENTER },
        transformOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.CENTER }
      }
      break
    case MENU_POPOVER_ARROW.BOTTOM_RIGHT:
      props = {
        style: { ml: 0.75 },
        anchorOrigin: { vertical: KEY.TOP, horizontal: KEY.RIGHT },
        transformOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.RIGHT }
      }
      break
    case MENU_POPOVER_ARROW.LEFT_TOP:
      props = {
        style: { mt: -0.75 },
        anchorOrigin: { vertical: KEY.TOP, horizontal: KEY.RIGHT },
        transformOrigin: { vertical: KEY.TOP, horizontal: KEY.LEFT }
      }
      break
    case MENU_POPOVER_ARROW.LEFT_CENTER:
      props = {
        anchorOrigin: { vertical: KEY.CENTER, horizontal: KEY.RIGHT },
        transformOrigin: { vertical: KEY.CENTER, horizontal: KEY.LEFT }
      }
      break
    case MENU_POPOVER_ARROW.LEFT_BOTTOM:
      props = {
        style: { mt: 0.75 },
        anchorOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.RIGHT },
        transformOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.LEFT }
      }
      break
    case MENU_POPOVER_ARROW.RIGHT_TOP:
      props = {
        style: { mt: -0.75 },
        anchorOrigin: { vertical: KEY.TOP, horizontal: KEY.LEFT },
        transformOrigin: { vertical: KEY.TOP, horizontal: KEY.RIGHT }
      }
      break
    case MENU_POPOVER_ARROW.RIGHT_CENTER:
      props = {
        anchorOrigin: { vertical: KEY.CENTER, horizontal: KEY.LEFT },
        transformOrigin: { vertical: KEY.CENTER, horizontal: KEY.RIGHT }
      }
      break
    case MENU_POPOVER_ARROW.RIGHT_BOTTOM:
      props = {
        style: { mt: 0.75 },
        anchorOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.LEFT },
        transformOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.RIGHT }
      }
      break

    default:
      props = {
        style: { ml: 0.75 },
        anchorOrigin: { vertical: KEY.BOTTOM, horizontal: KEY.RIGHT },
        transformOrigin: { vertical: KEY.TOP, horizontal: KEY.RIGHT }
      }
  }

  return props
}
