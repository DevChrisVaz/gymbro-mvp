import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { authorizationInterceptor } from "./interceptors/authorization.interceptor";
import { APIResult, ApiRestClient, HttpMethod } from "@/core/domain/contracts/datasources/api-rest-client";
import publicAxiosInstance from "./public-axios.config";

export class AxiosApiRestClient implements ApiRestClient {
    replaceToken(token: string): void {
        publicAxiosInstance.interceptors.request.clear();
        publicAxiosInstance.interceptors.request.use(authorizationInterceptor(token));
    }

    authorization(token?: string, replaceInterceptor?: Boolean | undefined): void {
        if (replaceInterceptor) {
            publicAxiosInstance.interceptors.request.clear();
            publicAxiosInstance.interceptors.request.use(authorizationInterceptor(token));

            return;
        }

        // let currentInterceptor;

        // for (let interceptor in publicAxiosInstance.interceptors.request) {
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
            const response = await publicAxiosInstance.get<T>(
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
            const response = await publicAxiosInstance.post<T>(
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
            const response = await publicAxiosInstance.put<T>(
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
            const response = await publicAxiosInstance.delete<T>(
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
            const response = await publicAxiosInstance.patch<T>(
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
        if (response != null) {
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
            return {
                type: "Error",
                message: "Ocurrió un error inesperado"
            }
        }
    }
}