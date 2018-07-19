const { Promise } = require('bluebird');

const SystemSetting = require('../models/SystemSetting');

const createNewSystemSetting = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const systemSetting = await SystemSetting.create();
      resolve(systemSetting);
    } catch (err) {
      reject(err);
    }
  });
};

const findById = id => {
  return new Promise(async (resolve, reject) => {
    try {
      const systemSetting = await SystemSetting.findById(id);
      resolve(systemSetting);
    } catch (err) {
      reject(err);
    }
  });
};

const update = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await SystemSetting.findByIdAndUpdate(id, data);
      const systemSetting = await SystemSetting.findById(id);
      resolve(systemSetting);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createNewSystemSetting,
  findById,
  update
};
