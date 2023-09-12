/** @format */

import Button from "@mui/material/Button";
import Image from "next/image";
import { StaticImageData } from "next/image";

type Props = {
  setFile: React.Dispatch<React.SetStateAction<any>>;
  images: StaticImageData[] | [string];
  setImages: React.Dispatch<React.SetStateAction<any>>;
};

export default function UploadImg({ setFile, images, setImages }: Props) {
  const handleInputFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setImages(Object.values(files).map((file) => URL.createObjectURL(file)));
      setFile(Object.values(files));
    }
  };

  const grid = images.length > 1 ? " grid grid-cols-2 gap-2 " : "";

  return (
    <div className="max-w-[600px] flex-row  mb-4">
      <div className={grid}>
        {images.map((image: any, i: number) => (
          <Image
            key={i}
            className={" border-2 border-blue-500 rounded"}
            src={image}
            alt="product image"
            width={410}
            height={400}
          />
        ))}
      </div>
      <Button
        variant="contained"
        component="label"
        sx={{ marginTop: "10px", width: "100%" }}
      >
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
