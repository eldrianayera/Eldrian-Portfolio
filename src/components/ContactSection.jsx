import {
  Instagram,
  LocationEdit,
  Mail,
  MessageCircleMore,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="min-h-screen py-24 px-8" id="contact">
      <div className="container mx-auto flex flex-col items-center">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-7 text-center">
          Get in <span className="text-primary"> Touch</span>
        </h2>
        <div className="max-w-2xl">
          {" "}
          <p>
            Have a project in mind or just want to say hello? I'm always open to
            new opportunities, collaborations, or a friendly chat. Let’s
            connect!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
            <div className="flex flex-col items-center gap-4">
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
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
