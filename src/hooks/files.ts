import { AxiosInstance } from "axios"
import { useState, useEffect } from "react"

export interface useFilesConfig {
    axios_instance: AxiosInstance
}

export interface File {
    data: {
        id: string,
        user: string,
        name: string,
        description: string,
        size: number,
        created_at: string,
        updated_at: string
    },
}

export function useFiles(config: useFilesConfig) {
    const axios = config.axios_instance
    const [files, setFiles] = useState<Array<File>>([])

    useEffect(() => {
        axios.get("/api/files").then(response => {
            let file_arr: Array<File> = []
            response.data.forEach((file: any) => {
                file_arr.push({
                    data: {
                        id: file.id,
                        user: file.user,
                        name: file.name,
                        description: file.description,
                        size: file.size,
                        created_at: file.created_at,
                        updated_at: file.updated_at,
                    }
                })
            });
            setFiles(file_arr)
    })}, [])
    return files

}