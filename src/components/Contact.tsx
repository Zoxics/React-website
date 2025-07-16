import { GiRotaryPhone } from "react-icons/gi";

function Contact() {
  return (
    <div>
      <div className="font-staat text-6xl text-primary text-left mb-3">
        Contact
        <GiRotaryPhone className="text-dark text-9xl float-right -mt-5 mr-6" />
      </div>
      <div className="p-6 border-4 border-dark bg-secondLight h-80">
        <div className="text-2xl font-bold font-mono text-left leading-loose">
          <p className="border-dark border-b-2">Name</p>
          <p className="border-dark border-b-2">Email</p>
          <p className="border-dark border-b-2">Message</p>
          <button className="font-staat tracking-widest text-4xl border-dark border-4 float-right mt-12 py-3 px-16 hover:bg-light transition duration-200">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
