/** @format */
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import formidable from "formidable";
import { authModelCloud } from "@/services/authGoogle";
import { Storage } from "@google-cloud/storage";

export const config = { api: { bodyParser: false } };

export default async function UploadImg(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //----cors--------------------------------
  await NextCors(req, res, {
    // Options
    methods: ["POST"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  //----variables--------------------------------
  const form = formidable();
  const jwt = await authModelCloud();
  const storage = new Storage({ authClient: jwt });

  //-----read file--------------------------------
  form.parse(req, async (err, fields, files: any) => {
    try {
      if (!files) throw new Error("Not file image");

      const { filepath, newFilename, originalFilename } = files.image;

      //--------upload file to google storage--------------------------------
      const [File]: any = await storage.bucket("buket-image").upload(filepath, {
        destination: newFilename + "-" + originalFilename,
      });
      //--------response success--------------------------------
      return res.status(200).json({ url: File.metadata.mediaLink });
    } catch {
      //--------response failed--------------------------------
      return res.status(400).json({ message: "Error upload image" });
    }
  });
}
