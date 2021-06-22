import { Module } from '@nestjs/common';
import { Logger } from '@/modules/logger/logger.service';

@Module({
  providers: [Logger],
})
export class LoggerModule {}
