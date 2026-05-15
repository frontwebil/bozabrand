"use client";

import "./Projects.css";
import Link from "next/link";
import { PublicCase, pickCasesList } from "@/lib/casesLocale";
import { useLanguage } from "@/lib/useLanguague";
import { useMemo } from "react";

export function Projects({
  ukCases,
  enCases,
}: {
  ukCases: PublicCase[];
  enCases: PublicCase[];
}) {
  const { language } = useLanguage();

  const cases = useMemo(
    () => pickCasesList(language, ukCases, enCases),
    [language, ukCases, enCases],
  );

  return (
    <section className="projects">
      <div className="container">
        <div className="projects-container">
          {cases.map((project, i) => (
            <Link
              href={`/cases/${project.slug}`}
              className="project-card"
              key={project.slug}
              style={{
                backgroundImage: `url(${project.imgUrl})`,
                backgroundPosition: `${i == 0 && "left center"}`,
              }}
            >
              <h3 className="project-card-subtitle">{project.subTitle}</h3>
              <h2 className="project-card-title">{project.title}</h2>

              <div className="project-card-text">
                <span className="project-card-text-item">
                  {project.categories[0]}
                </span>

                {project.categories.slice(1).map((item, index) => (
                  <span className="project-card-text-item" key={index}>
                    <span className="project-card-text-separator">\\</span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
