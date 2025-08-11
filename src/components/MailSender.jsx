import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react"; // Or your icon import

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Replace with your Web3Forms access key
    formData.append("access_key", "d68244c9-3c10-40f7-a77c-b53ea184473d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="contact-right"
    >
      <div className="contact-card contact-form-card">
        <h3 className="contact-card-title">Send a Message</h3>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              type="text"
              name="subject"
              className="form-input"
              placeholder="Project Collaboration"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-input form-textarea"
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary contact-submit-btn">
            <Send className="btn-icon" />
            Send Message
          </button>
        </form>
        <span style={{ marginTop: "10px", display: "block" }}>{result}</span>
      </div>
    </motion.div>
  );
}
