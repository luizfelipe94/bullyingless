import HttpException from "./httpException";

class LoginException extends HttpException {
    constructor(message: string){
        super(400, message);
    }
}

export default LoginException;