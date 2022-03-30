import axios from "axios";

const base_url = 'http://localhost:4000/table'

export default class TableServices {
    static async _get_data_table() {
        return await axios.get(base_url)
    }
}