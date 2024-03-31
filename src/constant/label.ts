import { KEY } from 'constant'

const LABEL = {
  LOG_IN: 'Log In',
  LOG_OUT: 'Log Out',
  DISPLAY_SETTINGS: 'Display Settings',
  MODE: (mode: KEY) => {
    return {
      title: 'Mode',
      tooltip: `Toggle ${mode === KEY.LIGHT ? KEY.DARK : KEY.LIGHT} mode`
    }
  },
  REGISTER: 'Register',
  RESET_PASSWORD: 'Reset Password',
  HOME: 'Home',

  ALREADY_MEMBER: `Already a member? `,
  NOT_A_MEMBER: `Not a member yet? `,
  LOGIN_Sub: 'Log in here ',
  REGISTER_Sub: 'Register for free',
  FORGOT_PASSWORD: 'Forgot password?',

  SELECT_ROLE: 'Select your role',

  ADMIN: 'Admin',
  STUDENT: 'Student',
  TRAINER: 'Trainer',

  BOOTCAMP_PAGE_TITLE: 'Worldclass Bootcamps Worldwide'
}

export default LABEL
