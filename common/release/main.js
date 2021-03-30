"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldThrowCorrectCodeErrorButNotWorking = exports.ExceptionNotWorkingOnMonorepoPipe = exports.NotWorkingOnUploadedFilePipe = void 0;
const common_1 = require("@nestjs/common");
let NotWorkingOnUploadedFilePipe = class NotWorkingOnUploadedFilePipe {
    constructor() {
        console.log("NotWorkingOnUploadedFilePipe was constructed");
    }
    transform(value, metadata) {
        console.warn("IT IS NOT PASSING HERE");
        throw new Error("Method not implemented.");
    }
};
NotWorkingOnUploadedFilePipe = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], NotWorkingOnUploadedFilePipe);
exports.NotWorkingOnUploadedFilePipe = NotWorkingOnUploadedFilePipe;
let ExceptionNotWorkingOnMonorepoPipe = class ExceptionNotWorkingOnMonorepoPipe {
    constructor() {
        console.log("ExceptionNotWorkingOnMonorepoPipe was constructed");
    }
    transform(value, metadata) {
        console.log("ITS NOT BEING CALLED");
        throw new common_1.BadRequestException("It should be a bad request code");
    }
};
ExceptionNotWorkingOnMonorepoPipe = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ExceptionNotWorkingOnMonorepoPipe);
exports.ExceptionNotWorkingOnMonorepoPipe = ExceptionNotWorkingOnMonorepoPipe;
function shouldThrowCorrectCodeErrorButNotWorking() {
    throw new common_1.BadRequestException("It should be a bad request code");
}
exports.shouldThrowCorrectCodeErrorButNotWorking = shouldThrowCorrectCodeErrorButNotWorking;
