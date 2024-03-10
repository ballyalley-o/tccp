import { ASSET, ICON_DIMENSION } from 'config'

const SOCIAL = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: {
      src: ASSET.FB_ICON,
      alt: 'Facebook',
      width: ICON_DIMENSION.FOOTER_SOCIAL_ICON,
    },
  },
  {
    name: 'Google Plus',
    href: 'https://google.com',
    icon: {
      src: ASSET.GOOGLE_ICON,
      alt: 'Google',
      width: ICON_DIMENSION.FOOTER_SOCIAL_ICON,
    },
  },
  {
    name: 'Github',
    href: 'https://github.com/ballyalley-o',
    icon: {
      src: ASSET.GITHUB_ICON,
      alt: 'Github',
      width: ICON_DIMENSION.FOOTER_SOCIAL_ICON,
    },
  },
  {
    name: 'EdX',
    href: 'https://edx.org',
    icon: {
      src: ASSET.EDX_ICON,
      alt: 'edX',
      width: ICON_DIMENSION.FOOTER_SOCIAL_ICON,
    },
  },
  {
    name: 'Free Code Camp',
    href: 'https://freecodecamp.org',
    icon: {
      src: ASSET.FCC_ICON,
      alt: 'Free Code Camp',
      width: ICON_DIMENSION.FOOTER_SOCIAL_ICON,
    },
  },
]

export default SOCIAL
