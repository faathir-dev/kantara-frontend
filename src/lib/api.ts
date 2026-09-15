// File: lib/api.ts

import axios, { AxiosError } from "axios";
import { GetServerSidePropsContext } from "next";
import Cookies from "universal-cookie";
import { getToken } from "@/lib/cookies";
import { getApiBaseUrl } from "@/lib/apiBase";

let context: GetServerSidePropsContext | undefined;

export function setApiContext(ctx: GetServerSidePropsContext) {
  context = ctx;
}

const baseURL = getApiBaseUrl();

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

const isBrowser = typeof window !== "undefined";

api.interceptors.request.use((config) => {
  if (config.headers) {
    let token: string | undefined;

    if (!isBrowser && context) {
      const cookies = new Cookies(context.req?.headers.cookie);
      token = cookies.get("gacoan_token");
    } else if (isBrowser) {
      token = getToken();
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const data = (error.response?.data ?? {}) as {
      error?: string;
      message?: string;
    };
    const backendMessage =
      data.error || data.message || error.message || "Unknown error occurred";

    error.message = backendMessage;
    return Promise.reject(error);
  }
);

export default api;
