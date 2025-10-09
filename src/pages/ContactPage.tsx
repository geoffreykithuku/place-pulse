import { SEOHead } from "../hooks/useSEO";
import Button from "../components/ui/Button";

const ContactPage = () => {
  return (
    <div>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Spot A Crib for support, business inquiries, or feedback."
        keywords={["contact spot a crib", "support", "business inquiries"]}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl font-display font-bold mb-4">Contact Us</h1>
        <p className="text-neutral-600 mb-6">
          We're here to help. Reach out via phone, email, or use the contact
          form below.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 mb-8">
          <h2 className="text-xl font-semibold mb-4">Customer Support</h2>
          <p className="text-neutral-600 mb-2">Phone: +254-XXX-XXX-XXX</p>
          <p className="text-neutral-600 mb-2">WhatsApp: +254-XXX-XXX-XXX</p>
          <p className="text-neutral-600 mb-4">Email: support@platform.co.ke</p>
        </div>

        <form className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name"
              className="px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border rounded-md"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border rounded-md mb-4"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 py-2 border rounded-md mb-4 h-40"
          />
          <div className="text-right">
            <Button>Send Message</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
