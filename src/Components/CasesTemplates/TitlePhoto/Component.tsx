import "./style.css";

export type TitlePhotoData = {
  title?: string;
  src?: string;
  alt?: string;
};

export function ComponentTitlePhoto({ data }: { data?: TitlePhotoData }) {
  const title = (data?.title ?? "РЕЗУЛЬТАТИ").trim() || "РЕЗУЛЬТАТИ";
  const src = data?.src?.trim() || "/Templates/TitlePhoto.png";
  const alt = data?.alt?.trim() || title;

  return (
    <section className="title-photo">
      <div className="container">
        <h2 className="title-photo-title">{title}</h2>

        <div className="title-photo-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} />
        </div>
      </div>
    </section>
  );
}
