import conNex from 'util/connex';
import { RESPONSE } from 'constant';
import { ROUTING } from 'constant/routing';

export class RootPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance);
  }

  static ROOT_PARAM = ROUTING.ROOT;
  static DASHBOARD = ROUTING.DASHBOARD;
}

export class AuthPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance);
  }

  static LOG_IN = conNex(ROUTING.AUTH, ROUTING.LOG_IN);
  static LOG_OUT = conNex(ROUTING.AUTH, ROUTING.LOG_OUT);
  static REGISTER = conNex(ROUTING.AUTH, ROUTING.REGISTER);
  static FORGOT_PASSWORD = conNex(ROUTING.AUTH, ROUTING.FORGOT_PASSWORD);
  static RESET_PASSWORD = conNex(ROUTING.AUTH, ROUTING.RESET_PASSWORD);
  static RESET_TOKEN = conNex(ROUTING.AUTH, ROUTING.RESET_TOKEN);
}

export class BootcampPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance);
  }

  static BOOTCAMP = ROUTING.BOOTCAMP;
  static BOOTCAMP_ID = conNex(ROUTING.BOOTCAMP, ROUTING.ID);
}

export class FallbackPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance);
  }

  static BAD_REQUEST = conNex(ROUTING.BAD_REQUEST);
  static NOT_AUTHORIZED = conNex(ROUTING.NOT_AUTHORIZED);
  static FORBIDDEN = conNex(ROUTING.FORBIDDEN);
  static NOT_FOUND = conNex(ROUTING.NOT_FOUND);
  static UNPROCESSABLE_ENTITY = conNex(ROUTING.UNPROCESSABLE_ENTITY);
  static SERVER_ERROR = conNex(ROUTING.SERVER_ERROR);
  static MAINTENNANCE = conNex(ROUTING.MAINTENNANCE);
}
