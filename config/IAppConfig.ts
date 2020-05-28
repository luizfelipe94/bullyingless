export default interface IAppConfig {
    getApiVersion(): string,
    getSecretToken(): string
}