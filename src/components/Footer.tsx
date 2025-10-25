export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white/60">
      <div className="section py-8 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary-600"></span>
            <span className="font-medium text-gray-900">BizData</span>
          </div>
          <nav className="flex flex-wrap items-center gap-4">
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
            <a href="#blog" className="hover:text-gray-900">
              Blog
            </a>
            <a href="#pricing" className="hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} BizData, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}