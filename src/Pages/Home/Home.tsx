import { useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import styles from "./Home.module.css"
import settings_icon from "@/assets/settings_icon.png"
import conversions from "@/utils/conversion"
import { useNavigate } from 'react-router-dom'
import { useUser } from '@/hooks/auth'
import axios from 'axios'
import { useFiles } from '@/hooks/files'

const axios_instance = axios.create()

function Home() {
  const navigate = useNavigate();
  const [Files, setFiles] = useState<any[]>([{name: "testfile.jpg", size: 192000000},{name: "anotherfile.jpg", size: 8000000}])
  const [SelectedFile, setSelectedFile] = useState<number | null>(null)
  const user = useUser({
    axios_instance: axios_instance,
    post_logout_url: "/dashboard",
    login_url: "/login"
  })
  const files = useFiles({axios_instance: axios_instance})

  return (
    <div className={styles.container}>
        <Navbar></Navbar>
        <div className={styles.fileListDiv}>
          {files.map((file, index) => (
          <div className={`${styles.fileItem} ${SelectedFile == index ? styles.fileItemSelected: ""}`} onClick={() => (SelectedFile == index ? setSelectedFile(null) : setSelectedFile(index))}>
            <div className={styles.fileItemSizeDiv}>
              <p className={`${styles.fileItemSize} ${SelectedFile == index ? styles.fileItemSelected: ""}`}>{conversions.convertByteToText(files[index].data.size)}</p></div>
            <div className={styles.fileItemNameDiv}>
              <p className={`${styles.fileItemName} ${SelectedFile == index ? styles.fileItemSelected: ""}`}>{file.data.name}</p></div>
            </div>
          ))}
        </div>
        <div className={styles.fileDescriptionContainerDiv}>
          <div className={styles.fileDescriptionDiv}>
              {SelectedFile != null ? (
              <div className={styles.fileDescription}>
                <div className={styles.fileDescriptionDetailsDiv}>
                  <p className={styles.descriptionItem}>Filename: {files[SelectedFile].data.name}</p>
                  <p className={styles.descriptionItem}>Size: {conversions.convertByteToText(files[SelectedFile].data.size)}</p>
                  <p className={styles.descriptionItem}>Uploaded at: {files[SelectedFile].data.created_at}</p>
                  <p className={styles.descriptionItem}>Privacy: {"anyone with URL"}</p>
                </div>
                <div className={styles.fileDescriptionButtonsDiv}>
                  <button className={styles.shareButton}>Get Sharable URL</button>
                  <button className={styles.settingsButton}>
                    <img src={settings_icon} className={styles.settingsButtonIcon}></img>
                  </button>
                </div>
              </div>
              ) : (
              <h2 className={styles.noFile}>No File Selected</h2>
              )}
          </div>
        </div>
    </div>
  )
}

export default Home