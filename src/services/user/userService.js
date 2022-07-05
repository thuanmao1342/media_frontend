import axiosClient from "../axiosClient";

class UserService {
  getAll = (fileName) => {
    const url = "/url";
    return axiosClient.get(url, { fileName: fileName });
  };
  checkCurrentUser = (token) => {
    const url = "/users";
    return axiosClient.post(url, { token: token });
  };
}
const userService = new UserService();
export default userService;
