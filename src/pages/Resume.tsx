import { useEffect } from "react";
import "../styles/resume.css";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import RepoButton from "../components/RepoButton";
import SiteButton from "../components/SiteButton";
import EmailButtonsIcon from "../components/EmailButtonsIcon";
import proofmintCover from "../assets/projects/proofmint-cover.svg";
import sakuraCover from "../assets/projects/sakura-cover.svg";
import solanaCover from "../assets/projects/solana-hello-cover.svg";
import ExternalLink from "../components/ExternalLink";
import { SOCIAL } from "../data/social";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Resume() {
  // Metadata / tab title
  usePageTitle("Eugene McGrath — Web3 / Blockchain Developer Portfolio");

  const base = import.meta.env.BASE_URL; // e.g. "/portfolio-starter/"

  const proofmint = PROJECTS.find((p) => p.key === "proofmint");
  const sakura = PROJECTS.find((p) => p.key === "sakura");
  const solana = PROJECTS.find((p) => p.key === "solana-hello");

  if (!proofmint || !sakura || !solana) {
    return (
      <div className="container-nwc py-10">
        <p className="text-sm opacity-80">
          Loading projects… (check keys in <code>src/data/projects.ts</code>:
          <code> proofmint</code>, <code> sakura</code>, <code> solana-hello</code>)
        </p>
      </div>
    );
  }

  // Reveal-on-scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="resume">
      {/* ===== Gradient Header ===== */}
      <div className="full-bleed">
        <header
          id="top"
          className="header relative min-h-[72vh] lg:min-h-[78vh]"
          style={{
            backgroundImage: `url(${base}img/Background.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="hero-inner relative z-10">
            <div className="header-links flex-start">
              {/* Avatar + CTA column */}
              <div className="flex items-start gap-4">
                <div className="profile-container shrink-0">
                  <img
                    className="profile"
                    src={`${base}img/gene-avatar.png`}
                    alt="Eugene McGrath"
                    width={96}
                    height={96}
                    decoding="async"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* LinkedIn */}
                    <ExternalLink
                      href={SOCIAL.linkedin}
                      aria-label="View LinkedIn profile (may require sign-in)"
                      aria-describedby="li-note"
                      title="Opens LinkedIn in a new tab (may require sign-in)"
                      className="inline-flex h-10 items-center rounded-xl border border-amber-400/60 px-4 text-sm font-medium bg-black/20 backdrop-blur-sm transition-colors duration-500 ease-out hover:bg-amber-400 hover:text-black"
                    >
                      View LinkedIn
                    </ExternalLink>

                    {/* Email */}
                    <a
                      href={SOCIAL.email}
                      className="inline-flex h-10 items-center rounded-xl border border-zinc-700 px-4 text-sm font-medium bg-black/20 backdrop-blur-sm transition-colors duration-500 ease-out hover:bg-white hover:text-black"
                    >
                      Email Me
                    </a>
                  </div>
                </div>
              </div>

              {/* Icon list */}
              <ul className="flex-list list-items-circle mt-3">
                <li>
                  <a
                    title="GitHub: CryptoMachineGene"
                    href="https://github.com/CryptoMachineGene"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18c-.46-1.17-1.12-1.48-1.12-1.48c-.91-.62.07-.61.07-.61c1 .07 1.53 1.04 1.53 1.04c.9 1.53 2.36 1.09 2.94.83c.09-.66.35-1.1.63-1.35c-2.22-.25-4.55-1.11-4.55-4.95c0-1.09.39-1.98 1.03-2.68c-.1-.25-.45-1.27.1-2.65c0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33c1.9-1.29 2.74-1.02 2.74-1.02c.55 1.38.2 2.4.1 2.65c.64.7 1.03 1.59 1.03 2.68c0 3.85-2.34 4.7-4.57 4.95c.36 .31 .68 .92 .68 1.86v2.76c0 .27 .18 .58 .69 .48A10 10 0 0 0 12 2Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    title="X (Twitter): @CryptoMachineG"
                    href="https://x.com/CryptoMachineG"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="X / Twitter"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M17.53 3H20l-5.5 6.29L21 21h-5.5l-4.3-5.61L5.96 21H4l6-6.86L3 3h5.6l3.9 5.23L17.53 3Zm-1.93 16h1.53L8.53 5H7l8.6 14Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Title */}
            <h1 className="hero-title">
              Eugene McGrath
              <span className="hero-subtitle">
                Web3 / Blockchain Developer · Smart Contracts · React
              </span>
            </h1>
          </div>

          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#060003]" />
        </header>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main>
        {/* ABOUT */}
        <section
          className="section about"
          style={{ backgroundImage: `url(${base}img/Vector.png)` }}
        >
          <div className="section-inner space-y-4 text-base leading-relaxed reveal">
            <h2 className="sr-only">About</h2>
            <p className="text-neutral-200 text-lg font-semibold">
              Blockchain Developer | Smart-Contract Engineer | Web3 Builder
            </p>
            <p className="text-neutral-300">
              Focused on decentralized systems and real-world utility. I design, deploy, and test
              full-stack dApps using Solidity, Hardhat, Foundry, and React + TypeScript.
            </p>
            <p className="text-neutral-300">
              Clean code, verifiable logic, and reliable results — engineering that speaks for itself.
            </p>
            <ul className="achievements">
              <li>🏆 Dapp University Blockchain Developer Mentorship</li>
              <li>🏆 EatTheBlocks Certified Web3 Developer</li>
            </ul>
            <EmailButtonsIcon className="pt-2" primary="gmail" />
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects">
          <div className="max-w-6xl mx-auto cards flex flex-wrap justify-center items-stretch gap-6">
            {/* Proofmint */}
            <div
              className="card reveal flex flex-col bg-[#0b0a0d] rounded-2xl p-5 shadow-md transition-transform transition-shadow duration-500 ease-out hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              data-delay="0"
            >
              <img
                loading="lazy"
                decoding="async"
                width={640}
                height={360}
                src={proofmintCover}
                alt="Proofmint cover"
                className="rounded-xl aspect-[16/9] w-full h-auto transition-transform duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              />
              <h3 className="card-title mt-3">Proofmint</h3>
              <p className="card-description">
                Full-stack token crowdsale + NFT receipt dApp (Hardhat, Solidity, React).
              </p>

              <div
                className={`card-buttons ${
                  !proofmint.live ? "single" : ""
                } mt-auto pt-3 pb-4 flex flex-wrap justify-center gap-2 sm:gap-3`}
              >
                <Link
                  to="/demo"
                  aria-label="Demo coming soon"
                  className="min-w-[120px] h-10 shrink-0 inline-flex items-center justify-center rounded-2xl 
                             border border-yellow-400/60 text-yellow-200 bg-transparent text-sm font-medium transition-colors duration-500 ease-out hover:bg-yellow-400 hover:text-black"
                >
                  Demo
                </Link>

                {proofmint.live && (
                  <SiteButton
                    to={proofmint.live}
                    aria-label="Open Proofmint live site"
                    className="min-w-[120px] h-10 shrink-0 justify-center"
                  />
                )}

                <RepoButton
                  to="https://github.com/CryptoMachineGene/proofmint-project"
                  aria-label="Open Proofmint GitHub repository"
                  className="min-w-[120px] h-10 shrink-0 justify-center"
                />
              </div>
            </div>

            {/* Sakura */}
            <div
              className="card reveal flex flex-col bg-[#0b0a0d] rounded-2xl p-5 shadow-md transition-transform transition-shadow duration-500 ease-out hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              data-delay="100"
            >
              <img
                loading="lazy"
                decoding="async"
                width={640}
                height={360}
                src={sakuraCover}
                alt="Sakura Token cover"
                className="rounded-xl aspect-[16/9] w-full h-auto transition-transform duration-500 ease-out hover:-translate-y-0.5"
              />
              <h3 className="card-title mt-3">Sakura Token (SKR)</h3>
              <p className="card-description">
                Custom ERC-20 token with delegated transfer tests (Solidity + Hardhat).
              </p>

              <div
                className={`card-buttons ${
                  !sakura.live ? "single" : ""
                } mt-auto pt-3 pb-4 flex flex-wrap justify-center gap-2 sm:gap-3`}
              >
                {sakura.live && (
                  <SiteButton
                    to={sakura.live}
                    aria-label="Open Sakura live site"
                    className="min-w-[120px] h-10 shrink-0 justify-center"
                  />
                )}
                <RepoButton
                  to={sakura.repo}
                  aria-label="Open Sakura GitHub repository"
                  className="min-w-[120px] h-10 shrink-0 justify-center"
                />
              </div>
            </div>

            {/* Solana Hello */}
            <div
              className="card reveal flex flex-col bg-[#0b0a0d] rounded-2xl p-5 shadow-md transition-transform transition-shadow duration-500 ease-out hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              data-delay="200"
            >
              <img
                loading="lazy"
                decoding="async"
                width={640}
                height={360}
                src={solanaCover}
                alt="Solana Hello World cover"
                className="rounded-xl aspect-[16/9] w-full h-auto transition-transform duration-500 ease-out hover:-translate-y-0.5"
              />
              <h3 className="card-title mt-3">Solana Hello World</h3>
              <p className="card-description">
                Anchor + Rust Hello World smart contract verified on localnet.
              </p>

              <div
                className={`card-buttons ${
                  !solana.live ? "single" : ""
                } mt-auto pt-3 pb-4 flex flex-wrap justify-center gap-2 sm:gap-3`}
              >
                {solana.live && (
                  <SiteButton
                    to={solana.live}
                    aria-label="Open Solana live site"
                    className="min-w-[120px] h-10 shrink-0 justify-center"
                  />
                )}
                <RepoButton
                  to={solana.repo}
                  aria-label="Open Solana GitHub repository"
                  className="min-w-[120px] h-10 shrink-0 justify-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          className="section skills pb-16"
          style={{ backgroundImage: `url(${base}img/Vector.png)` }}
        >
          <div className="section-inner reveal" data-delay="100">
            <h2 className="section-title">Tech Stack</h2>

            {/* FRONTEND */}
            <div className="tech-category">
              <h3 className="tech-label">Frontend</h3>
              <div className="skill-cards">
                <div className="skill-card flex-center" data-tooltip="React">
                  <img src={`${base}img/icons/react.svg`} alt="React" />
                </div>
                <div className="skill-card flex-center" data-tooltip="TypeScript">
                  <img src={`${base}img/icons/typescript.svg`} alt="TypeScript" />
                </div>
                <div className="skill-card flex-center" data-tooltip="JavaScript">
                  <img src={`${base}img/icons/js.svg`} alt="JavaScript" />
                </div>
                <div className="skill-card flex-center" data-tooltip="TailwindCSS">
                  <img src={`${base}img/icons/tailwind.svg`} alt="TailwindCSS" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Vite">
                  <img src={`${base}img/icons/vite.svg`} alt="Vite" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Next.js">
                  <img src={`${base}img/icons/nextjs.svg`} alt="Next.js" />
                </div>
              </div>
            </div>

            {/* BLOCKCHAIN / BACKEND */}
            <div className="tech-category">
              <h3 className="tech-label">Blockchain & Backend</h3>
              <div className="skill-cards">
                <div className="skill-card flex-center" data-tooltip="Node.js">
                  <img src={`${base}img/icons/node.svg`} alt="Node.js" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Solidity">
                  <img src={`${base}img/icons/solidity.svg`} alt="Solidity" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Ethereum">
                  <img src={`${base}img/icons/ethereum.svg`} alt="Ethereum" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Hardhat">
                  <img src={`${base}img/icons/hardhat.svg`} alt="Hardhat" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Foundry">
                  <img src={`${base}img/icons/foundry.svg`} alt="Foundry" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Ethers.js">
                  <img src={`${base}img/icons/ethers.svg`} alt="Ethers.js" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Sepolia Testnet">
                  <img src={`${base}img/icons/sepolia.svg`} alt="Sepolia Testnet" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Solana">
                  <img src={`${base}img/icons/solana.svg`} alt="Solana" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Anchor">
                  <img src={`${base}img/icons/anchor.svg`} alt="Anchor" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Rust">
                  <img src={`${base}img/icons/rust.svg`} alt="Rust" />
                </div>
              </div>
            </div>

            {/* TOOLING */}
            <div className="tech-category">
              <h3 className="tech-label">Tooling & DevOps</h3>
              <div className="skill-cards">
                <div className="skill-card flex-center" data-tooltip="Git">
                  <img src={`${base}img/icons/git.svg`} alt="Git" />
                </div>
                <div className="skill-card flex-center" data-tooltip="GitHub Actions">
                  <img src={`${base}img/icons/github-actions.svg`} alt="GitHub Actions" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Linux">
                  <img src={`${base}img/icons/linux.svg`} alt="Linux" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
