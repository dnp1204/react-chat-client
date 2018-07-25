const { Promise } = require('bluebird');
const cloudinary = require('cloudinary');

const keys = require('../config');

class Cloudinary {
  constructor() {
    const cloudinaryKeys = keys.cloudinary;

    cloudinary.config({
      cloud_name: cloudinaryKeys.cloud_name,
      api_key: cloudinaryKeys.cloud_api_key,
      api_secret: cloudinaryKeys.cloud_api_secret
    });
  }

  uploadFileAsync(path) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        path,
        { folder: 'react-chat' },
        (err, result) => {
          if (err) {
            return reject(err);
          }

          resolve(result.secure_url);
        }
      );
    });
  }
}

module.exports = new Cloudinary();
