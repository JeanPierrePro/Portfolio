// src/components/ContactMe.tsx
import React from 'react'
import '../index.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="title">Contact <span>Me</span></h2>
      <form action="#">
        <div className="input-box">
          <input type="text" required placeholder="Full Name" />
          <input type="email" required placeholder="Email" />
        </div>
        <div className="input-box">
          <input type="tel" required placeholder="Mobile Number" />
          <input type="text" required placeholder="Subject For" />
        </div>
        <textarea cols={30} rows={10} placeholder="Message" required></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  )
}

export default Contact
