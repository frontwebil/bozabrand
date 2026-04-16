import { Case } from "@/generated/prisma/client";
import Link from "next/link";
import "./style.css";

export function TopProjects({ topCases }: { topCases: Case[] }) {
  return (
    <section className="top-projects">
      <div className="container">
        <div className="top-projects-nav">
          <h2>ТОП ПРОЄКТИ</h2>
          <Link href={"/cases"} style={{ textDecoration: "underline" }}>
            ПЕРЕГЛЯНУТИ УСІ
          </Link>
        </div>
        <div className="top-projects-cases">
          <Link
            href={`/cases/${topCases[0].slug}`}
            className="top-projects-case-small"
            style={{ backgroundImage: `url(${topCases[0].imgUrl})` }}
          >
            <div className="top-projects-case-text">
              <p>{topCases[0].subTitle}</p>
              <h2>{topCases[0].title}</h2>

              <div className="top-projects-case-categoryes">
                {topCases[0].categories.map((category, i) => (
                  <div className="top-projects-case-category" key={i}>
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </Link>
          <Link
            href={`/cases/${topCases[1].slug}`}
            className="top-projects-case-large second"
            style={{ backgroundImage: `url(${topCases[1].imgUrl})` }}
          >
            <div className="top-projects-case-text">
              <p>{topCases[1].subTitle}</p>
              <h2>{topCases[1].title}</h2>
              <div className="top-projects-case-categoryes">
                {topCases[1].categories.map((category, i) => (
                  <div className="top-projects-case-category" key={i}>
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
