import { useEffect, useState } from "react";
import type { AxiosResponse } from "axios";
import axiosPrivate from "../api/axios/axiosPrivate";
import axiosPublic from "../api/axios/axiosPublic";

type useAPIOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: any,
    headers?: Record<string, string>,
    axiosType?: 'public' | 'private',
}

const useAPI = <TDataSource, TData = undefined>(url: string, deps?: React.DependencyList, options: useAPIOptions = {}): {
    dataSource?: TDataSource | undefined,
    setDataSource: React.Dispatch<React.SetStateAction<TDataSource | undefined>>,
    loading: boolean,
    axiosResponse: AxiosResponse<TDataSource, TData> | undefined
} => {
    const [dataSource, setDataSource] = useState<TDataSource | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [axiosResponse, setAxiosResponse] = useState<AxiosResponse<TDataSource, TData>>();

    useEffect(() => {
        const getDataFromAPI = async () => {
            setLoading(true);

            const axios = options.axiosType === 'private' ? axiosPrivate : axiosPublic;
            const response = await axios<TDataSource>({
                url,
                method: options.method ?? 'GET',
                data: options.data,
                headers: options.headers
            });

            if (response.status === 200) {
                setDataSource(response.data);
            }
            else {
                setAxiosResponse({ ...response });
            }

            setLoading(false);
        }

        getDataFromAPI();
    }, deps ?? []);

    return { dataSource, setDataSource, loading, axiosResponse };
}

export default useAPI;