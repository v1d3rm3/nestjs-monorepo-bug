import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";

@Injectable()
export class NotWorkingOnUploadedFilePipe implements PipeTransform {
  constructor() {
    console.log("NotWorkingOnUploadedFilePipe was constructed");
  }

  transform(value: any, metadata: ArgumentMetadata) {
    console.warn("IT IS NOT PASSING HERE");
    throw new Error("Method not implemented.");
  }
}

@Injectable()
export class ExceptionNotWorkingOnMonorepoPipe implements PipeTransform {
  constructor() {
    console.log("ExceptionNotWorkingOnMonorepoPipe was constructed");
  }

  transform(value: any, metadata: ArgumentMetadata) {
    console.log("ITS NOT BEING CALLED");
    throw new BadRequestException("It should be a bad request code");
  }
}

export function shouldThrowCorrectCodeErrorButNotWorking() {
  throw new BadRequestException("It should be a bad request code");
}
