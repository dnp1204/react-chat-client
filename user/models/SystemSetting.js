const mongoose = require('mongoose');

const { Schema } = mongoose;

const systemSettingSchema = new Schema(
  {
    showOptions: { type: Boolean, default: true },
    showPhotos: { type: Boolean, default: true },
    showSearch: { type: Boolean, default: false },
    recentlyEmoji: [{ type: String }],
    showSummaryAndToolSection: { type: Boolean, default: true }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

const SystemSetting = mongoose.model('system-setting', systemSettingSchema);
module.exports = SystemSetting;
