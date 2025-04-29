import React from "react";

export default function Terms() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-xl">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Service Agreement</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              This Service Agreement outlines the terms under which you may access and use our platform. By engaging with our services, you agree to comply with these conditions, ensuring a fair and secure experience for all users.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Service Limitations</h3>
            <p>
              Our platform is provided on an "as-is" basis. While we strive to maintain high-quality services, we cannot guarantee uninterrupted access or error-free functionality. Users are responsible for ensuring their use complies with applicable laws.
            </p>
            <p>
              We are not liable for any indirect damages arising from the use of our services, including loss of data or revenue.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Responsibility for Use</h3>
            <p>
              Users agree to use our services responsibly and refrain from activities that could harm the platform or other users. Any misuse may result in suspension or termination of access.
            </p>
            <p>
              We reserve the right to modify or discontinue services at any time without prior notice.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Intellectual Property</h3>
            <p>
              All content, including software, designs, and documentation, is owned by or licensed to us. Users may not reproduce, distribute, or create derivative works without explicit permission.
            </p>
            <p>
              User-generated content remains the property of the user, but we are granted a non-exclusive license to use it for platform operations.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">General Provisions</h3>
            <p>
              This agreement is governed by the laws of the jurisdiction in which our company is registered. Any disputes will be resolved through arbitration or in a court within that jurisdiction.
            </p>
            <p>
              We may update these terms periodically. Continued use of the platform constitutes acceptance of the revised terms.
            </p>
          </div>
          <div className="page-footer panel">
            <p className="fs-7 opacity-60 m-0">Last updated: 28 April, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}