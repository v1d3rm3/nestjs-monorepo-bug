import { Controller, Get, Post, UploadedFile, UseInterceptors, UsePipes } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExceptionNotWorkingOnMonorepoPipe, NotWorkingOnUploadedFilePipe, shouldThrowCorrectCodeErrorButNotWorking } from 'mono-common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UsePipes(ExceptionNotWorkingOnMonorepoPipe)
  getHello(): string {
    shouldThrowCorrectCodeErrorButNotWorking();
    return this.appService.getHello();
  }

  /**
   * UploadedFile pipe example. It's not working.
   */
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  pipeNotWorkingOnUploadedFile(@UploadedFile(NotWorkingOnUploadedFilePipe) file: Express.Multer.File): string {
    return this.appService.getHello();
  }
}
