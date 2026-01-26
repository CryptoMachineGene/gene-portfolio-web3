import { Link } from "react-router-dom";

type Props = {
  /** You can pass a full YouTube URL or just the ID */
  videoId?: string;
  /** Optional external link label override */
  externalLabel?: string;
};

export default function ProofmintDemo({
  videoId = "CatHeV8tclI",
  externalLabel = "Watch on YouTube",
}: Props) {
  const isFullUrl = videoId.includes("http");
  const embedSrc = isFullUrl
    ? videoId.replace("watch?v=", "embed/")
    : `https://www.youtube.com/embed/${videoId}`;
  const watchUrl = isFullUrl
    ? videoId
    : `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="container-nwc py-10">
      {/* Top bar: Back + external link */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/resume"
          className="inline-flex w-max items-center gap-2 rounded-2xl border border-yellow-400/60 px-4 py-2
                     text-sm text-yellow-200 transition hover:bg-yellow-400 hover:text-black
                     focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
          aria-label="Back to Resume"
        >
          ← Back to Resume
        </Link>

        {/* Only show external button if a real video id/url is set */}
        {videoId !== "YOUR_VIDEO_ID_HERE" && (
          <a
            href={watchUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-max items-center gap-2 rounded-2xl border border-white/15 px-4 py-2 text-sm
                       text-neutral-200 transition hover:bg-white hover:text-black
                       focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Open video on YouTube"
          >
            ▶︎ {externalLabel}
          </a>
        )}
      </div>     

      {/* Title area */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold tracking-tight !text-neutral-100">
          Proofmint <span className="text-yellow-300/90">— Demo</span>
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          A quick walkthrough of the buy flow, NFT receipt, and tests (Hardhat + Foundry).
        </p>
      </div>

      {/* Video frame with subtle gradient border */}
      <div
        className="relative rounded-2xl bg-gradient-to-r from-[#f4d03f33] via-[#f39c1233] to-[#f4d03f33] p-[1px]
                   shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
      >
        <div className="relative rounded-2xl bg-black/40">
          {/* 16:9 responsive wrapper (no aspect-ratio plugin required) */}
          <div className="relative w-full overflow-hidden rounded-2xl pt-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full rounded-2xl"
              src={`${embedSrc}?rel=0&modestbranding=1`}
              title="Proofmint Demo — Eugene McGrath"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Small badge row */}
      <ul className="mt-4 flex flex-wrap items-center gap-2 text-[11px]">
        <li className="rounded-full border border-white/10 px-2 py-1 text-neutral-300">Solidity</li>
        <li className="rounded-full border border-white/10 px-2 py-1 text-neutral-300">Hardhat</li>
        <li className="rounded-full border border-white/10 px-2 py-1 text-neutral-300">Foundry</li>
        <li className="rounded-full border border-white/10 px-2 py-1 text-neutral-300">React</li>
        <li className="rounded-full border border-white/10 px-2 py-1 text-neutral-300">TypeScript</li>
        <li className="rounded-full border border-white/10 px-2 py-1 text-neutral-300">Sepolia</li>
      </ul>
    </div>
  );
}
