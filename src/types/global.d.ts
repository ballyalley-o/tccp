import { KEY, SIZE } from 'constant'

type CustomColor = {
  light: string
  dark: string
  main: string
  contrastText: string
}

declare global {
  interface ConNex {
    (...params: any[]): string
  }

  declare module '@mui/material/styles' {
    interface Palette {
      [color: string]: CustomColor
    }
  }
}

declare global {
  namespace tccp {
    interface LogoProps {
      width?: number
      disabledLink?: boolean
      sx?: any
      src?: string
      onMouseEnter?: () => void
      onMouseLeave?: () => void
    }

    interface FallbackProps {
      fallbackTitle: string
      errorCode: CODE
    }

    interface FallbackCodeProps {
      errorCode: tccp.FallbackProps['errorCode']
    }

    interface MetaProps {
      title?: string
      description?: string
      keywords?: string
    }
  }

  interface FormFieldProps {
    submitting: boolean
    name?: string
    helperText?: string
    sent: boolean
    control?: any
    register?: any
    submitting?: boolean
    sent?: boolean
    register?: any
    methods?: any
    handleSubmit?: any
    onSubmit?: any
    errors?: any
  }

  interface User {
    avatar: string
    email: string
    firstname: string
    lastname: string
    _id: string
    role: string
    username: string
    location: string
    updatedAt: string
    createdAt: string
  }

  interface IResponse {
    success: boolean
    user: User
    token: string
    message?: string
  }

  interface ISize {
    xs?: number
    sm: number
    md: number
    lg: number
    xl?: number
  }

  interface IDefaultAvatar {
    color?: COLOR
    firstName?: string
    lastName?: string
    extension?: string
    isLarge?: boolean
    children?: React.ReactNode
    BadgeProps?: object
    sx?: object
  }

  interface EndpointBuilder {
    /**
     *
     * @param arg0  { query: ((data: any) => { url: string; method?: METHOD; body: any }) | ((id: any) => { url: string; method: METHOD }), providesTags?: any[], keepUnusedDataFor?: number }
     * @returns any
     */
    query: (arg0: {
      query: ((data?: any) => { url: string; method?: METHOD; body: any }) | ((id?: any) => { url: string; method: METHOD })
      providesTags?: any[]
      keepUnusedDataFor?: number
    }) => any
    mutation: (arg0: {
      query: ((data: any) => { url: string; method?: METHOD; body: any }) | ((ids: any) => { url: string; method: METHOD })
      providesTags?: any
      keepUnusedDataFor?: number
      invalidatesTags?: any[]
    }) => any
  }

  interface Bootcamp {
    _id: Schema.Types.ObjectId
    name: string
    slug: string
    description: string
    website: string
    phone: string
    email: string
    address: string
    location: {
      type: string
      coordinates: [number | undefined, number | undefined]
      formattedAddress: string
      street: string
      city: string
      state: string
      zipcode: string
      country: string
    }
    careers: [string]
    duration: string
    averageRating: number
    averageCost: number
    photo: string
    badge: string
    housing: boolean
    jobAssistance: boolean
    jobGuarantee: boolean
    acceptGi: boolean
    createdAt: Date
    user: Schema.Types.ObjectId
  }

  type VERTICAL = KEY.TOP | KEY.CENTER | KEY.BOTTOM
  type HORIZONTAL = KEY.LEFT | KEY.CENTER | KEY.RIGHT
  type COLOR = 'default' | 'inherit' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
  type SIZE = SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE
}

export = tccp
