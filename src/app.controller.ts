import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Account } from './schemas/account.schema';

@ApiBearerAuth()  
@ApiTags('accounts')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Account,
  })
  getAll(@Query() queryParam: any): any {
    return this.appService.findAll(queryParam);
  }

  @Get('/load_file')
  getFileData(): any {
    return this.appService.saveDocs();
  }
}
