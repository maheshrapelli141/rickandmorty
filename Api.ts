import axios, { AxiosResponse } from "axios";

export const api = (url: string,method: string | undefined = "GET") => axios(url, { method })
    .then((res: AxiosResponse) => res.data)
    .catch((err: Response) => console.log(err));