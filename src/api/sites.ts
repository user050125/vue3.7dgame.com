import request from "@/utils/request";
import { LoginData } from "./auth/model";
export function login(data: LoginData) {
  return request({
    url: "https://api.7dgame.com/sites/login",
    method: "post",
    data,
  });
}
