import { KEY } from 'constant'

const TITLE = {
  DISPLAY_SETTING: 'Display setting',
  MODE: (mode: KEY) => {
    return {
      title: 'Mode',
      tooltip: `Toggle ${mode === KEY.LIGHT ? KEY.DARK : KEY.LIGHT} mode`
    }
  }
}

export default TITLE
