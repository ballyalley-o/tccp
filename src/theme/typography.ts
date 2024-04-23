import { SizeType } from 'constant'

export function remToPx(value: any) {
  return Math.round(parseFloat(value) * 16)
}

export function pxToRem(value: any) {
  return `${value / 16}rem`
}

export function responsiveFontSizes({ xs, sm, md, lg, xl }: ISize) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md)
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg)
    }
  }
}

const FONT_PRIMARY = 'Yantramanav, Arimo, Calibri'
const FONT_SECONDARY = 'Arimo'

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightLight: 200,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h0: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(48),
    ...responsiveFontSizes({ sm: 60, md: 72, lg: 120 })
  },
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 })
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 48, md: 50, lg: 52 })
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
  },
  subtitle0: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24)
  },
  subtitle1: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16)
  },
  subtitle2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14)
  },
  body1: {
    fontFamily: FONT_SECONDARY,
    lineHeight: 1.5,
    fontSize: pxToRem(18)
  },
  body2: {
    fontFamily: FONT_SECONDARY,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14)
  },
  caption: {
    fontFamily: FONT_SECONDARY,
    lineHeight: 0.5,
    fontSize: pxToRem(12)
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase'
  },
  overline2: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    textTransform: 'uppercase'
  },
  button: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize'
  }
}

export default typography
