/** @format */
import axios from "axios";

type Res = string | Error;

export const uploadImgToStorage = async (file: any): Promise<Res> => {
  const formData = new FormData();
  formData.append("image", file);

  return await axios
    .post("http://localhost:3000/api", formData)
    .then(({ data }) => data.url);
};
