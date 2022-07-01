import AWS from "aws-sdk";

class S3Service {
  constructor() {
    this.s3 = new AWS.S3();
    AWS.config.update({
      region: "us-east-1",
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });
    console.log("S3Service constructor");
  }
  log = () => {
    console.log("S3Service log", process.env.REACT_APP_AWS_ACCESS_KEY_ID, process.env.REACT_APP_AWS_SECRET_ACCESS_KEY);
  };

  upload = (file, bucket, key) => {
    const params = {
      Bucket: bucket,
      Key: key,
      Body: file,
      ACL: "authenticated-read",
    };
    return this.s3.upload(params).promise();
  };

  getSignedUrl = (bucket, key) => {
    const params = {
      Bucket: bucket,
      Key: key,
      Expires: 60,
    };
    return this.s3.getSignedUrl("getObject", params);
  };

  getSignedUrlForPut = (bucket, key) => {
    const params = {
      Bucket: bucket,
      Key: key,
      Expires: 60,
    };
    return this.s3.getSignedUrl("putObject", params);
  };

  delete = (bucket, key) => {
    const params = {
      Bucket: bucket,
      Key: key,
    };
    return this.s3.deleteObject(params).promise();
  };

  get = (bucket, key) => {
    const params = {
      Bucket: bucket,
      Key: key,
    };
    return this.s3.getObject(params).promise();
  };

  getAll = (bucket) => {
    const params = {
      Bucket: bucket,
    };
    return this.s3.listObjects(params).promise();
  };

  getAllKeys = (bucket) => {
    const params = {
      Bucket: bucket,
    };
    return this.s3.listObjectsV2(params).promise();
  };

  getAllKeysWithPrefix = (bucket, prefix) => {
    const params = {
      Bucket: bucket,
      Prefix: prefix,
    };
    return this.s3.listObjectsV2(params).promise();
  };

  getAllKeysWithPrefixAndDelimiter = (bucket, prefix, delimiter) => {
    const params = {
      Bucket: bucket,
      Prefix: prefix,
      Delimiter: delimiter,
    };
    return this.s3.listObjectsV2(params).promise();
  };

  getAllKeysWithPrefixAndDelimiterAndMaxKeys = (
    bucket,
    prefix,
    delimiter,
    maxKeys
  ) => {
    const params = {
      Bucket: bucket,
      Prefix: prefix,
      Delimiter: delimiter,
      MaxKeys: maxKeys,
    };
    return this.s3.listObjectsV2(params).promise();
  };

  getAllKeysWithPrefixAndDelimiterAndMaxKeysAndContinuationToken = (
    bucket,
    prefix,
    delimiter,
    maxKeys,
    continuationToken
  ) => {
    const params = {
      Bucket: bucket,
      Prefix: prefix,
      Delimiter: delimiter,
      MaxKeys: maxKeys,
      ContinuationToken: continuationToken,
    };
    return this.s3.listObjectsV2(params).promise();
  };

  getAllKeysWithPrefixAndDelimiterAndMaxKeysAndContinuationTokenAndStartAfter =
    (bucket, prefix, delimiter, maxKeys, continuationToken, startAfter) => {
      const params = {
        Bucket: bucket,
        Prefix: prefix,
        Delimiter: delimiter,
        MaxKeys: maxKeys,
        ContinuationToken: continuationToken,
        StartAfter: startAfter,
      };
      return this.s3.listObjectsV2(params).promise();
    };
}

const s3Service = new S3Service();
export default s3Service;
