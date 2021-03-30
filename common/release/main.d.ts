import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class NotWorkingOnUploadedFilePipe implements PipeTransform {
    constructor();
    transform(value: any, metadata: ArgumentMetadata): void;
}
export declare class ExceptionNotWorkingOnMonorepoPipe implements PipeTransform {
    constructor();
    transform(value: any, metadata: ArgumentMetadata): void;
}
export declare function shouldThrowCorrectCodeErrorButNotWorking(): void;
