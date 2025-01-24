import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import { companyDetails, emailjsDetails } from "../../constant";
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
import emailjs from "@emailjs/browser";

const PopupForm = ({ storageKey }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setSpinner(true);

    var emailBody = "Full Name : " + data.fullName + "\n\n";
    emailBody += "Email : " + data.email + "\n\n";
    emailBody += "Phone Number: " + data.phone + "\n\n";

    const formData = {
      from_name: data.fullName,
      message: emailBody,
    };

    emailjs
      .send(
        emailjsDetails.serviceId,
        emailjsDetails.templateId,
        formData,
        emailjsDetails.publicKey
      )
      .then((response) => {
        toast.success("Form submitted successfully");
        reset();
        closePopup();
      })
      .catch((error) => {
        toast.error("Failed to submit form");
      })
      .finally(() => setSpinner(false));
  };

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem(storageKey, true);
  };
  return (
    <div className="p-4">
      <Modal
        isOpen={isOpen}
        onClose={closePopup}
        title="🚨 Limited Time Offer!"
        storageKey={storageKey}
      >
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-3 text-[.95rem]">
            <div>
              <p className="font-medium">
                ⌛️ Don’t Miss Out – Only a Few Slots Left!
              </p>
              <p className="font-light text-[.90rem]">
                We’re offering FREE consultations for a limited time to
                ambitious businesses ready to innovate and lead.
              </p>
            </div>
            <div>
              <p className="font-medium">📧 Grab Your Spot Before It’s Gone!</p>
              <p className="font-light text-[.90rem]">
                Enter your details below to secure your consultation now.
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 text-[.90rem]"
          >
            <div className="">
              <input
                type="text"
                className="mt-1 w-full bg-slate-100 outline-none border rounded-sm p-2"
                placeholder="Full Name"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && (
                <small className="text-red-500 text-sm">
                  {errors.fullName.message}
                </small>
              )}
            </div>

            <div className="">
              <input
                type="email"
                className="mt-1 w-full bg-slate-100 outline-none border rounded-sm p-2"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <small className="text-red-500 text-sm">
                  {errors.email.message}
                </small>
              )}
            </div>

            <div className="">
              <input
                type="tel"
                className="mt-1 mb-2 w-full bg-slate-100 outline-none border rounded-sm p-2"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phone && (
                <small className="text-red-500 text-sm">
                  {errors.phone.message}
                </small>
              )}
            </div>

            <button
              disabled={spinner}
              type="submit"
              className="disabled:cursor-wait disabled:hover:-translate-y-0 disabled:hover:bg-tertiary disabled:shadow-none tertiary-btn w-full"
            >
              {spinner ? (
                <ImSpinner3 className="text-xl animate-spin" />
              ) : (
                "Claim My Free Consultation"
              )}
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default PopupForm;
