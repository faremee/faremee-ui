// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-600 dark:text-gray-400">
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/about"><a>About</a></Link>
            </li>
            <li>
              <Link href="/contact"><a>Contact</a></Link>
            </li>
            <li>
              <Link href="/blog"><a>Blog</a></Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/terms"><a>Terms</a></Link>
            </li>
            <li>
              <Link href="/privacy"><a>Privacy</a></Link>
            </li>
            <li>
              <Link href="/faq"><a>FAQ</a></Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Email: support@faremee.com</li>
            <li>Phone: +1 234 567 890</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Social</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t pt-4 text-center text-gray-500 dark:text-gray-600">
        &copy; {new Date().getFullYear()} Faremee. All rights reserved.
      </div>
    </footer>
  );
}
