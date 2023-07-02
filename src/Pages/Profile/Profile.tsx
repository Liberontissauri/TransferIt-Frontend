import styles from "./Profile.module.css"
import Navbar from '@/components/Navbar/Navbar'
import conversion from '@/utils/conversion'
import { useUser } from '@/hooks/auth'
import axios from 'axios'

const axios_instance = axios.create()

function Profile() {
    const user = useUser({
        axios_instance: axios_instance,
        post_logout_url: "/",
        login_url: "/login"
    })

    return (
        <div className={styles.container}>
            <Navbar></Navbar>
            <div className={styles.profileContainer}>
                <div className={styles.userInfoDiv}>
                    <h1 className={styles.usernameText}>{user.data.username}</h1>
                    <p className={styles.detailsText}>{`Storage: ${conversion.convertByteToText(80000000)}/${conversion.convertByteToText(user.data.storage_limit)}`}</p>
                    <p className={styles.detailsText}>{`Created at: ${user.data.created_at}`}</p>
                </div>
                <div className={styles.userButtonsDiv}>
                    <button className={styles.logoutButton} onClick={() => user.logout()}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Profile