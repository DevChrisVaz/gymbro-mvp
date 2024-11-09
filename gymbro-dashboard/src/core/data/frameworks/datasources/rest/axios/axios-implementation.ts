import { type AxiosInstance, AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { authorizationInterceptor } from "./interceptors/authorization.interceptor";
import { APIResult, ApiRestClient, HttpMethod } from "@/core/data/contracts/datasources/api-rest-client";
import { inject, injectable } from "tsyringe";
import { ServerException } from "@/core/exceptions/server-exception";

@injectable()
export class AxiosApiRestClient implements ApiRestClient {

    constructor(@inject("AxiosInstance") private axiosClient: AxiosInstance) { }

    replaceToken(token: string): void {
        this.axiosClient.interceptors.request.clear();
        this.axiosClient.interceptors.request.use(authorizationInterceptor(token));
    }

    authorization(token?: string, replaceInterceptor?: Boolean | undefined): void {
        if (replaceInterceptor) {
            this.axiosClient.interceptors.request.clear();
            this.axiosClient.interceptors.request.use(authorizationInterceptor(token));

            return;
        }

        // let currentInterceptor;

        // for (let interceptor in this.axiosClient.interceptors.request) {
        //     if (interceptor == authorizationInterceptor) {

        //     }
        // }
    }

    async call<T>(
        method: HttpMethod,
        url: string,
        { body, params, options }:
            {
                body?: object;
                params?: object;
                options?: AxiosRequestConfig
            }
    ): Promise<APIResult<T>> {
        switch (method) {
            case HttpMethod.GET:
                return this._get<T>(url, params, options);
            case HttpMethod.POST:
                return this._post<T>(url, { body, params, options });
            case HttpMethod.PUT:
                return this._put<T>(url, { body, params, options });
            case HttpMethod.DELETE:
                return this._delete<T>(url, { params, options });
            case HttpMethod.PATCH:
                return this._patch<T>(url, { body, params, options });
        }
    }

    async _get<T>(
        url: string,
        params?: object,
        options?: AxiosRequestConfig
    ): Promise<APIResult<T>> {
        try {
            const response = await this.axiosClient.get<T>(
                url,
                {
                    params,
                    ...options
                }
            );
            return this._mapResponse(response);

        } catch (error) {
            if (isAxiosError(error)) {
                return this._mapResponse(error.response);
            }

            return this._mapResponse();
        }
    }

    async _post<T>(
        url: string,
        {
            body,
            params,
            options
        }: {
            body?: object,
            params?: object,
            options?: AxiosRequestConfig
        }
    ): Promise<APIResult<T>> {
        try {
            const response = await this.axiosClient.post<T>(
                url,
                body,
                {
                    params,
                    ...options
                },
            );

            return this._mapResponse(response);
        } catch (error) {
            if (isAxiosError(error)) {
                return this._mapResponse(error.response);
            }

            return this._mapResponse();
        }
    }

    async _put<T>(
        url: string,
        {
            body,
            params,
            options
        }: {
            body?: object,
            params?: object,
            options?: AxiosRequestConfig
        }
    ): Promise<APIResult<T>> {
        try {
            const response = await this.axiosClient.put<T>(
                url,
                body,
                {
                    params,
                    ...options
                }
            );

            return this._mapResponse(response);
        } catch (error) {
            if (isAxiosError(error)) {
                return this._mapResponse(error.response);
            }

            return this._mapResponse();
        }
    }

    async _delete<T>(
        url: string,
        {
            params,
            options
        }: {
            params?: object,
            options?: AxiosRequestConfig
        }
    ): Promise<APIResult<T>> {
        try {
            const response = await this.axiosClient.delete<T>(
                url,
                {
                    params,
                    ...options
                }
            );

            return this._mapResponse(response);
        } catch (error) {
            if (isAxiosError(error)) {
                return this._mapResponse(error.response);
            }

            return this._mapResponse();
        }
    }

    async _patch<T>(
        url: string,
        {
            body,
            params,
            options
        }: {
            body?: Object,
            params?: Object,
            options?: AxiosRequestConfig
        }
    ): Promise<APIResult<T>> {
        try {
            const response = await this.axiosClient.patch<T>(
                url,
                body,
                {
                    params,
                    ...options
                }
            );

            return this._mapResponse(response)
        } catch (error) {
            if (isAxiosError(error)) {
                return this._mapResponse(error.response);
            }

            return this._mapResponse();
        }
    }

    _mapResponse<T>(response?: AxiosResponse): APIResult<T> {
        if (response != null && response.status < 500) {
            if (response.status >= 200 && response.status <= 300) {
                return {
                    type: "Succeeded",
                    data: response.data
                }
            } else {
                return {
                    type: "Failed",
                    message: response.data.message
                }
            }
        } else {
            throw new ServerException();
            // return {
            //     type: "Error",
            //     message: "Ocurrió un error inesperado"
            // }
        }
    }
}