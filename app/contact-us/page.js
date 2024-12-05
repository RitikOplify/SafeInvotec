"use client";
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Image from "next/image";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setLoading(false);
      toast.success("Email sent successfully!");
    } else {
      setLoading(false);
      toast.error("Failed to send email.");
    }
  };
  return (
    <div>
      <Image
        src="/Contact-Us/Contact-Us.jpg"
        className="w-full object-cover"
        alt="Brazing Solutions"
        layout="responsive"
        width={1440}
        height={600}
      />
      <div className="flex flex-col lg:flex-row py-6 lg:py-12 px-5 sm:px-10 gap-10 max-w-[1440px] mx-auto bg-white">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#AA1F2E] mb-4">Contact Us</h2>
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <span className="material-icons">
                <HiOutlineMail />
              </span>
              <a href="mailto:info@safeinvotec.com" className="text-gray-700">
                info@safeinvotec.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-icons">
                <IoCallOutline />
              </span>
              <a href="tel:+919769035683" className="text-gray-700">
                +91 97690-35683
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-icons">
                <GrLocation />
              </span>
              <span className="text-gray-700">
                C517, 215 Atrium Andheri Kurla Road, Andheri (E), Mumbai-400059
              </span>
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Let{"'"}s talk about what SafeInvotec can do for your business.
          </h3>
          <p className=" mb-5">
            Need help with something? Get in touch with our friendly team and
            we’ll get in touch within 24 hours.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Full Name is required",
                    minLength: {
                      value: 3,
                      message: "Full Name must be at least 3 characters long",
                    },
                  })}
                  className={`border p-3 rounded-md w-full focus:outline-none ${
                    errors.fullName ? "border-[#AA1F2E]" : "border-gray-300"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[#AA1F2E] text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`border p-3 rounded-md w-full focus:outline-none ${
                    errors.email ? "border-[#AA1F2E]" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-[#AA1F2E] text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone Number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                  className={`border p-3 rounded-md w-full focus:outline-none ${
                    errors.phone ? "border-[#AA1F2E]" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-[#AA1F2E] text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company Name"
                  {...register("company", {
                    required: "Company Name is required",
                  })}
                  className={`border p-3 rounded-md w-full focus:outline-none ${
                    errors.company ? "border-[#AA1F2E]" : "border-gray-300"
                  }`}
                />
                {errors.company && (
                  <p className="text-[#AA1F2E] text-sm mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Location"
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className={`border p-3 rounded-md w-full focus:outline-none ${
                    errors.location ? "border-[#AA1F2E]" : "border-gray-300"
                  }`}
                />
                {errors.location && (
                  <p className="text-[#AA1F2E] text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  className={`border p-3 rounded-md w-full focus:outline-none ${
                    errors.subject ? "border-[#AA1F2E]" : "border-gray-300"
                  }`}
                >
                  <option value="">Select Subject</option>
                  <option value="query">General Query</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                </select>
                {errors.subject && (
                  <p className="text-[#AA1F2E] text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Leave us a message..."
                {...register("message", {
                  required: "Message is required",
                })}
                className={`border p-3 rounded-md w-full focus:outline-none ${
                  errors.message ? "border-[#AA1F2E]" : "border-gray-300"
                }`}
                rows="5"
              ></textarea>
              {errors.message && (
                <p className="text-[#AA1F2E] text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#AA1F2E] text-white px-6 py-3 w-1/2 rounded-md focus:outline-none"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
