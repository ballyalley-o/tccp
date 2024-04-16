import conNex from 'util/connex'
import { GLOBAL } from 'config'
import { RESPONSE } from 'constant'
import { ROUTING } from 'constant/routing'

export class ServerPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance)
  }

  static ORIGIN = GLOBAL.APP_ORIGIN
  static SERVER = GLOBAL.APP_SERVER
  static BOOTCAMP = ROUTING.BOOTCAMP
  static BOOTCAMP_ID = (bootcampId: string) => conNex(ROUTING.BOOTCAMP, bootcampId)
  static COURSE = ROUTING.COURSE
  static COURSE_ID = (courseId: string) => conNex(ROUTING.COURSE, courseId)
  static AUTH_LOG_IN = conNex(ROUTING.AUTH, ROUTING.LOG_IN)
  static AUTH_LOG_OUT = conNex(ROUTING.AUTH, ROUTING.LOG_OUT)
  static AUTH_REGISTER = conNex(ROUTING.AUTH, ROUTING.REGISTER)
  static AUTH_USER = conNex(ROUTING.AUTH, ROUTING.USER)
  static AUTH_SINGLE_USER = (userId: string) => conNex(ROUTING.AUTH, ROUTING.USER, userId)
  static AUTH_ACCOUNT = conNex(ROUTING.AUTH, ROUTING.ACCOUNT)
}

export class RootPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance)
  }

  static ROOT_PARAM = ROUTING.ROOT
  static DASHBOARD = ROUTING.DASHBOARD
}

export class AuthPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance)
  }

  static LOG_IN = conNex(ROUTING.AUTH, ROUTING.LOG_IN)
  static LOG_OUT = conNex(ROUTING.AUTH, ROUTING.LOG_OUT)
  static REGISTER = conNex(ROUTING.AUTH, ROUTING.REGISTER)
  static FORGOT_PASSWORD = conNex(ROUTING.AUTH, ROUTING.FORGOT_PASSWORD)
  static RESET_PASSWORD = conNex(ROUTING.AUTH, ROUTING.RESET_PASSWORD)
  static RESET_TOKEN = conNex(ROUTING.AUTH, ROUTING.RESET_TOKEN)
}

export class BootcampPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance)
  }

  static BOOTCAMP = ROUTING.BOOTCAMP
  static BOOTCAMP_ID = conNex(ROUTING.BOOTCAMP, ROUTING.ID)
}

export class FallbackPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance)
  }

  static BAD_REQUEST = conNex(ROUTING.BAD_REQUEST)
  static NOT_AUTHORIZED = conNex(ROUTING.NOT_AUTHORIZED)
  static FORBIDDEN = conNex(ROUTING.FORBIDDEN)
  static NOT_FOUND = conNex(ROUTING.NOT_FOUND)
  static UNPROCESSABLE_ENTITY = conNex(ROUTING.UNPROCESSABLE_ENTITY)
  static SERVER_ERROR = conNex(ROUTING.SERVER_ERROR)
  static MAINTENNANCE = conNex(ROUTING.MAINTENNANCE)
}
