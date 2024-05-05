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
  BACK: _getWebIcon('arrow-ios-back-outline'),
  CHEVRON_RIGHT: _getWebIcon('chevron-right-outline'),
  CHEVRON_DOWN: _getWebIcon('chevron-down-outline'),
  CLOSE: _getWebIcon('close-fill'),
  CHECKMARK_CIRCLE: _getWebIcon('checkmark-circle-outline'),
  CHECK_OUTLINE: _getWebIcon('checkmark-outline'),
  CLOSE_OUTLINE: _getWebIcon('close-outline'),
  CONTRAST_BOX: _getWebIcon('contrast-box'),
  EDIT: _getWebIcon('edit-2-outline'),
  ERROR_OUTLINE: _getWebIcon('alert-circle-outline'),
  ERROR: _getWebIcon('alert-circle'),
  PLUS: _getWebIcon('plus-outline'),
  RETRACT: _getWebIcon('minus-outline'),
  INFO: _getWebIcon('info'),

  EYE_OFF: _getWebIcon('eye-off-outline'),
  EYE_HIDE: _getWebIcon('eye-outline'),

  FULLSCREEN: _getWebIcon('fullscreen'),
  FULLSCREEN_EXIT: _getWebIcon('fullscreen-exit'),
  GLOBE: _getWebIcon('globe-2-outline'),
  PHONE: _getWebIcon('phone-outline'),
  REFRESH: _getWebIcon('refresh'),

  MODE_LIGHT: _getWebIcon('sun'),
  MODE_DARK: _getWebIcon('moon'),

  SAVE: _getWebIcon('save-outline'),
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
  BACK = 'BACK',
  CHECKMARK_CIRCLE = 'CHECKMARK_CIRCLE',
  CHECK_OUTLINE = 'CHECK_OUTLINE',
  CLOSE_OUTLINE = 'CLOSE_OUTLINE',
  CHEVRON_RIGHT = 'CHEVRON_RIGHT',
  CHEVRON_DOWN = 'CHEVRON_DOWN',
  CLOSE = 'CLOSE',
  CONTRAST_BOX = 'CONTRAST_BOX',
  EDIT = 'EDIT',
  ERROR = 'ERROR',
  ERROR_OUTLINE = 'ERROR_OUTLINE',
  EYE_OFF = 'EYE_OFF',
  EYE_HIDE = 'EYE_HIDE',
  INFO = 'INFO',
  PHONE = 'PHONE',
  GLOBE = 'GLOBE',
  MODE_LIGHT = 'MODE_LIGHT',
  MODE_DARK = 'MODE_DARK',

  FULLSCREEN = 'FULLSCREEN',
  FULLSCREEN_EXIT = 'FULLSCREEN_EXIT',
  PLUS = 'PLUS',
  RETRACT = 'RETRACT',
  REFRESH = 'REFRESH',

  SAVE = 'SAVE',
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
