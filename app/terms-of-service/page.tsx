export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 text-gray-800 p-8 md:p-16 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">Terms and Conditions</h1>
        <p className="text-sm leading-[22px] text-gray-700">
          <span className="font-bold">Effective Date:</span> December 20, 2024{' '}
          <br />
          <span className="font-bold">Last Updated:</span> December 20, 2024
        </p>

        <p>
          Welcome to <span className="font-semibold">TouchTap Adventure!</span>{' '}
          These Terms and Conditions govern your access and use of our website (
          <a
            href="https://www.touchtapgame.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://www.touchtapgame.com
          </a>
          ) and mobile application. By using our services, you agree to comply
          with these terms. If you do not agree, please do not use our services.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using TouchTap Adventure, you agree
            to be bound by these Terms and Conditions. These terms apply to all
            users, including parents or guardians accessing the app on behalf of
            children.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Use of Services</h2>
          <p>
            <span className="font-semibold">Eligibility:</span> TouchTap
            Adventure is designed for children aged 4 to 12. Parents or
            guardians must supervise app usage and ensure compliance with these
            terms.
          </p>
          <p>
            <span className="font-semibold">Educational Purpose:</span> The app
            and website are for educational and recreational purposes only and
            are not intended to replace formal education or parental
            involvement.
          </p>
          <p>
            <span className="font-semibold">License:</span> We grant you a
            limited, non-exclusive, non-transferable license to use our app and
            website solely for personal, non-commercial purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Prohibited Activities</h2>
          <ul className="list-disc list-inside">
            <li>
              Reverse engineer, decompile, or modify any part of the app or
              website.
            </li>
            <li>
              Use the services for illegal activities or to harm, harass, or
              exploit others.
            </li>
            <li>
              Access the app or website through unauthorized means or automate
              usage via bots, scripts, or other software.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of TouchTap Adventure,
            including but not limited to graphics, logos, and text, are the
            property of TouchTap Adventure and protected by copyright and
            trademark laws. You may not copy, distribute, or create derivative
            works of any content without our explicit written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Payment and Purchases</h2>
          <p>
            <span className="font-semibold">In-App Purchases:</span> The app may
            offer optional in-app purchases to enhance gameplay. By making a
            purchase, you agree to the terms of your platform's payment service
            (e.g., Apple App Store).
          </p>
          <p>
            <span className="font-semibold">Refund Policy:</span> All purchases
            are final and non-refundable unless required by applicable law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
          <p>
            TouchTap Adventure is provided "as is" without warranties of any
            kind, either express or implied. We are not liable for any indirect,
            incidental, or consequential damages arising from the use or
            inability to use the app or website. Parents or guardians are solely
            responsible for supervising children's use of the app and website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            7. Third-Party Links and Services
          </h2>
          <p>
            Our app and website may contain links to third-party websites or
            services. We are not responsible for the content, privacy policies,
            or practices of these third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the app
            or website at any time, without notice, for any violation of these
            Terms and Conditions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            9. Updates and Modifications
          </h2>
          <p>
            We may update these Terms and Conditions from time to time. Changes
            will be posted on this page with the updated effective date. By
            continuing to use our services, you accept any changes to these
            terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">10. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in
            accordance with the laws of [Your Country or State], without regard
            to its conflict of law provisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">11. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding these Terms and
            Conditions, please contact us:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Email:{' '}
              <a
                target="_blank"
                href="mailto:support@touchtapgame.com"
                className="text-blue-500 underline"
              >
                support@touchtapgame.com
              </a>
            </li>
            <li>
              Website:{' '}
              <a
                target="_blank"
                href="https://www.touchtapgame.com"
                className="text-blue-500 underline"
              >
                touchtapgame.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
