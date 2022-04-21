import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://journalvue-default-rtdb.firebaseio.com",
});

export default journalApi;
