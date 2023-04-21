/** @format */

import Button from "@mui/material/Button";

import s from "./style.module.css";
import Image from "next/image";

type Props = {
  setFile: React.Dispatch<React.SetStateAction<any>>;
  urlImg: any;
  setUrlImg: React.Dispatch<React.SetStateAction<any>>;
};

export default function UploadImg({ setFile, urlImg, setUrlImg }: Props) {
  const handleInputFile = async (e: any) => {
    const file = e.target.files[0];
    setUrlImg(URL.createObjectURL(file));
    setFile(file);
  };

  return (
    <div className={s.upload}>
      <Image
        className={s.img}
        src={urlImg}
        alt="product"
        width={410}
        height={400}
      />
      <Button variant="contained" component="label" sx={{ marginTop: "auto" }}>
        Upload
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={handleInputFile}
        />
      </Button>
    </div>
  );
}
