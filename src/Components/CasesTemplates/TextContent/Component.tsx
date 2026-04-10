import Image from "next/image";
import "./style.css";

type TextBlockData = {
  label?: string;
  title?: string;
  rightTitle?: string;
  description?: string;
  icon?: string;
};

export function ComponentText({ data }: { data: TextBlockData }) {
  return (
    <section className="component-text">
      <div className="container">
        <div className="component-text-left-side">
          {data.label && <h4>{data.label}</h4>}
          {data.title && <h3>{data.title}</h3>}
        </div>

        <div className="component-text-right-side">
          {data.icon && (
            <Image src={data.icon} width={70} height={70} alt="Icon" />
          )}

          <div className="component-text-right-side-text">
            {data.rightTitle && <h3>{data.rightTitle}</h3>}
            {/* {data.description && <p>{data.description}</p>} */}
            {data.description &&
              data.description
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line, index) => <p key={index}>{line}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
