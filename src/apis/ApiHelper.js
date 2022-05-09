import axios from "axios"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setIsSessionValid } from "../actions/LoginAction";
import NavbarContainer from "../containers/NavbarContainer";
import { API_HOST_URL, GET, PATH_GET_PAGE, PATH_PROFILE, PATH_REGISTER, POST, TOKEN } from "../shared/AppConstant";
import { UserSession } from "../shared/UserSession";

export const callApi = async (_type, _url, _params, _headers, _data) => {

    try {
        const response = await axios({
            method: _type,
            url: _url,
            params: _params,
            headers: _headers,
            data: _data
        });
        return response;
    } catch (error) {
        if (error.message == "Request failed with status code 401") {
            toast.error(`Session exprired, please login again.`, { autoClose: 3000, position: toast.POSITION.TOP_LEFT });
            sessionStorage.setItem('userSession', JSON.stringify(UserSession));
            NavbarContainer.logout()
        }
        return error;
    }
}

export const tokenApi = (data) => {
    return callApi(POST, API_HOST_URL + TOKEN, "", "", { username: data.username, password: data.password })
}
export const profileApi = (data) => {
    let headers = {
        Authorization: `Bearer ${data}`
    }
    return callApi(GET, API_HOST_URL + PATH_PROFILE, "", headers, {})
}

export const signupApi = (data) => {
    return callApi(POST, API_HOST_URL + PATH_REGISTER, "", "", data)
}

export const getPageApi = ({ params, headers }) => {
    return callApi(GET, API_HOST_URL + PATH_GET_PAGE, params, headers, "")
}