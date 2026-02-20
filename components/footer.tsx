export default function Footer() {
  return (
    <footer className="w-full relative">
      <div className="absolute inset-x-0 top-0 h-px border-t border-dashed border-white/20" />

      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <p className="text-sm text-gray-400 tracking-wide">
          © {new Date().getFullYear()}{" "}
          Powered by{" "}
          <a
            href="https://viet.gay"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-medium"
          >
            <span className="after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full">
              VietGay
            </span>
          </a>
          <span className="text-gray-500"> · All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}