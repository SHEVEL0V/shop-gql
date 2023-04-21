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
  const form = formidable();
  const jwt = await authModelCloud();
  const storage = new Storage({ authClient: jwt });

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  form.parse(req, async (err, fields, files: any) => {
    try {
      if (!files) throw new Error("Not file image");

      const { filepath, newFilename, originalFilename } = files.image;

      const [File]: any = await storage.bucket("buket-image").upload(filepath, {
        destination: newFilename + "-" + originalFilename,
      });

      return res.status(200).json({ url: File.metadata.mediaLink });
    } catch {
      return res.status(400).json({ message: "Error upload image" });
    }
  });
}
