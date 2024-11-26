// app/legal/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Best Websites Daytona Legal Information",
  description:
    "Access Best Websites Daytona's legal information including our Cookie Policy, Disclaimer, Privacy Policy, and Terms of Service.",
  image: "https://bestwebsitesdaytona.com",
  url: "https://bestwebsitesdaytona.com/legal",
};

export default function Legal() {
  return (
    <>
      <main className="container mx-auto py-32 px-4 flex-column justify-center">
        <h1 className="text-3xl font-bold mb-8">Legal Information</h1>
        <ul className="list-disc pl-5">
          <li className="mb-4">
            <Link href="/legal/cookie-policy">
              <span className="text-primary hover:underline">
                Cookie Policy
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/legal/disclaimer">
              <span className="text-primary hover:underline">Disclaimer</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/legal/privacy-policy">
              <span className="text-primary hover:underline">
                Privacy Policy
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/legal/terms-of-service">
              <span className="text-primary hover:underline">
                Terms of Service
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/legal/accessibility">
              <span className="text-primary hover:underline">
                Accessibility
              </span>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
