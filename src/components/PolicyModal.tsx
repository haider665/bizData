import { useState } from "react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms";
}

export default function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  if (!isOpen) return null;

  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-4xl max-h-[80vh] rounded-2xl bg-white shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {isPrivacy ? <PrivacyContent /> : <TermsContent />}
        </div>
      </div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="prose prose-sm max-w-none">
      <p className="text-gray-600 mb-4">
        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
      </p>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h3>
      <p className="text-gray-600 mb-4">
        We collect information you provide directly to us, such as when you create an account, 
        use our services, or contact us for support. This may include your name, email address, 
        company information, and usage data.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
      <p className="text-gray-600 mb-4">
        We use the information we collect to provide, maintain, and improve our services, 
        process transactions, send you technical notices and support messages, and communicate 
        with you about products, services, and promotional offers.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Sharing</h3>
      <p className="text-gray-600 mb-4">
        We do not sell, trade, or otherwise transfer your personal information to third parties 
        without your consent, except as described in this policy. We may share your information 
        with trusted service providers who assist us in operating our services.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h3>
      <p className="text-gray-600 mb-4">
        We implement appropriate security measures to protect your personal information against 
        unauthorized access, alteration, disclosure, or destruction. However, no method of 
        transmission over the internet is 100% secure.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
      <p className="text-gray-600">
        If you have any questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:privacy@bizdata.app" className="text-primary-600 hover:text-primary-700">
          privacy@bizdata.app
        </a>
      </p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="prose prose-sm max-w-none">
      <p className="text-gray-600 mb-4">
        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
      </p>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Acceptance of Terms</h3>
      <p className="text-gray-600 mb-4">
        By accessing and using BizData's services, you accept and agree to be bound by the 
        terms and provision of this agreement. If you do not agree to abide by the above, 
        please do not use this service.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">Use License</h3>
      <p className="text-gray-600 mb-4">
        Permission is granted to temporarily use BizData's services for personal, 
        non-commercial transitory viewing only. This is the grant of a license, 
        not a transfer of title, and under this license you may not modify or copy the materials.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">Disclaimer</h3>
      <p className="text-gray-600 mb-4">
        The materials on BizData's services are provided on an 'as is' basis. BizData makes 
        no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
        including without limitation, implied warranties or conditions of merchantability, 
        fitness for a particular purpose, or non-infringement of intellectual property.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitations</h3>
      <p className="text-gray-600 mb-4">
        In no event shall BizData or its suppliers be liable for any damages (including, 
        without limitation, damages for loss of data or profit, or due to business interruption) 
        arising out of the use or inability to use BizData's services.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
      <p className="text-gray-600 mb-4">
        These terms and conditions are governed by and construed in accordance with the laws 
        of the United States and you irrevocably submit to the exclusive jurisdiction of the 
        courts in that state or location.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
      <p className="text-gray-600">
        If you have any questions about these Terms of Service, please contact us at{" "}
        <a href="mailto:legal@bizdata.app" className="text-primary-600 hover:text-primary-700">
          legal@bizdata.app
        </a>
      </p>
    </div>
  );
}