import { NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { message: "Файл не знайдено" },
        { status: 400 },
      );
    }

    const allowedImageTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/avif",
    ];

    const allowedVideoTypes = ["video/mp4", "video/webm", "video/quicktime"];

    const isImage = allowedImageTypes.includes(file.type);
    const isVideo = allowedVideoTypes.includes(file.type);

    if (!isImage && !isVideo) {
      return NextResponse.json(
        { message: "Недозволений тип файлу" },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<{
      secure_url: string;
      public_id: string;
    }>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: isVideo ? "cases/videos" : "cases/images",
            resource_type: isVideo ? "video" : "image",
          },
          (error, result) => {
            if (error || !result) {
              reject(error || new Error("Upload failed"));
              return;
            }

            resolve({
              secure_url: result.secure_url,
              public_id: result.public_id,
            });
          },
        )
        .end(buffer);
    });

    return NextResponse.json(
      {
        message: "Файл успішно завантажено",
        url: result.secure_url,
        publicId: result.public_id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("UPLOAD_ERROR", error);

    return NextResponse.json(
      { message: "Помилка при завантаженні файлу" },
      { status: 500 },
    );
  }
}
