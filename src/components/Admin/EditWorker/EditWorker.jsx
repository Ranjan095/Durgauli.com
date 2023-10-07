/** @format */

import Modal from "@/components/Modal/Modal";
import questionMark from "../../../../public/images/questionMark.png";
import axios from "axios";
import { ArrowRight, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
let obj = {
  name: "",
  image: "",
  mobile: "",
  category: "",
  post: "",
};
const EditWorker = ({ id, showEditModal, setShowEditModal }) => {
  let { workers } = useSelector((store) => store.workerReducer);
  let [isLoading, setIsLoading] = useState(false);
  let [formData, setFormData] = useState(obj);
  let [imageFile, setImageFile] = useState();

  let image = workers.find((item) => item._id === id).image;

  let [imagePreview, setImagePreview] = useState(image);
  let [lodingImage, setLoadingImage] = useState(false);

  let handleUpload = async () => {
    // console.log(imageFile)
    let data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "durgauli");
    data.append("cloud_name", "ranjanyadav");

    setLoadingImage(true);
    await axios
      .post("https://api.cloudinary.com/v1_1/ranjanyadav/image/upload", data)
      .then((res) => {
        setLoadingImage(false);
        setImagePreview(res.data.url);
        // console.log(res.data.url);
      })
      .catch((err) => {
        setLoadingImage(false);
        console.log(err);
      });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    setIsLoading(true);
    axios
      .patch(`/api/workers/${id}`, { ...formData, image: imagePreview })
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        setShowEditModal(false);
        alert("worker has been Updated successful");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        alert("Somthing went wrong!");
      });
  };

  useEffect(() => {
    setFormData(workers.find((item) => item._id === id) || obj);

    // console.log(workers);
  }, []);
  return (
    <div>
      <Modal isOpen={showEditModal} setIsOpen={setShowEditModal}>
        <div className="text-center ">
          <p className="text-2xl font-semibold">Edit Worker</p>
          <form onSubmit={handleSubmit} className="">
            <div className="space-y-2 lg:space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    value={formData?.name || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                  ></input>
                </div>
              </div>
              <div>
                <label className="text-base font-medium text-gray-900">
                  {" "}
                  Image file{" "}
                </label>
                <div className="">
                  <input
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className="flex w-full h-10 rounded-md border border-gray-300 bg-white pl-1 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    placeholder="ImageURL"
                    id="imageFile"
                  ></input>
                </div>
                <div className=" flex justify-center items-center my-2 space-x-2">
                  {imageFile && (
                    <span
                      className={`border border-black px-1 rounded h-6 ${
                        imagePreview ? "bg-green-700" : "bg-red-700"
                      }  text-white`}
                      onClick={handleUpload}
                    >
                      {lodingImage ? (
                        <Loader2 className="animate-spin mr-3" />
                      ) : imagePreview ? (
                        "Uploaded"
                      ) : (
                        "Upload"
                      )}
                    </span>
                  )}
                  <div className=" border border-black h-[40px] w-[40px] rounded bg-white ">
                    <img
                      className="h-full w-full"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      width="40"
                      height="40"
                      src={imagePreview || questionMark.src}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-base font-medium text-gray-900">
                  {" "}
                  Mobile No{" "}
                </label>
                <div className="mt-2">
                  <input
                    value={formData?.mobile || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: +e.target.value })
                    }
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white   px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="Number"
                    placeholder="Mobile no"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center ">
                  <label className="text-base font-medium text-gray-900">
                    {" "}
                    Category{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    required
                    value={formData?.category || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="flex h-10 w-full rounded-md border border-gray-300 gh-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value={""}>Select</option>
                    <option value={"कार्यकारणीक"}>कार्यकारणीक</option>
                    <option value={"पूजा विभाग"}>पूजा विभाग</option>
                    <option value={"वित्त विभाग"}>वित्त विभाग</option>
                    <option value={"बाजार व्यवस्था"}>बाजार व्यवस्था</option>
                    <option value={"स्वागत समिति"}>स्वागत समिति</option>
                    <option value={"कीर्त्तन विभाग"}>कीर्त्तन विभाग</option>
                    <option value={"प्रसाद विभाग"}>प्रसाद विभाग</option>
                    <option value={"भंडरा विभाग"}>भंडरा विभाग</option>
                    <option value={"सुरक्षा विभाग"}>सुरक्षा विभाग</option>
                    <option value={"मनोरंजन विभाग"}>मनोरंजन विभाग</option>
                    <option value={"अंकेक्षक विभाग"}>अंकेक्षक विभाग</option>
                    <option value={"सूचना विभाग"}>सूचना विभाग</option>
                    <option value={"उदघोषक"}>उदघोषक</option>
                    <option value={"परामर्शदायी सदस्यगण"}>
                      परामर्शदायी सदस्यगण
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <label className="text-base font-medium text-gray-900">
                    {" "}
                    Post{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    required
                    value={formData?.post || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, post: e.target.value })
                    }
                    className="flex h-10 w-full rounded-md border border-gray-300 gh-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value={""}>Select</option>
                    <option value={"सचिव"}>सचिव</option>
                    <option value={"सहायक सचिव"}>सहायक सचिव</option>
                    <option value={"अध्यक्ष"}>अध्यक्ष</option>
                    <option value={"उपाध्यक्ष"}>उपाध्यक्ष</option>
                    <option value={"सहायक पूजारी"}>सहायक पूजारी</option>
                    <option value={"सहायक कोषाध्यक्ष"}>सहायक कोषाध्यक्ष</option>
                    <option value={"कोषाध्यक्ष"}>कोषाध्यक्ष</option>
                    <option value={"सहायक सचिव"}>सहायक सचिव</option>
                    <option value={"सहायक"}>सहायक</option>
                    <option value={"पूजारी"}>पूजारी</option>
                    <option value={"उप महासचिव"}>उप महासचिव</option>
                    <option value={"महासचिव"}>महासचिव</option>
                  </select>
                </div>
              </div>
              <div>
                {isLoading ? (
                  <button
                    disabled
                    type="submit"
                    className={`inline-flex w-full items-center bg-pink-500 justify-center rounded-md  px-3.5 py-2 font-semibold leading-7 text-white hover:bg-pink-400`}
                  >
                    <Loader2 className="animate-spin mr-3" />
                    Processing...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`inline-flex w-full items-center bg-pink-500 justify-center rounded-md  px-3.5 py-2 font-semibold leading-7 text-white hover:bg-pink-400`}
                  >
                    Update Worker <ArrowRight className="ml-2" size={16} />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditWorker;
