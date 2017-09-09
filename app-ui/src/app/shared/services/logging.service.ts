import { Injectable } from '@angular/core';


export interface Logger {
  log( level: LogLevel, msg: any);

  trace(msg: any);
  debug(msg: any);
  info(msg: any);
  warning(msg: any);
  error(msg: any);
  fatal(msg: any);

}
export class LoggerCategory implements Logger {

  public constructor(readonly category: string) {}

  log(level: LogLevel, msg: any) {
    console.log(`${level.level} : ${msg}`)
  }

  trace(msg: any) {
    this.log(LogLevel.TRACE, msg);
  }

  debug(msg: any) {
    this.log(LogLevel.DEBUG, msg);
  }

  info(msg: any) {
    this.log(LogLevel.INFO, msg);
  }

  warning(msg: any) {
    this.log(LogLevel.WARNING, msg);
  }

  error(msg: any) {
    this.log(LogLevel.ERROR, msg);
  }

  fatal(msg: any) {
    this.log(LogLevel.FATAL, msg);
  }

}

export class LogLevel {

  static readonly FATAL = new LogLevel('FATAL', 0);
  static readonly ERROR = new LogLevel('ERROR', 1);
  static readonly WARNING = new LogLevel('WARNING', 2);
  static readonly INFO = new LogLevel('INFO', 3);
  static readonly DEBUG = new LogLevel('DEBUG', 4);
  static readonly TRACE = new LogLevel('TRACE', 5);



  constructor(readonly level: string, readonly numericLevel: number) {

  }

  public createLogger(category: string){

  }
}
@Injectable()
export class LoggingService {

  constructor() { }

}
