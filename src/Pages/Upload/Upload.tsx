import { useUser } from "@/hooks/auth"
import { useState } from "react"
import styles from "./Upload.module.css"
import Navbar from '@/components/Navbar/Navbar'
import axios from "axios"

const axios_instance = axios.create()

function Upload() {
    const user = useUser({
        axios_instance: axios_instance,
        post_logout_url: "/",
        login_url: "/login"
    })
    const [FileName, setFileName] = useState("")
    return (
        <div className={styles.container}>
            <Navbar></Navbar>
            <div className={styles.formContainer} onClick={() => document.getElementById("file")?.click()}>
                <form className={styles.uploadBox} id="upload_form" method="post" action="/api/files/upload" encType="multipart/form-data" acceptCharset="ISO-8859-1">
                    <input className={styles.fileInput} type="file" id="file" name="file" onChange={e => {e.target.files && setFileName(e.target.files[0].name)}}></input>
                    <p className={FileName ? styles.selectedFile : styles.noFile}>{FileName ? FileName : "Drop your file here..."}</p>
                </form>
            </div>
            <button className={styles.submitUpload} form="upload_form" type="submit" disabled={FileName ? false : true}>Upload File</button>
        </div>
    )
}

export default Upload