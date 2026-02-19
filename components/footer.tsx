export default function Footer() {
    return (
        <footer className="mt-32 w-full text-center py-3 text-gray-500 border-t border-gray-200">
            <p>
                © {new Date().getFullYear()}{" "}
                <a target="_blank" href="https://prebuiltui.com?utm_source=ryan">
                    PrebuiltUI
                </a> • Distributed by {' '}
                <a target="_blank" href="https://themewagon.com">
                    ThemeWagon
                </a>
                . All rights reserved.
            </p>
        </footer>
    );
}