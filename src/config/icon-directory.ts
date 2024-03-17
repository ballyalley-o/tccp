/**
 * This offers hybrid way to get the icon.
 * It can be used for both MDI and custom icon.
 *
 * use with useIcon hook
 *
 * @param {string} icon - icon file name
 * @returns
 */

function _getIcon(icon: string) {
  return `/asset/svg/${icon}.svg`
}

function _getWebIcon(icon: string) {
  return `eva:${icon}`
}

// add icons that are from MDI
const ICON_WEB = {
  ALERT_OUTLINE: _getWebIcon('alert-triangle-outline'),
  CLOSE: _getWebIcon('close-fill'),
  CONTRAST_BOX: _getWebIcon('contrast-box'),

  EYE_OFF: _getWebIcon('eye-off-outline'),
  EYE_HIDE: _getWebIcon('eye-outline'),

  INFO: _getWebIcon('info-outline'),
  FULLSCREEN: _getWebIcon('fullscreen'),
  FULLSCREEN_EXIT: _getWebIcon('fullscreen-exit'),
  REFRESH: _getWebIcon('refresh'),
  SETTING: _getWebIcon('cog'),
  UPLOAD: _getWebIcon('upload-fill'),
}

// note: this is local icons
const ICON_LOC = {
  GITHUB: _getIcon('github'),
  // not implemented yet
  EXPAND: _getIcon('expand-outline'),
  MODE_LIGHT: _getIcon('sun'),
  MODE_DARK: _getIcon('moon'),
  SETTING: _getIcon('setting'),
}

// constant for icon name values
export enum ICON_WEB_NAME {
  // @web
  ALERT_OUTLINE = 'ALERT_OUTLINE',
  CLOSE = 'CLOSE',
  CONTRAST_BOX = 'CONTRAST_BOX',
  EYE_OFF = 'EYE_OFF',
  EYE_HIDE = 'EYE_HIDE',
  INFO = 'INFO',
  FULLSCREEN = 'FULLSCREEN',
  FULLSCREEN_EXIT = 'FULLSCREEN_EXIT',
  REFRESH = 'REFRESH',

  SETTING = 'SETTING',
  UPLOAD = 'UPLOAD',
}

export enum ICON_LOC_NAME {
  // @local
  GITHUB = 'GITHUB',

  EXPAND = 'EXPAND',
  MODE_LIGHT = 'MODE_LIGHT',
  MODE_DARK = 'MODE_DARK',
  SETTING = 'SETTING',
}

export { ICON_LOC, ICON_WEB }
