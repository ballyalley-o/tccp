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
  IMAGE: 'assets/images',
  LOGO: 'assets/logos',
  SVG: 'assets/svgs',
  FONT: 'assets/fonts',
  VIDEO: 'assets/videos',
  AUDIO: 'assets/audios',
  JSON: 'assets/jsons',
  FILE: 'assets/files',
  OTHER: 'assets/others',
}

export default ASSET
