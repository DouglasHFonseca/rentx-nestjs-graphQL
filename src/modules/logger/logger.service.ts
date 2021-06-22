import { Injectable, Logger as NestLogger } from '@nestjs/common';

const logger = new NestLogger();

@Injectable()
export class Logger {
  static info(text: any): void {
    logger.verbose(text);
  }

  static log(text: any): void {
    logger.log(text);
  }

  static error(text: any): void {
    logger.error(text);
  }

  static warn(text: any): void {
    logger.warn(text);
  }

  static debug(text: any): void {
    logger.debug(text);
  }
}
