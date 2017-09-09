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

  public constructor(readonly category: string, readonly svc: LoggingService) {}

  log(level: LogLevel, msg: any, data: any= []) {
    this.svc.logInternal(this.category, level, msg, data);
  }

  trace(msg: any , data: any= []) {
    this.log(LogLevel.TRACE, msg, data);
  }

  debug(msg: any, data: any= []) {
    this.log(LogLevel.DEBUG, msg, data);
  }

  info(msg: any, data: any= []) {
    this.log(LogLevel.INFO, msg, data);
  }

  warning(msg: any, data: any= []) {
    this.log(LogLevel.WARNING, msg, data);
  }

  error(msg: any, data: any= []) {
    this.log(LogLevel.ERROR, msg, data);
  }

  fatal(msg: any, data: any= []) {
    this.log(LogLevel.FATAL, msg, data);
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


}
@Injectable()
export class LoggingService {

  private categoryMap: Map<string, LoggerCategory> = new Map();
  jsonOutput = false;
  constructor() { }

  public createLogger(category: string): LoggerCategory {
    let cat = this.categoryMap.get(category);
    if (!cat) {
      cat = new LoggerCategory(category, this);
      this.categoryMap.set(category, cat);
    }

    return cat;
  }

   logInternal( cat: string, level: LogLevel, msg: any, data: any= []) {
    if (this.jsonOutput) {
      console.log({
        cat: cat,
        level: level.level,
        msg: msg,
        data: data
      })
    } else {
      console.log(`${level.level}  -${cat}- : ${msg}`)
    }
  }

}
