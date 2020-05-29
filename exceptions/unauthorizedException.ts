import HttpException from "./httpException";

class UnauthorizedException extends HttpException {
    constructor(){
        super(403, "Not Authorized");
    }
}

export default UnauthorizedException;