import { useNavigate } from "react-router-dom";
import CleanAvatar from "../components/CleanAvatar";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
  const nav = useNavigate();

  // Browser tab title
  usePageTitle("Eugene McGrath — Blockchain Developer");

  const PrimaryButton = ({
    label,
    onClick,
    variant = "primary",
  }: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
  }) => {
    const base =
      "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm md:text-base font-semibold " +
      "transition-transform duration-300 ease-out hover:-translate-y-0.5 " +
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30";
    const styles =
      variant === "primary"
        ? "bg-zinc-50 text-zinc-900 hover:bg-white ring-1 ring-white/15"
        : "bg-black/40 text-zinc-100 border border-zinc-800/80 hover:bg-black/55";
    return (
      <button onClick={onClick} className={`${base} ${styles}`}>
        {label}
      </button>
    );
  };

  const Card = ({
    title,
    to,
    blurb,
  }: {
    title: string;
    to: string;
    blurb: string;
  }) => (
    <button
      onClick={() => nav(to)}
      className="group text-left w-full rounded-2xl border border-zinc-800/80 bg-black/35 backdrop-blur-md
                   p-5 md:p-6
                 shadow-sm transition-transform transition-shadow duration-500 ease-out
                 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/60"
    >
      <h2 className="text-base md:text-lg font-semibold text-zinc-50">{title}</h2>
      <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-400">
        {blurb}
      </p>
    </button>
  );

  return (
    <main className="container-nwc min-h-[80vh] py-12 md:py-16 flex flex-col items-center text-center gap-8">
      {/* Hero / Profile */}
      <section className="flex flex-col items-center gap-6">
        <CleanAvatar size={128} />

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-50">
            Eugene McGrath
          </h1>

          <p className="text-zinc-200 font-semibold text-sm md:text-base">
            Blockchain Developer · Solidity / Hardhat · Full-Stack dApps (React + TypeScript)
          </p>

          <p className="text-neutral-300 max-w-2xl text-sm md:text-base leading-relaxed">
            I build and ship smart-contract systems with verifiable logic: tested Solidity,
            clean interfaces, and real deployments. Flagship project:{" "}
            <span className="text-zinc-100 font-semibold">Proofmint</span> — an ERC-20 crowdsale
            with NFT receipts and a live frontend.
          </p>

          <p className="text-neutral-300 max-w-2xl text-sm md:text-base leading-relaxed">
            Deployed projects, tested contracts, and readable code — proof over promises.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton
            label="Proofmint Demo"
            onClick={() => nav("/demo")}
            variant="primary"
          />
          <PrimaryButton
            label="Projects"
            onClick={() => nav("/projects")}
            variant="secondary"
          />
          <PrimaryButton
            label="Resume"
            onClick={() => nav("/resume")}
            variant="secondary"
          />
        </div>
      </section>

      {/* Featured Proof block */}
      <section className="w-full max-w-3xl text-left rounded-2xl border border-zinc-800/80 bg-black/35 backdrop-blur-md
           p-6 md:p-7">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg md:text-xl font-semibold text-zinc-50">
            Featured: Proofmint
          </h2>

          <p className="text-sm md:text-base text-zinc-200 leading-relaxed">
            ERC-20 token sale + ERC-721 receipt NFT — deployed and demoed end-to-end.
            Includes tests, screenshots, and verification links.
          </p>

          <ul className="mt-2 list-disc pl-5 text-sm md:text-base text-gray-400 space-y-1">
            <li>Solidity contracts tested in Hardhat / Foundry</li>
            <li>NFT receipt mint for contribution proof</li>
            <li>Frontend workflow built with React + TypeScript</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <PrimaryButton
              label="Open Proofmint"
              onClick={() => nav("/proofmint")}
              variant="primary"
            />
            <PrimaryButton
              label="View All Projects"
              onClick={() => nav("/projects")}
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* Existing cards (secondary navigation) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Card
          title="Proofmint Demo →"
          to="/demo"
          blurb="Walkthrough, screenshots, deployment notes, and verification links."
        />
        <Card
          title="Projects →"
          to="/projects"
          blurb="Solidity + Hardhat, Solana/Anchor, and UI components."
        />
      </section>
    </main>
  );
}
