import axiosClient from "./axiosClient";

class S3Service {
  getUrl = (fileName) => {
    const url = "/url?fileName=" + fileName;
    return axiosClient.get(url);
  };
  upload = (url, file) => {
    return axiosClient.put(url, file);
  };
}
const s3Service = new S3Service();
export default s3Service;