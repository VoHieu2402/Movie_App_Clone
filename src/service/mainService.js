import axios from "axios";

export function getAPI(urlAPI) {
    return axios({
        method: "GET",
        url: urlAPI
    })
};

export function postAPI(urlAPI, dataAPI) {
    return axios({
        method: "POST",
        url: urlAPI,
        data: dataAPI
    })
};
