import axios from "axios";
import { getAPIUrl } from "../../utils/APIUtils";

const axiosPublic = axios.create({
    baseURL: getAPIUrl(),
});

export default axiosPublic;