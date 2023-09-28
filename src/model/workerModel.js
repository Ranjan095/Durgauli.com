/** @format */

import mongoose from "mongoose";

let workerSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  mobile: { type: Number },
  category: {
    type: String,
    enum: [
      "कार्यकारणीक",
      "पूजा विभाग",
      "वित्त विभाग",
      "बाजार व्यवस्था",
      "स्वागत समिति",
      "कीर्त्तन विभाग",
      "प्रसाद विभाग",
      "भंडरा विभाग",
      "सुरक्षा विभाग",
      "मनोरंजन विभाग",
      "अंकेक्षक विभाग",
      "सूचना विभाग",
      "उदघोषक",
      "परामर्शदायी सदस्यगण",
    ],
    required: true,
  },
  post: {
    type: String,
    enum: [
      "सचिव",
      "सहायक सचिव",
      "अध्यक्ष",
      "उपाध्यक्ष",
      "सहायक पूजारी",
      "सहायक कोषाध्यक्ष",
      "कोषाध्यक्ष",
      "सहायक सचिव",
      "सहायक",
      "पूजारी",
      "उप महासचिव",
      "महासचिव",
    ],
    required: true,
  },
});

export let WorkerModel =
  mongoose.models.workers || mongoose.model("workers", workerSchema);
