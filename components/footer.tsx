export default function Footer() {
    return (
      <footer className="mt-32 w-full border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300">Le Quoc Viet</span>. Powered by{" "}
            <a
              href="https://viet.gay"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              VietGay
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    );
  }