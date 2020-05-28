"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppConfig {
    constructor() {
        this.API_VERSION = process.env.API_VERSION || "";
        this.SECRET_TOKEN = process.env.SECRET_TOKEN || "";
    }
    getApiVersion() {
        return this.API_VERSION;
    }
    getSecretToken() {
        return this.SECRET_TOKEN;
    }
}
exports.default = AppConfig;
