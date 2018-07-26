const { Promise } = require('bluebird');
const formidable = require('formidable');

const { userLogger } = require('../../utils/logger');
const cloudinary = require('../../utils/Cloudinary');

const uploadImage = (req, res, next) => {
  const form = new formidable.IncomingForm();
  form.multiples = true;

  if (form) {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return next(err);
      }

      const { images } = files;
      try {
        const promise = [];

        if (images instanceof Array) {
          images.forEach(image => {
            promise.push(cloudinary.uploadFileAsync(image.path));
          });
        } else {
          promise.push(cloudinary.uploadFileAsync(images.path));
        }

        const results = await Promise.all(promise);

        userLogger.debug(
          `User upload ${images.length ? images.length : '1'} image(s)`
        );
        res.send({ images: results });
      } catch (err) {
        return next(err);
      }
    });
  }
};

const removeImage = async (req, res, next) => {
  const { publicId } = req.params;
  try {
    const result = cloudinary.removeImageAsync(publicId);
    res.send({ removeImage: result });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  uploadImage,
  removeImage
};
