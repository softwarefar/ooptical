import { Get, Controller } from '@nestjs/common';
import { AppService } from '../../services/app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  root(): string {
    return this.appService.root();
  }
}
