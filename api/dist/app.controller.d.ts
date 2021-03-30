/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    pipeNotWorkingOnUploadedFile(file: Express.Multer.File): string;
}
