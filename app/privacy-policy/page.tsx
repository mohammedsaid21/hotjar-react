export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Introduction</h2>
          <p>Welcome to Loomli&apos;s Privacy Policy. This policy describes how we collect, use, and handle your personal information when you use our services.</p>
          
          <h2>2. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
          
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.</p>
          
          <h2>4. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information in limited circumstances, such as with your consent or for legal reasons.</p>
          
          <h2>5. Your Rights and Choices</h2>
          <p>You have the right to access, correct, or delete your personal information. You can also opt out of certain data collection and use.</p>
          
          <h2>6. Security</h2>
          <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.</p>
          
          <h2>7. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          
          <h2>8. Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us at privacy@loom.li</p>
        </div>
      </main>
    </div>
  )
}