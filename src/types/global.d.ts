import { KEY, SIZE } from 'constant'

type CustomColor = {
  light: string
  dark: string
  main: string
  contrastText: string
}

declare global {
  interface ConNex {
    (...params: any[]): string
  }

  declare module '@mui/material/styles' {
    interface Palette {
      [color: string]: CustomColor
    }
  }
}

declare global {
  namespace tccp {
    interface LogoProps {
      width?: number
      disabledLink?: boolean
      sx?: any
      src?: string
      onMouseEnter?: () => void
      onMouseLeave?: () => void
    }

    interface FallbackProps {
      fallbackTitle: string
      errorCode: CODE
    }

    interface FallbackCodeProps {
      errorCode: tccp.FallbackProps['errorCode']
    }

    interface MetaProps {
      title?: string
      description?: string
      keywords?: string
    }
  }

  interface FormFieldProps {
    submitting: boolean
    sent: boolean
  }
  type VERTICAL = KEY.TOP | KEY.CENTER | KEY.BOTTOM
  type HORIZONTAL = KEY.LEFT | KEY.CENTER | KEY.RIGHT
  type COLOR = 'default' | 'inherit' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
  type SIZE = SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE
}

export = tccp
