import {
  Instagram,
  LocationEdit,
  Mail,
  MessageCircleMore,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  return (
    <section className="min-h-screen py-24 px-8 relative" id="contact">
      <div className="container mx-auto max-w-5xl">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-7 text-center">
          Get in <span className="text-primary"> Touch</span>
        </h2>
        <div>
          {" "}
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'm always open to
            new opportunities, collaborations, or a friendly chat. Let’s
            connect!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-8 ">
            <div className="flex flex-col items-center gap-4 border-2 p-9 rounded-2xl justify-evenly">
              <h3 className="text-xl font-bold">Contact Information</h3>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-6">
                  <Mail className="text-primary" />
                  <div className="flex flex-col items-start">
                    <p>Email</p>
                    <p>eldrianayera710@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Phone className="text-primary" />
                  <div className="flex flex-col items-start">
                    <p>Phone</p>
                    <p>+886-986346406</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <LocationEdit className="text-primary" />
                  <div className="flex flex-col items-start">
                    <p>Location</p>
                    <p>Kaohsiung , Taiwan</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <div>
                  Connect With <span className="text-primary">Me</span>
                </div>
                <div className="flex justify-center gap-2">
                  <a href="">
                    <Instagram />
                  </a>
                  <a href="">
                    <Mail />
                  </a>
                  <a href="">
                    <MessageCircleMore />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 border-2 p-9 rounded-2xl bg-card">
              <div className="flex flex-col items-center w-full ">
                <h3 className="text-xl font-bold mb-5">Send a Message</h3>
                <form action="" className="w-full mb-5">
                  <div className="flex flex-col items-center gap-2 w-full mb-5">
                    <p>Your Name</p>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe..."
                      className="bg-black rounded-md border-2 py-1 px-2 w-full focus:outline-hidden focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full mb-5">
                    <p>Your Email</p>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="johndoe@gmail.com"
                      className=" bg-black rounded-md border-2 py-1 px-2 w-full focus:outline-hidden focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full mb-5">
                    <p>Your Message</p>
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      placeholder="Hello , I'd like to talk about..."
                      className="resize-none bg-black rounded-md border-2 py-1 px-2 w-full h-20 focus:outline-hidden focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </form>
                <button
                  className={cn(
                    "cosmic-button w-full flex justify-center gap-2"
                  )}
                >
                  Send Message <Send />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
