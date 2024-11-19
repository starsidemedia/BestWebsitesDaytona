// app/legal/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Starside Legal Information",
  description:
    "Access Starside's legal information including our Cookie Policy, Disclaimer, Privacy Policy, and Terms of Service.",
  image: "https://starside.media",
  url: "https://starside.media/legal",
};

export default function Legal() {
  return (
    <>
      <main className="container mx-auto py-32 px-4 flex-column justify-center">
        <h1 className="text-3xl font-bold mb-8">Legal Information</h1>
        <ul className="list-disc pl-5">
          <li className="mb-4">
            <Link
              legacyBehavior
              href="/legal/cookie-policy"
            >
              <a className="text-primary hover:underline">Cookie Policy</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              legacyBehavior
              href="/legal/disclaimer"
            >
              <a className="text-primary hover:underline">Disclaimer</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              legacyBehavior
              href="/legal/privacy-policy"
            >
              <a className="text-primary hover:underline">Privacy Policy</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              legacyBehavior
              href="/legal/terms-of-service"
            >
              <a className="text-primary hover:underline">Terms of Service</a>
            </Link>
            <Link
              legacyBehavior
              href="/legal/accessibility"
            >
              <a className="text-primary hover:underline">Accessibility</a>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
