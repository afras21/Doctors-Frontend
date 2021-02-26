import axios from 'axios';
import {newsUrl} from '../constants/urls'

export const saveNews = async (payload) => {
    try {
        const newsData = await axios.post(`${newsUrl}/add`, payload);
        return newsData.data
    } catch (error) {console.log(error)}
}
