import React from "react";

export default function Privacy() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-xl">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Data Protection Policy</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              We are committed to safeguarding your privacy. This policy explains how we collect, use, and protect your personal information to ensure a secure and transparent experience while using our platform.
            </p>
            <p>
              Your data is handled with care, and we adhere to applicable data protection laws to maintain trust and compliance. This policy applies to all users of our services, whether accessing our platform via web or mobile applications.
            </p>
            <p>
              We regularly review and update our practices to align with industry standards and regulatory requirements, ensuring your information remains secure.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              Collection of Personal Information
            </h3>
            <ul className="list list-bullets">
              <li>
                We collect only the information necessary to provide our services, such as your name, email address, and account preferences.
              </li>
              <li>
                Data is gathered through user interactions, such as form submissions, account creation, or platform usage, and is stored securely using encryption.
              </li>
              <li>
                Optional information, like demographic details, may be collected to enhance your experience but is not mandatory.
              </li>
            </ul>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              Purpose of Data Collection and Processing
            </h3>
            <ul className="uk-list uk-list-decimal uk-margin-medium@m">
              <li>
                To deliver personalized services, including tailored content and platform functionality based on your preferences.
              </li>
              <li>
                To improve our platform through analytics, helping us understand usage patterns and optimize user experience.
              </li>
              <li>
                To communicate with you regarding updates, support, or promotional offers, with the option to opt out at any time.
              </li>
            </ul>
            <p>
              Your data is never shared with third parties without your explicit consent, except as required by law or to fulfill essential platform operations, such as payment processing or hosting services. We ensure all partners comply with strict data protection standards.
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