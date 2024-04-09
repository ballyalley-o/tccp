import { RFTextField } from 'component/form'
import { APP_FIELD } from 'config'
import { KEY, SIZE, SIZE_MAP } from 'constant'

const DEFAULT = {
  // margin: 'normal',
  fullWidth: true,
  // component: RFTextField,
  sx: { height: APP_FIELD.HEIGHT }
}

export const FORM = {
  FIRST_NAME: {
    // name: KEY.FIRST_NAME,
    label: 'First name',
    placeholder: 'Enter your first name',
    autoComplete: 'given-name',
    autoFocus: true,
    required: true,

    ...DEFAULT
  },
  LAST_NAME: {
    // name: KEY.LAST_NAME,
    label: 'Last name',
    placeholder: 'Enter your last name',
    autoComplete: 'family-name',
    required: true,

    ...DEFAULT
  },
  EMAIL: {
    // name: KEY.EMAIL,
    label: 'Email',
    placeholder: 'Enter your email',
    autoComplete: 'email',
    required: true,
    type: 'email',

    ...DEFAULT
  },
  PASSWORD: {
    // name: KEY.PASSWORD,
    label: 'Password',
    placeholder: 'Enter your password',
    autoComplete: 'new-password',
    required: true,

    ...DEFAULT
  },
  CONFIRM_PASSWORD: {
    // name: KEY.CONFIRM_PASSWORD,
    label: 'Confirm password',
    placeholder: 'Confirm your password',
    autoComplete: 'new-password',
    required: true,

    ...DEFAULT
  },
  GITHUB_USERNAME: {
    // name: KEY.GITHUB_USERNAME,
    label: 'Github username',
    placeholder: 'Enter your github username',
    autoComplete: 'username',
    required: true,

    ...DEFAULT
  },
  LOCATION: {
    // name: KEY.LOCATION,
    label: 'Location',
    placeholder: 'Enter your location',
    autoComplete: 'location',

    ...DEFAULT
  },
  ROLE: {
    // name: KEY.ROLE,
    label: 'Role',
    autoComplete: 'role',
    defaultValue: 'student',
    size: SIZE_MAP[SIZE.MEDIUM] as 'medium',
    required: true,
    select: true,
    SelectProps: { native: false },
    options: [
      { value: 'student', label: 'Student' },
      { value: 'trainer', label: 'Trainer' },
      { value: 'admin', label: 'Admin' }
    ],
    // margin: 'normal',
    fullWidth: true
  },
  AVATAR: {
    INPUT: {
      name: KEY.AVATAR,
      type: 'file',
      accept: 'image/*',
      style: { display: 'none' },
      id: 'avatar-upload'
    },
    BUTTON: {
      size: SIZE_MAP[SIZE.LARGE] as 'large',
      component: 'span',
      fullWidth: DEFAULT.fullWidth
    },
    LABEL: {
      htmlFor: 'avatar-upload'
    }
  }
}

export const FORM_ARIA = {
  FIRST_NAME: {
    'aria-label': 'First name'
  },
  LAST_NAME: {
    'aria-label': 'Last name'
  },
  EMAIL: {
    'aria-label': 'Email'
  }
}
