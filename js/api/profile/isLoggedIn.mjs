import { load } from "../constants/stored.mjs";

export const isLoggedIn = () => Boolean(load("accessToken"));