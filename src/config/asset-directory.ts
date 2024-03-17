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
  _BG_TEMP:
    'https://images.pexels.com/photos/9672971/pexels-photo-9672971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  BRAND: _asset('logo.png'),
  BRAND_ALT: _asset('favicon.ico'),
  LINE_BG: _background('lines.png'),
  FB_ICON: _social('facebook.svg'),
  GOOGLE_ICON: _social('google.plus.svg'),
  GITHUB_ICON: _social('github.svg'),
  EDX_ICON: _social('edx.svg'),
  FCC_ICON: _social('free-code-camp.svg'),
  // element
  ARROW_DOWN: _element('arrow-down.svg'),
  // octicon
  HUBOT: _svg('hubot.svg'),
  ALERT: _svg('alert.svg'),
}

export default ASSET
