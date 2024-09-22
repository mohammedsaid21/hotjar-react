import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground hover:underline">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-foreground hover:underline">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-muted-foreground hover:text-foreground hover:underline">Features</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground hover:underline">Pricing</Link></li>
              <li><Link href="/integrations" className="text-muted-foreground hover:text-foreground hover:underline">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground hover:underline">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground hover:text-foreground hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Loomli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}