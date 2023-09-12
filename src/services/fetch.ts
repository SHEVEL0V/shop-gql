/** @format */
import axios from "axios";

type Res = string | Error;

export const uploadImgToStorage = async (files: any): Promise<Res> => {
  const formData = new FormData();

  files.map((file: any, i: number) => formData.append(`image${i + 1}`, file));

  return await axios
    .post("http://localhost:3000/api", formData)
    .then(({ data }) => data.images);
};
