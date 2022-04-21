import axios from "axios";

const uploadImage = async (file) => {
  if (!file) return;
  try {
    const formData = new FormData();
    formData.append("upload_preset", "react-journal");
    formData.append("file", file);

    const cloudUrl = "https://api.cloudinary.com/v1_1/du6r6m3wn/upload";
    const { data } = await axios.post(cloudUrl, formData);

    return data.secure_url;
  } catch (err) {
    console.error("Error al cargar la imagen, revisar logs");
    console.error(err);
  }
};

export default uploadImage;
