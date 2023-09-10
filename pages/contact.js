import BgStyle from "@/components/bgstyle";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/button";
import InputField from "@/components/Form/inputField";
import TextArea from "@/components/Form/textArea";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactMe() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.loading("Submitting...", {
      style: {
        borderRadius: "50px",
      },
    });
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_MY_FORM_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.dismiss();
      toast.success("Form submitted successfully", {
        style: {
          borderRadius: "50px",
        },
      });
      event.target.reset();
    } else {
      toast.dismiss();
      toast.error("Error submitting form");
    }
  };
  return (
    <>
      <BgStyle />
      <div className="flex items-center mt-0 md:mt-8 gap-10 justify-center py-10 px-6 md:px-10 flex-col md:flex-row max-h-screen max-w-[1080px] mx-auto">
        <div className="flex flex-start flex-col ">
          <h3 className="text-[18px] items-center md:text-2xl">Dont Be Shy - Say Hi!</h3>
          <h2 className="text-[28px] leading-[1.1] mt-1 md:text-4xl">Get in Touch with Me!</h2>
          <p className="text-c-body text-xs md:text-base  font-normal mt-2">lets rocket towards success and turn your ideas into something extraordinary! 🚀 🌟</p>
          <ul className="flex flex-1/2 text-xl md:text-2xl mt-4 gap-4 [&>li]:text-white [&>li:hover]:text-c-body-fade [&>li>a]:transition-all">
            <li>
              <Link href="https://www.facebook.com/Afix.VpID/" target="_blank">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/afixv" target="_blank">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/c/AfixVega" target="_blank">
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/afixve" target="_blank">
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-full md:w-2/3 text-sm md:text-base ">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <InputField id="name" label="Full Name" required={true} type="text" placeholder="Enter your full name..." />
            <InputField id="email" label="Email" required={true} type="email" placeholder="Enter your email..." />
            <TextArea id="message" label="Message" placeholder="Enter your message..." required={true} />
            <div className="mt-2">
              <Button size="lg">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
