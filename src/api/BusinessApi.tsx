import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

export async function getTableData() {
    const response = await axios.get(
        `${process.env.BASE_API as string}/databusiness`
    )

    return response
}
