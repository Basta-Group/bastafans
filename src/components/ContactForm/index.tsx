import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-10 bg-gradient-to-r from-[#1E255A] to-[#324ED7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" backdrop-blur-sm rounded-2xl p-2 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left side content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                GET IN TOUCH
              </h2>
              <p className="text-base md:text-lg mb-6 opacity-90">
                We Help Our Partners Accelerate Business Development And
                Successfully Compete In The Global Gaming Market. We Offer A
                Profitable And Transparent System Of Cooperation With No
                Overpayments:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  No Setup Fee
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  No Monthly Minimum Fees
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  Pure Revenue Share Model
                </li>
              </ul>
              <button className="mt-6 px-6 py-2.5 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition-colors text-sm font-bold">
                FREE CONSULTATION
              </button>
            </div>

            {/* Right side form */}
            <div className="rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2563eb]/40 to-[#3b82f6]/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm text-sm"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2563eb]/40 to-[#3b82f6]/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm text-sm"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message Here"
                    rows={4}
                    className="w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2563eb]/40 to-[#3b82f6]/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm resize-none text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white py-3 px-5 rounded-3xl hover:from-[#3b82f6] hover:to-[#2563eb] transition-all duration-300 font-medium text-sm flex items-center justify-center space-x-2"
                >
                  <span>SUBMIT ENQUIRY</span>
                  <span className="text-lg">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
