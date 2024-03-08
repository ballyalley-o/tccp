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
