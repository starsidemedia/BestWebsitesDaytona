import Link from "next/link";

export const metadata = {
  title: "Starside Media - Terms of Service",
  description:
    "Read the terms of service for Starside Media's web development and digital marketing services.",
  images: [
    {
      url: "https://starside.media/StarsideLogoBlackCut.png",
      width: 1200,
      height: 630,
      alt: "Starside Media Logo - Terms of Service",
    },
  ],
  url: "https://starside.media/terms-of-service",
};
export default function TermsOfService() {
  return (
    <>
      <main>
        <div className="max-w-5xl mx-auto py-8 px-4 md:py-32 md:px-8 text-foreground">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>

          <p className="text-sm text-muted-foreground mb-8">
            Last updated: August 27, 2024
          </p>

          <p className="mb-6">
            Please read these terms of service ("terms", "terms of service")
            carefully before using the Starside website (the "service") operated
            by Starside ("us", 'we", "our").
          </p>

          <h2 className="text-2xl font-semibold mb-4">Conditions of Use</h2>
          <p className="mb-6">
            We will provide their services to you, which are subject to the
            conditions stated below in this document. Every time you visit this
            website, use its services or make a purchase, you accept the
            following conditions. This is why we urge you to read them
            carefully.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-6">
            Before you continue using our website we advise you to read our
            privacy policy{" "}
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline"
            >
              here
            </Link>{" "}
            regarding our user data collection. It will help you better
            understand our practices.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Communications</h2>
          <p className="mb-6">
            The entire communication with us is electronic. Every time you send
            us an email or visit our website, you are going to be communicating
            with us. You hereby consent to receive communications from us. If
            you subscribe to the news on our website, you are going to receive
            regular emails from us. We will continue to communicate with you by
            posting news and notices on our website and by sending you emails.
            You also agree that all notices, disclosures, agreements, and other
            communications we provide to you electronically meet the legal
            requirements that such communications be in writing.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Applicable Law</h2>
          <p className="mb-6">
            By visiting this website, you agree that the laws of the state of
            Florida, without regard to principles of conflict laws, will govern
            these terms of service, or any dispute of any sort that might come
            between Starside and you, or its business partners and associates.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Disputes</h2>
          <p className="mb-6">
            Any dispute related in any way to your visit to this website or to
            products you purchase from us shall be arbitrated by state or
            federal court Florida and you consent to exclusive jurisdiction and
            venue of such courts.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Comments, Reviews, and Emails
          </h2>
          <p className="mb-6">
            Visitors may post content as long as it is not obscene, illegal,
            defamatory, threatening, infringing of intellectual property rights,
            invasive of privacy, or injurious in any other way to third parties.
            Content has to be free of software viruses, political campaign, and
            commercial solicitation.
          </p>
          <p className="mb-6">
            We reserve all rights (but not the obligation) to remove and/or edit
            such content. When you post your content, you grant Starside
            non-exclusive, royalty-free, and irrevocable right to use,
            reproduce, publish, modify such content throughout the world in any
            media.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            License and Site Access
          </h2>
          <p className="mb-6">
            We grant you a limited license to access and make personal use of
            this website. You are not allowed to download or modify it. This may
            be done only with written consent from us.
          </p>

          <h2 className="text-2xl font-semibold mb-4">User Account</h2>
          <p className="mb-6">
            If you are an owner of an account on this website, you are solely
            responsible for maintaining the confidentiality of your private user
            details (username and password). You are responsible for all
            activities that occur under your account or password.
          </p>
          <p className="mb-6">
            We reserve all rights to terminate accounts, edit or remove content,
            and cancel orders in their sole discretion.
          </p>

          <p className="mb-6">
            If you have any questions about these Terms of Service, you can
            contact us at{" "}
            <a
              href="mailto:seth@starside.media"
              className="text-primary hover:underline"
            >
              seth@starside.media
            </a>{" "}
            or visit our contact page{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline"
            >
              here
            </Link>
            .
          </p>
        </div>{" "}
      </main>
    </>
  );
}
