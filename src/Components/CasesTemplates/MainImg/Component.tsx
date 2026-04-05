import "./style.css";

import Image from "next/image";

export function ComponentImage() {
  return (
    <section className="img-section">
      <Image src={"/Projects/1.png"} width={99999} height={9999} alt="main-img"/>
    </section>
  );
}
