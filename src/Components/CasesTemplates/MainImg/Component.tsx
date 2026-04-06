import "./style.css";

type MainImageData = {
  src?: string;
  alt?: string;
};

export function ComponentImage({ data }: { data?: MainImageData }) {
  return (
    <section className="img-section">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={data?.src || "/Projects/1.png"} alt={data?.alt || "main-img"} />
    </section>
  );
}
