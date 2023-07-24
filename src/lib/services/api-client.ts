import axios from "axios";
import type { Module } from "../types";

export interface FetchResponse {
  modules: Module[];
}

const axiosInstance = axios.create({
  baseURL: "https://learn.microsoft.com/api",
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async () => {
    const res = await axiosInstance.get<FetchResponse>(this.endpoint);
    return res.data.modules;
  };

  getSingle = async (uid: Module["uid"]) => {
    const res = await axiosInstance.get<FetchResponse>(
      this.endpoint + "?uid=" + uid
    );
    return res.data.modules[0];
  };
}

export default APIClient;
