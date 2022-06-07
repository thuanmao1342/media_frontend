import axiosClient from "../axiosClient";

class UserService {
  getAll = () => {
    const url = "/users";
    return axiosClient.get(url);
  };
}
const userService = new UserService();
export default userService;
