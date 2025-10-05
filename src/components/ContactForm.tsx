"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);

      // Add services array as comma-separated string
      formDataToSend.delete('services');
      formDataToSend.append('services', formData.services.join(', '));

      const response = await fetch("https://formspree.io/f/mqayldnv", {
        method: "POST",
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          services: [],
          budget: "",
          timeline: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({
      ...formData,
      services: options
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-3xl p-12 text-center border-2 border-green-200">
        <CheckCircle2 size={64} className="text-green-600 mx-auto mb-4" />
        <h3 className="text-3xl font-black text-gray-900 mb-4">Thank You!</h3>
        <p className="text-lg text-gray-700 mb-2">I'll review your information and get back to you within 24 hours.</p>
        <p className="text-gray-600">In the meantime, feel free to schedule a call directly:</p>
        <a
          href="https://calendly.com/kamooliphant/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all font-medium"
        >
          Schedule Call Now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-gray-200">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-upwork-green focus:outline-none transition-colors"
            placeholder="John Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-upwork-green focus:outline-none transition-colors"
            placeholder="john@company.com"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-upwork-green focus:outline-none transition-colors"
            placeholder="Your Company Inc."
          />
        </div>

        {/* Service Interest */}
        <div className="md:col-span-2">
          <label className="block text-sm font-bold text-gray-700 mb-3">
            Service Interest * <span className="text-xs font-normal text-gray-500">(Select all that apply)</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Content Strategy & Creation",
              "Email Marketing",
              "Digital Marketing Strategy",
              "AI & Innovation Solutions",
              "Not Sure - Need Consultation"
            ].map((service) => (
              <label key={service} className="flex items-center gap-3 p-4 rounded-xl border-2 border-brand-gray-200 hover:border-brand-green hover:bg-brand-gray-50 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={(e) => {
                    const newServices = e.target.checked
                      ? [...formData.services, service]
                      : formData.services.filter(s => s !== service);
                    setFormData({ ...formData, services: newServices });
                  }}
                  className="w-5 h-5 text-brand-green border-brand-gray-300 rounded focus:ring-brand-green focus:ring-2"
                />
                <span className="text-sm font-medium text-brand-navy">{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-2">
            Monthly Budget Range *
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors bg-white"
          >
            <option value="">Select budget range...</option>
            <option value="$750-$1,250">$750-$1,250 (Growth Starter)</option>
            <option value="$1,250-$1,750">$1,250-$1,750 (Business Accelerator)</option>
            <option value="$1,750+">$1,750+ (Premium Authority)</option>
            <option value="Custom">Custom / Need to Discuss</option>
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-sm font-bold text-gray-700 mb-2">
            Expected Start Timeline *
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors bg-white"
          >
            <option value="">Select timeline...</option>
            <option value="Immediately">Immediately (Within 1 week)</option>
            <option value="Within 2-4 weeks">Within 2-4 weeks</option>
            <option value="Within 1-2 months">Within 1-2 months</option>
            <option value="Just Exploring">Just Exploring Options</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
          Tell me about your goals and challenges
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
          placeholder="What marketing challenges are you facing? What results are you hoping to achieve?"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-gradient-to-r from-upwork-green to-emerald-600 text-white px-12 py-4 rounded-full hover:from-upwork-green-dark hover:to-emerald-700 transition-all hover:scale-105 text-lg font-bold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send size={20} />
            </>
          )}
        </button>
        <p className="text-sm text-gray-500 mt-4">
          I'll respond within 24 hours. Prefer to talk immediately?{" "}
          <a
            href="https://calendly.com/kamooliphant/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-semibold underline"
          >
            Schedule a call
          </a>
        </p>
      </div>
    </form>
  );
}
