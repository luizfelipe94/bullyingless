import IAppConfig from "./IAppConfig";

class AppConfig implements IAppConfig {

    private API_VERSION: string;
    private SECRET_TOKEN: string;

    constructor(){
        this.API_VERSION = process.env.API_VERSION || "";
        this.SECRET_TOKEN = process.env.SECRET_TOKEN || "";
    }

    getApiVersion() : string {
        return this.API_VERSION;
    }

    getSecretToken() : string {
        return this.SECRET_TOKEN;
    }

}


export default AppConfig;