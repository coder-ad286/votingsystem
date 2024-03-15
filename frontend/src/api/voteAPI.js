import axios from 'axios'

export const listPolls = async () => {
    return await axios.post("/api/v1/vote/poll/fetch")
}