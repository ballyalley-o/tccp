const _asset = (image: string) => {
  return `/asset/${image}`
}

const _background = (image: string) => {
  return `/asset/background/${image}`
}

const _social = (image: string) => {
  return `/asset/social/${image}`
}

const _element = (image: string) => {
  return `/asset/element/${image}`
}

const _svg = (svg: string) => {
  return `/asset/svg/${svg}`
}

const ASSET = {
  // bg
  _BG_TEMP: 'https://images.pexels.com/photos/9672971/pexels-photo-9672971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  default_badge: 'https://thecodecoachprojct.com/upload/badge/no-badge.png',
  BRAND: _asset('logo.png'),
  BRAND_ALT: _asset('favicon.ico'),
  // WAVES_COVER_BG: _background('waves.svg'),
  LINE_BG: _background('lines.png'),
  PATTERN_BG: _background('pattern.svg'),
  GRADIENT_LINES_BG: _background('gradient-lines.svg'),
  GRADIENT_LINES_2_BG: _background('gradient-lines-2.svg'),
  STRIPES_BG: _background('stripes-grid.svg'),
  DOT_MATRIX_BG: _background('dot-matrix.svg'),
  ECLIPSE_BG: _background('eclipse.svg'),
  CONSTELLATION_BG: _background('constellation.svg'),
  WAVES_BG: _background('waves.svg'),
  FB_ICON: _social('facebook.svg'),
  GOOGLE_ICON: _social('google.plus.svg'),
  GITHUB_ICON: _social('github.svg'),
  EDX_ICON: _social('edx.svg'),
  FCC_ICON: _social('free-code-camp.svg'),
  TCCP_ICON: _svg('tccp-vector.svg'),
  // element
  ARROW_DOWN: _element('arrow-down.svg'),
  // octicon
  HUBOT: _svg('hubot.svg'),
  ALERT: _svg('alert.svg')
}

export default ASSET
