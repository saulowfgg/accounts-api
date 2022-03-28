import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(@Query() queryParam: any): any {
    return this.appService.findAll(queryParam);
  }

  @Get('/load_file')
  getFileData(): any {
    return this.appService.saveDocs();
  }
}
