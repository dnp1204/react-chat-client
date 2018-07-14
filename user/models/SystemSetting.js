const mongoose = require('mongoose');

const { Schema } = mongoose;

const systemSettingSchema = new Schema(
  {
    systemColor: { type: String, default: '#0584FF' },
    showOptions: { type: Boolean, default: true },
    showPhotos: { type: Boolean, default: true },
    showSearch: { type: Boolean, default: false },
    recentlyEmoji: [{ type: String }],
    selectedEmoji: {
      id: { type: String, default: '+1' },
      native: { type: String, default: '👍' }
    },
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
