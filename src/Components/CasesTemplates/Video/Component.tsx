import "./style.css";

type VideoBlockData = {
  src?: string;
  poster?: string;
  title?: string;
};

export function ComponentVideo({ data }: { data?: VideoBlockData }) {
  if (!data?.src) {
    return null;
  }

  return (
    <section className="video-block">
      <div className="video-block-container">
        {data.title && <h3 className="video-block-title">{data.title}</h3>}
        <video autoPlay muted loop playsInline className="video-block-player">
          <source src={data.src}/>
        </video>
      </div>
    </section>
  );
}
