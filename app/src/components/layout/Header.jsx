import { FaMoon } from "react-icons/fa";

import Container from "./Container";

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            SomeDay
          </h1>

          <button
            className="rounded-lg p-2 transition hover:bg-slate-100"
            aria-label="Toggle theme"
          >
            <FaMoon size={18} />
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;