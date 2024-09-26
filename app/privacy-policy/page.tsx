export default function PrivacyPolicy() {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

      <ol className="list-none space-y-8">
        <li>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">Welcome to Loomli&apos;s Privacy Policy. This policy describes how we collect, use, and handle your personal information when you use our services.</p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.</p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
          <p className="mb-4">We do not sell your personal information. We may share your information in limited circumstances, such as with your consent or for legal reasons.</p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
          <p className="mb-4">You have the right to access, correct, or delete your personal information. You can also opt out of certain data collection and use.</p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="mb-4">We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.</p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="mb-4">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">If you have any questions about this privacy policy, please contact us at privacy@loom.li</p>
        </li>
      </ol>
    </section>
  );
}