import { message } from 'antd'
import axios from 'axios'

export default () => {
    return async (file: File | string | undefined) => {
        if (!file || typeof file === "string") return ""
        const formData = new FormData()
        formData.append("file", file)
        formData.append("api_key", "NfPWRgJFDYsstVHoHjMdUoRhMms")
        formData.append("upload_preset", "rentle")
        message.loading("Stockage de l'image ...")
        try {
            const fileURL = (await axios.post("https://api.cloudinary.com/v1_1/dumlj7guh/image/upload", formData)).data.secure_url
            return fileURL
        } catch(e) {
            message.error("Erreur lors de l'insertion de l'image")
            return ""
        }
    }
}

