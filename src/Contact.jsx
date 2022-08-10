import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/3cc71cd9-5ce6-43a3-978e-c9334af91ae8"
        className="max-w-[1000px] w-full flex flex-col p-8"
      >
        <div className="text-gray-300 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or shoot me an email: mostafa.bsh@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="p-2 bg-[#ccd6f6]"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className="p-2 bg-[#ccd6f6]"
        ></textarea>
        <button className="border-2 my-8 px-4 py-3 mx-auto border-white text-white hover:bg-pink-600 hover:border-pink-600">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
