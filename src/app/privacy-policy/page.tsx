export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary-800 pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80">
              How we collect, use, and protect your personal information
            </p>
            <p className="text-sm text-white/50 mt-3">Last updated: April 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-white/90 font-inter lg:px-6">
              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary-300/50 text-2xl font-light">01.</span> Who We Are
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
                  <p><strong className="text-white font-medium mr-2">1.1</strong> AattamNirvana ("we," "us," or "our") is a wellness and coaching services provider. Our website is <a href="https://www.aattamnirvana.com" className="text-primary-300 hover:text-white transition-colors underline decoration-primary-300/30 underline-offset-4">www.aattamnirvana.com</a>.</p>
                  <p><strong className="text-white font-medium mr-2">1.2</strong> We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                  <p><strong className="text-white font-medium mr-2">1.3</strong> For any questions about this policy, please contact us at <a href="mailto:connect@aattamnirvana.com" className="text-primary-300 hover:text-white transition-colors underline decoration-primary-300/30 underline-offset-4">connect@aattamnirvana.com</a>.</p>
                </div>
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary-300/50 text-2xl font-light">02.</span> Information We Collect
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
                  <p><strong className="text-white font-medium mr-2">2.1</strong> We may collect the following categories of personal information:</p>
                  <ul className="list-disc pl-8 space-y-2 marker:text-primary-400">
                    <li><strong className="text-white font-medium">Identity Data:</strong> first name, last name</li>
                    <li><strong className="text-white font-medium">Contact Data:</strong> email address, phone number</li>
                    <li><strong className="text-white font-medium">Transaction Data:</strong> details about payments and services purchased</li>
                    <li><strong className="text-white font-medium">Technical Data:</strong> IP address, browser type and version, time zone, browser plug-in types, operating system and platform</li>
                    <li><strong className="text-white font-medium">Usage Data:</strong> information about how you use our website and services</li>
                    <li><strong className="text-white font-medium">Marketing Data:</strong> your preferences in receiving marketing from us</li>
                    <li><strong className="text-white font-medium">Session Data:</strong> notes or information shared during coaching sessions (kept strictly confidential)</li>
                  </ul>
                  <p><strong className="text-white font-medium mr-2">2.2</strong> We do not collect any Special Categories of Personal Data (such as racial or ethnic origin, political opinions, religious beliefs, health data, or sexual orientation) unless you voluntarily share this within the context of your coaching sessions, where it is treated with the utmost confidentiality.</p>
                </div>
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary-300/50 text-2xl font-light">03.</span> How We Collect Your Information
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
                  <p><strong className="text-white font-medium mr-2">3.1</strong> We collect information through the following means:</p>
                  <ul className="list-disc pl-8 space-y-2 marker:text-primary-400">
                    <li><strong className="text-white font-medium">Direct interactions:</strong> when you fill in our contact or booking forms, book a Free Clarity Call, or correspond with us by email</li>
                    <li><strong className="text-white font-medium">Automated technologies:</strong> cookies and similar tracking technologies as you interact with our website</li>
                    <li><strong className="text-white font-medium">Third parties:</strong> analytics providers, payment processors, and booking platforms</li>
                  </ul>
                  <p><strong className="text-white font-medium mr-2">3.2</strong> Our website may use cookies to enhance your experience. You may refuse cookies via your browser settings, though this may affect certain functionality.</p>
                </div>
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary-300/50 text-2xl font-light">04.</span> How We Use Your Information
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
                  <p><strong className="text-white font-medium mr-2">4.1</strong> We use your personal data only where the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                  <ul className="list-disc pl-8 space-y-2 marker:text-primary-400">
                    <li>To register you as a new client and manage your account</li>
                    <li>To deliver and manage our coaching services</li>
                    <li>To process and collect payment</li>
                    <li>To manage our relationship with you, including notifying you of changes to our terms or services</li>
                    <li>To send you relevant information, newsletters, or promotional content (where you have opted in)</li>
                    <li>To administer and protect our business and website</li>
                    <li>To use data analytics to improve our website, services, and marketing</li>
                  </ul>
                  <p><strong className="text-white font-medium mr-2">4.2</strong> We will only send you marketing communications if you have opted in. You may opt out at any time by contacting us or clicking the unsubscribe link in any marketing email.</p>
                </div>
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary-300/50 text-2xl font-light">05.</span> Legal Basis for Processing
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
                  <p><strong className="text-white font-medium mr-2">5.1</strong> Under UK GDPR, we process your personal data on the following legal bases:</p>
                  <ul className="list-disc pl-8 space-y-2 marker:text-primary-400">
                    <li><strong className="text-white font-medium">Contract:</strong> where processing is necessary to perform our contract with you</li>
                    <li><strong className="text-white font-medium">Legal obligation:</strong> where processing is required by law</li>
                    <li><strong className="text-white font-medium">Legitimate interests:</strong> where processing is necessary for our legitimate business interests (e.g., fraud prevention, improving services)</li>
                    <li><strong className="text-white font-medium">Consent:</strong> where you have given clear consent for us to process your data for a specific purpose (e.g., marketing)</li>
                  </ul>
                </div>
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary-300/50 text-2xl font-light">06.</span> Sharing Your Information
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
                  <p><strong className="text-white font-medium mr-2">6.1</strong> We do not sell, rent, or trade your personal information to third parties.</p>
                  <p><strong className="text-white font-medium mr-2">6.2</strong> We may share your data with trusted third-party service providers who assist us in operating our website and delivering our services, including:</p>
                  <ul className="list-disc pl-8 space-y-2 marker:text-primary-400">
                    <li>Payment processors (e.g., Stripe, PayPal)</li>
                    <li>Email marketing platforms</li>
                    <li>Booking and scheduling tools</li>
                    <li>Cloud storage and hosting providers</li>
                    <li>Analytics services (e.g., Google Analytics)</li>
                  </ul>
                  <p><strong className="text-white font-medium mr-2">6.3</strong> All third-party providers are required to respect the security of your personal data and to treat it in accordance with the law. We only permit them to process your personal data for specified purposes and in accordance with our instructions.</p>
                  <p><strong className="text-white font-medium mr-2">6.4</strong> We may also disclose your personal data to comply with any legal obligation or to protect the rights, property, or safety of AattamNirvana, our clients, or others.</p>
                </div>
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary-300/50 text-2xl font-light">07.</span> Data Retention
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
                  <p><strong className="text-white font-medium mr-2">7.1</strong> We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                  <p><strong className="text-white font-medium mr-2">7.2</strong> Client session records are retained for a minimum of 7 years in compliance with applicable professional standards and UK law.</p>
                  <p><strong className="text-white font-medium mr-2">7.3</strong> Where you have opted in to marketing, we retain your contact details until you opt out or request deletion.</p>
                </div>
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary-300/50 text-2xl font-light">08.</span> Your Rights
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
                  <p><strong className="text-white font-medium mr-2">8.1</strong> Under UK GDPR, you have the following rights regarding your personal data:</p>
                  <ul className="list-disc pl-8 space-y-2 marker:text-primary-400">
                    <li><strong className="text-white font-medium">Right to access:</strong> request a copy of the personal data we hold about you</li>
                    <li><strong className="text-white font-medium">Right to rectification:</strong> request correction of inaccurate or incomplete data</li>
                    <li><strong className="text-white font-medium">Right to erasure:</strong> request deletion of your personal data in certain circumstances</li>
                    <li><strong className="text-white font-medium">Right to restrict processing:</strong> request that we restrict the processing of your data</li>
                    <li><strong className="text-white font-medium">Right to data portability:</strong> request transfer of your data to you or a third party</li>
                    <li><strong className="text-white font-medium">Right to object:</strong> object to the processing of your personal data in certain circumstances</li>
                    <li><strong className="text-white font-medium">Right to withdraw consent:</strong> where we rely on consent, withdraw it at any time</li>
                  </ul>
                  <p><strong className="text-white font-medium mr-2">8.2</strong> To exercise any of these rights, please contact us at <a href="mailto:connect@aattamnirvana.com" className="text-primary-300 hover:text-white transition-colors underline decoration-primary-300/30 underline-offset-4">connect@aattamnirvana.com</a>. We will respond within 30 days.</p>
                  <p><strong className="text-white font-medium mr-2">8.3</strong> You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors underline decoration-primary-300/30 underline-offset-4">ico.org.uk</a>.</p>
                </div>
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary-300/50 text-2xl font-light">09.</span> Data Security
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
                  <p><strong className="text-white font-medium mr-2">9.1</strong> We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed in an unauthorised way.</p>
                  <p><strong className="text-white font-medium mr-2">9.2</strong> We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
                  <p><strong className="text-white font-medium mr-2">9.3</strong> Despite our safeguards, no data transmission over the internet is completely secure. While we do our best to protect your data, we cannot guarantee the security of information transmitted to our website.</p>
                </div>
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary-300/50 text-2xl font-light">10.</span> Changes to This Policy
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/80 font-light">
                  <p><strong className="text-white font-medium mr-2">10.1</strong> We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                  <p><strong className="text-white font-medium mr-2">10.2</strong> We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
                </div>
              </section>

              <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <h2 className="text-2xl font-poppins font-semibold text-white mb-4">Have Questions?</h2>
                <p className="text-white/80 font-light mb-6 hidden md:block">
                  If you have any queries or concerns regarding our Privacy Policy or how your personal data is handled, feel free to reach out to us at any time.
                </p>
                <a href="mailto:connect@aattamnirvana.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-900 rounded-full font-medium hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300 mx-auto w-max">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  connect@aattamnirvana.com
                </a>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}
