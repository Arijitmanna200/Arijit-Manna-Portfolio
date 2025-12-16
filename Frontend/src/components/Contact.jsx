import React, { useState } from 'react'
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { Element } from "react-scroll";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/mail/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully 🚀");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Element name='Contact' id='Contact'>
      <div className="flex justify-center items-center w-11/12 m-auto flex-col">
        <div className="border border-cyan-200 bg-linear-to-r from-cyan-100 to-pink-100 rounded-3xl px-4 py-2 my-5">
          <h1 className="m-auto prof-color">Get In Touch</h1>
        </div>

        <div className="flex flex-col justify-center w-full items-center m-auto gap-2">
          <h1 className="text-3xl lg:text-5xl md:text-4xl prof-color">
            Let's Work Together
          </h1>
        </div>

        <div className="flex lg:flex-row md:flex-col flex-col justify-center items-center lg:w-10/12 w-11/12 m-auto gap-10 my-5">

          {/* LEFT */}
          <div className="lg:w-2/3 md:w-11/12 w-full flex flex-col bg-gray-900 text-gray-200 rounded-xl gap-10 p-5">
            <div className=" flex flex-row gap-3 p-2 rounded-xl bg-gray-900">
              <div className="group-hover:scale-105 rounded-xl flex justify-center items-center p-3 bg-linear-to-br from-blue-500 to-purple-500 transition duration-300 ease-in-out">
                <FiMessageSquare size={30} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-medium prof-color">Contact Information</h1>
                <h1 className="text-sm font-medium text-gray-400">Say Hello</h1>
              </div>
            </div>

            <div className=" flex flex-row gap-3 p-2 rounded-xl bg-gray-900 group hover:bg-gray-800 transition duration-300 ease-in-out">
              <div className="group-hover:scale-105 rounded-xl flex justify-center items-center p-3 bg-linear-to-br from-blue-500 to-cyan-500 transition duration-300 ease-in-out">
                <SiGmail size={30} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-medium text-gray-400">Email</h1>
                <h1 className="text-xl font-medium text-gray-100">
                  10arijitmanna@gmail.com
                </h1>
              </div>
            </div>

            <div className=" flex flex-row gap-3 p-2 rounded-xl bg-gray-900 group hover:bg-gray-800 transition duration-300 ease-in-out">
              <div className="group-hover:scale-105 rounded-xl flex justify-center items-center p-3 bg-linear-to-br from-purple-500 to-pink-500 transition duration-300 ease-in-out">
                <IoCall size={30} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-medium text-gray-400">Phone</h1>
                <h1 className="text-xl font-medium text-gray-100">8777672771</h1>
              </div>
            </div>

            <div className="h-0.5 bg-gray-600 w-11/12 m-auto"></div>

            <div className="flex flex-col gap-3 ">
              <h1 className="text-sm font-medium text-gray-400">Follow me on</h1>
              <div className="flex flex-row gap-10 ms-5 mb-5">
                <a href='https://github.com/Arijitmanna200' target='blank'
                  className="py-1 px-2 rounded-md text-md font-mono bg-gray-800 text-gray-200 hover:bg-gray-700 transition duration-300 ease-in-out">
                  GitHub
                </a>
                <a href='https://www.linkedin.com/in/arijit-manna-816a69246/' target='blank'
                  className="py-1 px-2 rounded-md text-md font-mono bg-gray-800 text-gray-200 hover:bg-gray-700 transition duration-300 ease-in-out">
                  Linkedin
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:w-6/7 md:w-11/12 w-full flex flex-col bg-white text-gray-700 rounded-xl gap-10 p-5 h-fit shadow-2xl">
            <div className="flex lg:flex-row md:flex-row flex-col gap-3">
              <div className="flex flex-col w-full">
                <h1>Name</h1>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="p-2 rounded-md h-10 bg-gray-100"
                />
              </div>

              <div className="flex flex-col w-full">
                <h1>Email</h1>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="p-2 rounded-md h-10 bg-gray-100"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h1>subject</h1>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter Subject"
                className="p-2 rounded-md h-10 bg-gray-100"
              />
            </div>

            <div className="flex flex-col">
              <h1>Message</h1>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Enter message"
                className="p-2 rounded-md bg-gray-100"
              />
            </div>

            <div
              onClick={handleSubmit}
              className="btn bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:scale-102 active:scale-100 transition duration-300 ease-in-out cursor-pointer text-center"
            >
              {loading ? "Sending..." : "Send Message"}
            </div>

            {success && (
              <p className="text-green-600 font-medium text-center">{success}</p>
            )}
          </div>

        </div>
      </div>
    </Element>
  );
};

export default Contact;
