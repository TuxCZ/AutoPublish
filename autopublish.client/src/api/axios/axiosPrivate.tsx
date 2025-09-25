import axios from "axios";
import { getAPIUrl } from "../../utils/APIUtils";

const axiosPrivate = axios.create({
    baseURL: getAPIUrl(),
    withCredentials: true
});

export default axiosPrivate;