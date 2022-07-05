import axiosClient from "../axiosClient";
class S3Service {
  log = () => {
    console.log(
      "S3Service log",
      process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    );
  };

  generateUploadUrl = () => {
    const url = "/url";
    return axiosClient.get(url);
  };

}

const s3Service = new S3Service();
export default s3Service;
