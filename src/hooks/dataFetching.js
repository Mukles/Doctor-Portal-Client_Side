import axios from "axios";

export async function UseDataFectching(url) {
  return axios.get(url);
}
