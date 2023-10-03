import { url } from "@/config"
import { ISendGmail } from "../entities/PartsType"


class ContactServices {
    async sendGmail(data: ISendGmail) {
        const response = await fetch(`${url}/contact`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
            }),
        })

        return response.json()
    }

}

export default ContactServices