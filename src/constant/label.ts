import { KEY } from 'constant'

const LABEL = {
  GO_BACK: 'Go Back',
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
  COURSE_COVERED: 'Course certifications covered',
  HOME: 'Home',
  LOCATION: 'Location',
  CAREER: 'Careers',
  CONTACT: 'Contact',
  ALREADY_MEMBER: `Already a member? `,
  NOT_A_MEMBER: `Not a member yet? `,
  LOGIN_Sub: 'Log in here ',
  REGISTER_Sub: 'Register for free',
  FORGOT_PASSWORD: 'Forgot password?',
  RATING: 'Rating',
  SELECT_ROLE: 'Select your role',
  WEBSITE: 'Website',
  VISIT_WEBSITE: 'Visit Website',
  ADMIN: 'Admin',
  STUDENT: 'Student',
  TRAINER: 'Trainer',

  TITLE: 'Title',
  DESCRIPTION: 'Description',
  DURATION: 'Duration',
  COST: 'Cost',
  SKILL_REQUIRED: 'Skill Required',
  SCHOLARSHIP: 'Scholarship',

  BOOTCAMP_PAGE_TITLE: 'Worldclass Bootcamps Worldwide',
  COURSE_PAGE_TITLE: 'World Class Courses',

  NEW_BOOTCAMPS: 'New Bootcamps'
}

export default LABEL
