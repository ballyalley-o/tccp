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
  ARROW_FORWARD: _getWebIcon('arrow-ios-forward'),
  CLOSE: _getWebIcon('close-fill'),
  CONTRAST_BOX: _getWebIcon('contrast-box'),
  ERROR: _getWebIcon('alert-circle'),
  INFO: _getWebIcon('info'),

  EYE_OFF: _getWebIcon('eye-off-outline'),
  EYE_HIDE: _getWebIcon('eye-outline'),

  FULLSCREEN: _getWebIcon('fullscreen'),
  FULLSCREEN_EXIT: _getWebIcon('fullscreen-exit'),
  REFRESH: _getWebIcon('refresh'),

  SUCCESS: _getWebIcon('checkmark-circle-2'),
  SETTING: _getWebIcon('cog'),
  WARNING: _getWebIcon('alert-triangle'),
  UPLOAD: _getWebIcon('upload-fill')
}

// note: this is local icons
const ICON_LOC = {
  GITHUB: _getIcon('github'),
  // not implemented yet
  HUBOT: _getIcon('hubot'),
  EXPAND: _getIcon('expand-outline'),
  MODE_LIGHT: _getIcon('sun'),
  MODE_DARK: _getIcon('moon'),
  SETTING: _getIcon('setting'),
  TCCP: _getIcon('tccp'),
  // snack icons
  SNACK_ERROR: _getIcon('alert-circle'),
  SNACK_INFO: _getIcon('info'),
  SNACK_SUCCESS: _getIcon('checkmark-circle'),
  SNACK_WARNING: _getIcon('alert-triangle')
}

// constant for icon name values
export enum ICON_WEB_NAME {
  // @web
  ALERT_OUTLINE = 'ALERT_OUTLINE',
  ARROW_FORWARD = 'ARROW_FORWARD',
  CLOSE = 'CLOSE',
  CONTRAST_BOX = 'CONTRAST_BOX',
  ERROR = 'ERROR',
  EYE_OFF = 'EYE_OFF',
  EYE_HIDE = 'EYE_HIDE',
  INFO = 'INFO',
  FULLSCREEN = 'FULLSCREEN',
  FULLSCREEN_EXIT = 'FULLSCREEN_EXIT',
  REFRESH = 'REFRESH',

  SUCCESS = 'SUCCESS',
  SETTING = 'SETTING',
  WARNING = 'WARNING',
  UPLOAD = 'UPLOAD'
}

export enum ICON_LOC_NAME {
  // @local

  GITHUB = 'GITHUB',
  EXPAND = 'EXPAND',
  HUBOT = 'HUBOT',
  MODE_LIGHT = 'MODE_LIGHT',
  MODE_DARK = 'MODE_DARK',
  SETTING = 'SETTING',
  TCCP = 'TCCP',
  // snack icons
  SNACK_ERROR = 'SNACK_ERROR',
  SNACK_INFO = 'SNACK_INFO',
  SNACK_SUCCESS = 'SNACK_SUCCESS',
  SNACK_WARNING = 'SNACK_WARNING'
}

export { ICON_LOC, ICON_WEB }
