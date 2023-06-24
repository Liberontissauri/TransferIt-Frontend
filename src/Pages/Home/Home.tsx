import { useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import styles from "./Home.module.css"
import settings_icon from "@/assets/settings_icon.png"
import conversions from "@/utils/conversion"
import { useNavigate } from 'react-router-dom'
import { useUser } from '@/hooks/auth'
import axios from 'axios'

const axios_instance = axios.create()

function Home() {
  const navigate = useNavigate();
  const [FilesLoading, setFilesLoading] = useState(true)
  const [Files, setFiles] = useState<any[]>([{name: "testfile.jpg", size: 192000000},{name: "anotherfile.jpg", size: 8000000}])
  const [SelectedFile, setSelectedFile] = useState<number | null>(null)
  const user = useUser({
    axios_instance: axios_instance,
    post_logout_url: "/dashboard",
    login_url: "/login"
  })

  return (
    <div className={styles.container}>
        <Navbar></Navbar>
        <div className={styles.fileListDiv}>
          {Files.map((file, index) => (
          <div className={`${styles.fileItem} ${SelectedFile == index ? styles.fileItemSelected: ""}`} onClick={() => (SelectedFile == index ? setSelectedFile(null) : setSelectedFile(index))}>
            <div className={styles.fileItemSizeDiv}>
              <p className={`${styles.fileItemSize} ${SelectedFile == index ? styles.fileItemSelected: ""}`}>{conversions.convertBitToText(Files[index].size)}</p></div>
            <div className={styles.fileItemNameDiv}>
              <p className={`${styles.fileItemName} ${SelectedFile == index ? styles.fileItemSelected: ""}`}>{file.name}</p></div>
            </div>
          ))}
        </div>
        <div className={styles.fileDescriptionContainerDiv}>
          <div className={styles.fileDescriptionDiv}>
              {SelectedFile != null ? (
              <div className={styles.fileDescription}>
                <div className={styles.fileDescriptionDetailsDiv}>
                  <p className={styles.descriptionItem}>Filename: {Files[SelectedFile].name}</p>
                  <p className={styles.descriptionItem}>Size: {conversions.convertBitToText(Files[SelectedFile].size)}</p>
                  <p className={styles.descriptionItem}>Uploaded at: {"22/3/2022"}</p>
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