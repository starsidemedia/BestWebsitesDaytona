export const metadata = {
  title: "Disclaimer - Best Websites Daytona",
  description:
    "Best Websites Daytona provides this website as a service. Read our disclaimer to understand the limitations of the information provided.",
};

export default function Disclaimer() {
  return (
    <section className="py-16 bg-white text-center px-4">
      <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>
      <div className="max-w-2xl mx-auto text-left">
        <p className="mb-4">
          The information provided on this website is for general informational
          purposes only. While we strive to keep the information accurate and
          up-to-date, Best Websites Daytona makes no representations or
          warranties of any kind, express or implied, about the completeness,
          accuracy, reliability, suitability, or availability with respect to
          the website or the information, products, services, or related
          graphics contained on the website for any purpose. Any reliance you
          place on such information is therefore strictly at your own risk.
        </p>

        <p className="mb-4">
          Through this website, you may be able to link to other websites that
          are not under the control of Best Websites Daytona. We have no control
          over the nature, content, and availability of those sites. The
          inclusion of any links does not necessarily imply a recommendation or
          endorse the views expressed within them.
        </p>

        <p className="mb-4">
          Every effort is made to keep the website up and running smoothly.
          However, Best Websites Daytona takes no responsibility for, and will
          not be liable for, the website being temporarily unavailable due to
          technical issues beyond our control.
        </p>

        <p className="mb-4">
          The services provided by Best Websites Daytona are intended to support
          and enhance your business efforts. However, we cannot guarantee
          specific results as outcomes are dependent on numerous factors beyond
          our control, including but not limited to market conditions,
          competition, and your implementation of the provided services.
        </p>

        <p className="mb-4">
          By using our website and services, you acknowledge and agree to this
          disclaimer and the terms set forth herein.
        </p>

        <p className="mb-4">
          For more detailed information, please contact us directly at{" "}
          <a
            href="mailto:info@bestwebsitesdaytona.com"
            className="text-primary hover:underline"
          >
            info@bestwebsitesdaytona.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
