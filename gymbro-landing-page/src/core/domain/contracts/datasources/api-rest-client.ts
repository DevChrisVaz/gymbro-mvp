export enum HttpMethod {
    GET,
    POST,
    PUT,
    DELETE,
    PATCH
}

interface Succeeded<T> {
    type: "Succeeded",
    data: T
}

interface Failed {
    type: "Failed",
    message: any
}

interface Error {
    type: "Error",
    message: string;
}

export type APIResult<T = void> = Succeeded<T> | Failed | Error;

export interface ApiRestClient {
    authorization(token: string, replaceInterceptor?: Boolean): void;

    call<T = void>(
        method: HttpMethod,
        url: string,
        {
            body,
            params,
            options
        }?: {
            body?: object,
            params?: object
            options?: any
        }
    ): Promise<APIResult<T>>;
}