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
    try {
      const res = await axiosInstance.get<FetchResponse>(this.endpoint);
      return res.data.modules;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching all modules");
    }
  };

  getSingle = async (uid: Module["uid"]) => {
    try {
      const res = await axiosInstance.get<FetchResponse>(
        this.endpoint + "?uid=" + uid
      );
      return res.data.modules[0];
    } catch (error) {
      console.error(error);
      throw new Error(`Error fetching module with uid: ${uid}`);
    }
  };
}

export default APIClient;
