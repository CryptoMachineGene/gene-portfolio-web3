import React from "react";
import { useNavigate } from "react-router-dom";
import proofmintCover from "../assets/projects/proofmint-cover.svg";
import sakuraCover from "../assets/projects/sakura-cover.svg";
import solanaCover from "../assets/projects/solana-hello-cover.svg";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Projects() {
  const navigate = useNavigate();
  usePageTitle("Web3 Projects — Eugene McGrath");

  const projects = [
    {
      title: "Proofmint",
      description:
        "Web3 proof-of-ownership dApp demonstrating NFT minting and verification with Next.js, Solidity, and Tailwind. Demo walkthrough video in progress.",
      site: "https://cryptomachinegene.github.io/proofmint-project/",
      demo: "/under-construction",
      code: "https://github.com/CryptoMachineGene/proofmint-project",
      image: proofmintCover,
    },
    {
      title: "Sakura Token",
      description:
        "ERC-20 token implementation with delegated transfer tests and a simple frontend for interacting on Ethereum testnets.",
      code: "https://github.com/CryptoMachineGene/sakura",
      image: sakuraCover,
    },
    {
      title: "Solana Hello",
      description:
        "Minimal Solana program built with the Anchor framework, demonstrating initialization and account interaction on localnet.",
      code: "https://github.com/CryptoMachineGene/solana-hello-world",
      image: solanaCover,
    },
  ];

  return (
    <main className="container-nwc min-h-[80vh] py-12 md:py-16">
      <section className="space-y-6">
        <header className="mb-4 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-50">
            Web3 Projects
          </h1>
          <p className="mt-2 text-sm md:text-base leading-relaxed text-zinc-300 max-w-2xl mx-auto md:mx-0">
            Selected work showcasing Solidity, Hardhat, React, and Solana/Anchor — focused on
            real-world Web3 patterns like token launches, proof-of-ownership, and program
            initialization.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card flex flex-col rounded-2xl bg-[#0b0a0d] p-5 shadow-md 
                         transition-transform transition-shadow duration-500 ease-out 
                         hover:-translate-y-1 hover:shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={`${project.title} cover`}
                className="mb-3 aspect-[16/9] h-auto w-full rounded-xl 
                           transition-transform duration-500 ease-out hover:-translate-y-0.5"
                loading="lazy"
              />

              <h3 className="card-title mt-1 text-base md:text-lg font-semibold text-yellow-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                {project.title}
              </h3>

              <p className="card-description mt-1 mb-3 text-sm md:text-[0.95rem] leading-relaxed text-gray-300">
                {project.description}
              </p>

              <div className="mt-auto flex justify-center gap-2 sm:gap-3 pt-3">
                {project.demo && (
                  <button
                    onClick={() => navigate(project.demo)}
                    className="rounded-lg border border-yellow-400 px-4 py-2 text-sm font-medium text-yellow-300 
                               transition-colors duration-500 ease-out hover:bg-yellow-400 hover:text-black"
                  >
                    Demo
                  </button>
                )}

                {project.site && (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-yellow-400 px-4 py-2 text-sm font-medium text-yellow-300 
                               transition-colors duration-500 ease-out hover:bg-yellow-400 hover:text-black"
                  >
                    Site
                  </a>
                )}

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-yellow-400 px-4 py-2 text-sm font-medium text-yellow-300 
                             transition-colors duration-500 ease-out hover:bg-yellow-400 hover:text-black"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
