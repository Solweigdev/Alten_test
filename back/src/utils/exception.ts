import { ApiException } from "~/interfaces/apiExceptions";

class Exception implements ApiException {
    status: number;
    error: any;

    constructor(error: any, status: number) {
        this.error = error;
        this.status = status;
    }
}

export class BadRequestException extends Exception {
    constructor(error: any) {
        super(error, 400);
    }
}

export class NotFoundException extends Exception {
    constructor(error: any) {
        super(error, 404);
    }
}
