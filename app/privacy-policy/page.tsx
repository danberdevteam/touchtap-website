export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 text-gray-800 p-8 md:p-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        <p className="text-sm leading-[22px] text-gray-700">
          <span className="font-bold">Effective Date:</span> December 20, 2024{' '}
          <br />
          <span className="font-bold">Last Updated:</span> December 20, 2024
        </p>

        <p>
          Thank you for choosing{' '}
          <span className="font-semibold">TouchTap Adventure</span>! Your
          privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information while using our website and
          mobile application.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-semibold">Personal Information:</span> When
              you contact us via the contact form or email (
              <a
                target="_blank"
                href="mailto:support@touchtapgame.com"
                className="text-blue-500 underline"
              >
                support@touchtapgame.com
              </a>
              ), we may collect your name, email address, and message content.
            </li>
            <li>
              <span className="font-semibold">Non-Personal Information:</span>{' '}
              We collect data such as device type, operating system, gameplay
              statistics, and other analytics to improve user experience.
            </li>
            <li>
              <span className="font-semibold">
                Cookies and Tracking Technologies:
              </span>{' '}
              Our website may use cookies to enhance navigation and personalize
              content.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside">
            <li>
              To provide and improve our services, games, and website
              functionality.
            </li>
            <li>
              To communicate with you about updates, support, or inquiries.
            </li>
            <li>
              To monitor gameplay and ensure a fun, safe, and educational
              experience.
            </li>
            <li>
              To analyze and optimize the performance of our website and app.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            3. Data Sharing and Disclosure
          </h2>
          <p>
            We do not sell, trade, or share your personal information with third
            parties except in the following cases:
          </p>
          <ul className="list-disc list-inside">
            <li>When required by law or legal processes.</li>
            <li>
              To protect the rights, safety, and security of our users and
              services.
            </li>
            <li>
              With trusted service providers who assist us in operating our
              website and application (e.g., hosting or analytics tools).
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Children's Privacy</h2>
          <p>
            TouchTap Adventure is designed for children aged 4 to 12 years old.
            We comply with applicable laws and regulations concerning children's
            privacy, such as COPPA (Children's Online Privacy Protection Act).
          </p>
          <ul className="list-disc list-inside">
            <li>
              We do not knowingly collect personal information from children
              under 13 without parental consent.
            </li>
            <li>
              Parents or guardians can contact us at{' '}
              <a
                target="_blank"
                href="mailto:support@touchtapgame.com"
                className="text-blue-500 underline"
              >
                support@touchtapgame.com
              </a>{' '}
              to request the deletion of their child’s data.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Data Security</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the internet or electronic
            storage is completely secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. External Links</h2>
          <p>
            Our website or app may contain links to external websites. We are
            not responsible for the privacy practices of these websites and
            encourage you to read their privacy policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. User Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of receiving marketing communications.</li>
            <li>Withdraw consent where applicable.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{' '}
            <a
              target="_blank"
              href="mailto:support@touchtapgame.com"
              className="text-blue-500 underline"
            >
              support@touchtapgame.com
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with the updated effective date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <span className="text-bold">Email: </span>
              <a
                target="_blank"
                href="mailto:support@touchtapgame.com"
                className="text-blue-500 underline"
              >
                support@touchtapgame.com
              </a>
            </li>
            <li>
              <span className="text-bold">Website: </span>
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
