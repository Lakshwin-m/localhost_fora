const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-3xl font-light tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          We respect your privacy and are committed to protecting your personal
          data.
        </p>
        <p className="text-sm text-muted-foreground mt-6">
          Last updated: July 2025
        </p>
      </div>

      {/* Content */}
      <div className="space-y-12">
        {/* Information We Collect */}
        <section>
          <h2 className="text-xl font-medium mb-6">Information We Collect</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-foreground font-medium mb-2">
                Personal Information
              </h3>
              <p>
                We collect information you provide directly, such as your name,
                email address, and any other details you share when creating an
                account or contacting us.
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Usage Data</h3>
              <p>
                We automatically collect information about how you interact with
                our service, including pages visited, features used, and time
                spent on our platform.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-xl font-medium mb-6">
            How We Use Your Information
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-3">
            <p>• Provide, maintain, and improve our services</p>
            <p>
              • Communicate with you about updates, security alerts, and support
            </p>
            <p>• Analyze usage patterns to enhance user experience</p>
            <p>• Comply with legal obligations and protect our rights</p>
          </div>
        </section>

        {/* Information Sharing */}
        <section>
          <h2 className="text-xl font-medium mb-6">Information Sharing</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <div className="space-y-3 pl-4">
              <p>
                • With trusted service providers who help us operate our service
              </p>
              <p>• When required by law or to protect our rights and safety</p>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-xl font-medium mb-6">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement industry-standard security measures to protect your
            personal information against unauthorized access, alteration,
            disclosure, or destruction. This includes encryption, secure
            servers, and regular security audits.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-xl font-medium mb-6">Your Rights</h2>
          <div className="text-muted-foreground leading-relaxed space-y-3">
            <p>• Request a copy of your personal data</p>
            <p>• Update or correct your information</p>
            <p>• Request deletion of your account and data</p>
            <p>• Unsubscribe from marketing communications</p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-medium mb-6">Contact</h2>
          <div className="text-muted-foreground leading-relaxed space-y-2">
            <p>
              If you have questions about this privacy policy, contact us at:
            </p>
            <p>
              <a
                href="mailto:localhost.queries@gmail.com"
                className="text-blue-600 underline"
              >
                localhost.queries@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">
          This privacy policy may be updated from time to time. We will notify
          you of any significant changes by posting the new policy on this page.
        </p>
      </div>
    </div>
  );
};
export default Privacy;
