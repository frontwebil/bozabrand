"use client";

import { Case } from "@/generated/prisma/browser";
import "./Projects.css";
import Link from "next/link";

export function Projects({ cases }: { cases: Case[] }) {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects-container">
          {cases.map((project, i) => (
            <Link
              href={`/cases/${project.slug}`}
              className="project-card"
              key={i}
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
