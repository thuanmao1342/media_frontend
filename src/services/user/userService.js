import axiosClient from "../axiosClient";

class UserService {
  getAll = () => {
    const url = "/users";
    return axiosClient.get(url);
  };
  checkCurrentUser = (token) => {
    const url = "/users";
    return axiosClient.post(url, { token: token });
  }
}
const userService = new UserService();
export default userService;
