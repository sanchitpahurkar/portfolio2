import React from "react";

const ContactForm = () => {
  return (
    <section className="min-h-screen bg-[#f1f5f9] dark:bg-[#1a1a2e] flex flex-col items-center justify-center px-4 py-28">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-2">Get in touch</h1>
        <p className="text-gray-500 mb-6">
        Have something you'd like to build together?🚀 Whether it’s code, design, or collaboration — I'd love to hear from you!
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">Connect with me</h2>

        <form action="https://formspree.io/f/mnnvygpr" method="POST" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              className="flex-1 px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-600"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              className="flex-1 px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-600"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-600"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-600"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent resize-none focus:outline-none focus:border-gray-600"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-900 text-white dark:bg-[#00d4ff] dark:text-gray-800 px-6 py-2 rounded hover:bg-gray-800 transition duration-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
