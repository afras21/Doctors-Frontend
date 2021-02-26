// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const axiosInstance = axios.create();

// axiosInstance.interceptors.request.use(
//     request => {
//         if(!request.url.includes('auth')) {
//             request.headers['token'] = getUserToken();
//         }
//     }, error => {
//         console.log('----Error in axios Interceptor', error)
//         return Promise.reject(error);
//     }
// )
// const getUserToken = async () => {
//     const token = await AsyncStorage.getItem('userToken');
//     return token
// }

// export default axiosInstance;