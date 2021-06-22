import { Module } from '@nestjs/common';
import { ApiStatusService } from '@/api-status/api-status.service';

@Module({
  providers: [ApiStatusService],
})
export class ApiStatusModule {}
