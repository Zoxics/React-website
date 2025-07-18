import { GiRotaryPhone } from "react-icons/gi";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

function Contact() {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent!", {
        style: {
          background: "#d6be95",
          color: "#1c4848",
          fontFamily: "Staatliches, sans-serif",
          fontSize: "2rem",
          border: "2px solid #1c4848",
        },
      });
      setFormdata({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send message. Try again.", {
        style: {
          background: "#d6be95",
          color: "#be4e2d",
          fontFamily: "Staatliches, sans-serif",
          fontSize: "2rem",
          border: "2px solid #1c4848",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="font-staat text-6xl text-primary text-left mb-3">
        Contact
        <GiRotaryPhone className="text-dark text-9xl float-right -mt-5 mr-6" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-6 border-4 border-dark bg-secondLight h-auto"
      >
        <div className="text-2xl font-bold font-mono text-left leading-loose space-y-4 focus:bg-secondLight">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-secondLight p-2 border-b-2 border-dark focus:outline-none focus:bg-secondLight placeholder-dark"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-secondLight p-2 border-b-2 border-dark focus:outline-none focus:bg-secondLight placeholder-dark"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={2}
            className="w-full bg-secondLight p-2 border-b-2 border-dark focus:outline-none placeholder-dark"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`font-staat tracking-widest text-4xl border-dark border-4 mr-2 mb-3 py-3 px-16 transition duration-200 ${
                loading ? "bg-light cursor-not-allowed" : "hover:bg-light"
              }`}
            >
              {loading ? "SENDING..." : "SEND"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
