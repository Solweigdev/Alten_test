import { ApiResponse } from "~/interfaces/apiResponse";

class Response implements ApiResponse {
    message: string;
    data: any;
    status: number;

    constructor(message: string, data: any, status: number) {
        this.message = message;
        this.data = data;
        this.status = status;
    }
}

export class SuccessResponse extends Response {
    constructor(message: string, data: any) {
        super(message, data, 200);
    }
}

export class CreatedResponse extends Response {
    constructor(message: string, data: any) {
        super(message, data, 201);
    }
}

export class NoContentResponse extends Response {
    constructor(message: string) {
        super(message, null, 204);
    }
}
