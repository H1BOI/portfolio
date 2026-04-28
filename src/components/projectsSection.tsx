"use client"

import { MagicCard } from "@/components/ui/magic-card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "RPE Cells Age Classification",
    description:
      "Created a CNN model to classify RPE cell images into different age groups and compared its performance against SVM and KNN algorithms.",
    tech: ["Python", "PyTorch", "scikit-learn"],
    link: "https://github.com/H1BOI/RPE-classification",
    status: "completed" as const,
  },
  {
    title: "Corpora Management System",
    description:
      "Implemented a full-stack application that allows linguistic researchers to manage and interact with large text corpora.",
    tech: ["Python", "Flask", "MongoDB", "AWS"],
    link: "https://github.com/ACSelke/Corpo",
    status: "completed" as const,
  },
  {
    title: "Cloud Chatbot",
    description:
      "Developing an AI-powered chatbot platform that allows dynamic user interactions with cloud-native infrastructure.",
    tech: ["React", "Node.js", "OpenAI API", "AWS", "Terraform"],
    link: null,
    status: "in-progress" as const,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-center text-foreground">Projects</h2>
        <p className="text-muted-foreground text-center mb-16 text-sm tracking-wide uppercase">
          Things I&#39;ve built and am building
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <MagicCard
              key={project.title}
              className="rounded-xl"
              gradientColor="#3b0764"
              gradientOpacity={0.6}
            >
              <div className="p-6 h-full flex flex-col min-h-[240px]">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {project.title}
                  </h3>
                  {project.status === "in-progress" && (
                    <span className="shrink-0 text-xs px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
                      In Progress
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View on GitHub
                  </a>
                ) : (
                  <span className="text-xs text-muted-foreground/50">Link coming soon</span>
                )}
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
