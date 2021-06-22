import { Test, TestingModule } from '@nestjs/testing';
import { ApiStatusService } from '@/api-status/api-status.service';

describe('ApiHealthService', () => {
  let service: ApiStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiStatusService],
    }).compile();

    service = module.get<ApiStatusService>(ApiStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
