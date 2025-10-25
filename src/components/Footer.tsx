import { useState } from "react";
import PolicyModal from "./PolicyModal";

export default function Footer() {
  const [policyModal, setPolicyModal] = useState<{
    isOpen: boolean;
    type: "privacy" | "terms";
  }>({
    isOpen: false,
    type: "privacy"
  });

  const openPolicyModal = (type: "privacy" | "terms") => {
    setPolicyModal({ isOpen: true, type });
  };

  const closePolicyModal = () => {
    setPolicyModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <footer className="mt-16 bg-gray-50 border-t border-gray-200">
        <div className="section py-12">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Side - Brand & Contact */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
              {/* Brand */}
              <div className="flex flex-col gap-4 lg:max-w-[50rem]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-primary-600"></span>
                  <span className="font-semibold text-gray-900 text-lg">BizData</span>
                </div>
                <p className="text-sm text-gray-600">
                  AI-powered experience analytics that turn user behavior into actionable insights. 
                  We help businesses understand what their users do — and why — through intelligent 
                  data analysis and automated recommendations.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-gray-900 text-sm">Get in touch</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <a href="mailto:zaber.mohammad@bracu.ac.bd" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    zaber.mohammad@bracu.ac.bd
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +8801686047422
                  </a>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Don Chamber, Narayanganj</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} BizData. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => openPolicyModal("privacy")}
                  className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => openPolicyModal("terms")}
                  className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={closePolicyModal}
        type={policyModal.type}
      />
    </>
  );
}