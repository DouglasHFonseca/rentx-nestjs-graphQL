import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@/modules/logger/logger.service';
import { Logger as NestLogger } from '@nestjs/common';

describe('LoggerService', () => {
  let service: Logger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Logger],
    }).compile();

    service = module.get<Logger>(Logger);
    NestLogger.overrideLogger(false);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should log the text passed', () => {
    Logger.info('Test');
    Logger.error('Test');
    Logger.warn('Test');
    Logger.debug('Test');
    Logger.log('Test');
    Logger.info = jest.fn();
    Logger.error = jest.fn();
    Logger.warn = jest.fn();
    Logger.debug = jest.fn();
    Logger.log = jest.fn();
    Logger.info('Test');
    Logger.error('Test');
    Logger.warn('Test');
    Logger.debug('Test');
    Logger.log('Test');

    expect(Logger.info).toHaveBeenCalledWith('Test');
    expect(Logger.error).toHaveBeenCalledWith('Test');
    expect(Logger.warn).toHaveBeenCalledWith('Test');
    expect(Logger.debug).toHaveBeenCalledWith('Test');
    expect(Logger.log).toHaveBeenCalledWith('Test');
  });
});
