import { API, RAW_JSON_API } from "../utils/urls";

export function getList(setData: any, setPage: any, page: number): void {
    fetch(`${API}page=${page}`)
        .then((response) => response.json())
        .then((data) => {
            setData((oldData: any[]) => oldData.concat(data?.hits))
        })
        .catch((err) => console.log(err))
}

export function getRawjson(story: string, setData: any): void {
    fetch(`${RAW_JSON_API}tags=${story}`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err))
}