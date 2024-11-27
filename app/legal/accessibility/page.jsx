import Link from "next/link";

export const metadata = {
  title: "Accessibility Policy - Best Websites Daytona",
  description:
    "Best Websites Daytona is committed to providing an inclusive web experience for all users. Learn more about our accessibility initiatives.",
};

export default function AccessibilityPolicy() {
  return (
    <>
      <main>
        <div className="max-w-5xl mx-auto py-8 px-4 md:py-32 md:px-8 text-foreground">
          <h1 className="text-4xl font-bold mb-4">Accessibility Policy</h1>

          <p className="text-sm text-muted-foreground mb-8">
            Last updated: November 25, 2024
          </p>

          <p className="mb-6">
            At Best Websites Daytona, we are committed to providing a website
            that is accessible to the widest possible audience, regardless of
            technology or ability. We actively work to ensure that our website
            adheres to best practices and standards as defined by the World Wide
            Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG)
            2.1.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Our Accessibility Commitment
          </h2>
          <p className="mb-6">
            We believe that every user should have equal access to the content
            and features on our website. This includes designing and developing
            with accessibility in mind, such as:
          </p>

          <ul className="list-disc list-inside mb-6 space-y-4">
            <li>
              Providing text alternatives for non-text content so it can be
              converted into other forms, such as large print, braille, speech,
              or symbols.
            </li>
            <li>
              Ensuring that our website’s content is readable and understandable
              by people with disabilities, including those using screen readers.
            </li>
            <li>
              Making the website navigable by keyboard, and ensuring
              compatibility with other assistive technologies.
            </li>
            <li>
              Adapting content to be presented in different ways without losing
              information or structure.
            </li>
            <li>
              Ensuring the site is robust and compatible with current and future
              assistive technologies.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Accessibility Standards
          </h2>
          <p className="mb-6">
            Best Websites Daytona follows the Web Content Accessibility
            Guidelines (WCAG) 2.1, Levels A and AA, to ensure our website is
            accessible to everyone. We continually work to improve and maintain
            these standards.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Ongoing Accessibility Efforts
          </h2>
          <p className="mb-6">
            We regularly evaluate our website’s accessibility through audits,
            user testing, and developer collaboration to ensure our site meets
            the latest accessibility standards. This includes:
          </p>

          <ul className="list-disc list-inside mb-6 space-y-4">
            <li>
              Conducting regular audits to monitor and address any potential
              accessibility issues.
            </li>
            <li>
              Utilizing automated and manual testing tools to ensure
              accessibility for users with disabilities.
            </li>
            <li>
              Training our web development team on accessibility best practices.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Third-Party Content</h2>
          <p className="mb-6">
            While we strive to ensure that all content on our website is
            accessible, we cannot guarantee the accessibility of third-party
            content. We encourage users to reach out directly to third parties
            if they encounter accessibility barriers with their content.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            How to Report an Accessibility Issue
          </h2>
          <p className="mb-6">
            We are always working to improve the accessibility of our website.
            If you encounter any accessibility issues while using Best Websites
            Daytona&apos;s website, we encourage you to let us know so we can
            address the issue as quickly as possible.
          </p>

          <p className="mb-6">
            To report an accessibility issue, please contact us at:{" "}
            <Link
              href="mailto:info@bestwebsitesdaytona.com"
              className="text-primary hover:underline"
            >
              info@bestwebsitesdaytona.com
            </Link>
            .
          </p>

          <p className="mb-6">
            You can also visit our contact page{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline"
            >
              here
            </Link>{" "}
            to fill out a form, and we will address your concerns promptly.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Continuous Improvement
          </h2>
          <p className="mb-6">
            At Best Websites Daytona, we are committed to continuously improving
            the accessibility of our website. As technology evolves, we will
            strive to implement new strategies to make our digital content more
            inclusive and accessible for all users.
          </p>
        </div>
      </main>
    </>
  );
}
