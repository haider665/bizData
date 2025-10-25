export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/70 backdrop-blur">
      <div className="section flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-primary-600"></span>
          <a href="#" className="font-semibold tracking-tight">
            BizData
          </a>
        </div>
        <nav className="hidden gap-6 text-sm text-gray-600 sm:flex">
          <a href="#features" className="hover:text-gray-900">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-900">
            Pricing
          </a>
          <a href="#about" className="hover:text-gray-900">
            About
          </a>
          <a href="#blog" className="hover:text-gray-900">
            Blog
          </a>
        </nav>
        <a className="btn btn-primary h-8 px-3 text-xs" href="#cta">
          Get Early Access
        </a>
      </div>
    </header>
  );
}