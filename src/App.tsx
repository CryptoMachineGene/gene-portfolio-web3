import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen text-white flex flex-col relative overflow-hidden bg-[#0b0c10]">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute top-10 right-[-120px] h-[620px] w-[620px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-200px] left-1/3 h-[680px] w-[680px] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/55 backdrop-blur-md border-b border-yellow-400/20 px-6 py-3 flex items-center justify-between">
          <NavLink
              to="/"
              className="text-lg font-semibold text-yellow-400 hover:text-yellow-300 transition"
            >
              Eugene McGrath
          </NavLink>

          <div className="flex gap-6 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/resume", label: "Resume" },
              { to: "/proofmint", label: "Proofmint" },
              { to: "/projects", label: "Projects" },
              { to: "/blog", label: "Blog" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-yellow-300 font-semibold"
                      : "text-gray-300 hover:text-yellow-300"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>

      {/* === Page Content === */}
      <main className="flex-1 p-6 pt-20">
        {/* top padding compensates for fixed nav */}
        <Outlet />
      </main>

      {/* === Footer === */}
      <footer className="w-full text-center py-4 border-t border-yellow-400/20 text-xs text-gray-400">
        © {new Date().getFullYear()} Eugene McGrath — Blockchain Developer
      </footer>
      </div>
    </div>     
  );
}
