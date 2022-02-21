import React from "react";
import Axios from "axios";
import { STATUS422_FAIL_ERROR_MESSAGE } from "./Constants";
import moment from "moment";
import "moment/locale/es";

const API_URL = process.env.REACT_APP_API_URL;

export const momentSimple = (shortDate) => {
  return moment(shortDate);
};


export const datemomentReal = (timestamp) => {
  if (timestamp === null) return null;
  return moment(timestamp).format("D MMMM YYYY, h:mm a");
};

export function header() {
  return {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
}


export function get(endpoint = null, headers, fn) {
  if (endpoint === null) return;

  Axios.get(`${API_URL + endpoint}`, {
    headers: headers,
  })
    .then((r) => fn(r.status, r.data))
    .catch((er) => {
      if (typeof er.response === "undefined")
        return fn(500, { error: "Error de conexión" });
      return fn(er.response.status, er.response);
    });
}


export const getMessage422 = (response) => {
  const messages = response.data.errorMessages;
  let message;

  if (Object.keys(messages).length === 0) {
    message = STATUS422_FAIL_ERROR_MESSAGE;
  } else {
    message = messages[Object.keys(messages)[0]][0];
  }

  return message;
};
