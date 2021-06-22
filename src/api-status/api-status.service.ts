import { Injectable } from '@nestjs/common';
import { Logger } from '@/modules/logger/logger.service';
import { HttpStatus } from '@/common/models/http-status.interface';

@Injectable()
export class ApiStatusService {
  httpStatus(): HttpStatus {
    Logger.info('api: ok');
    return {
      api: 'ok',
    };
  }
}
