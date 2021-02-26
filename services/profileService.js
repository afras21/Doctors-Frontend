import axios from 'axios';
import {profileUrl} from '../constants/urls'

export const getProfileData = async (param) => {
    try {
        const profile = await axios.get(`${profileUrl}${param}`);
        return profile.data
    } catch (error) {console.log(error)}
}
