import React from "react";

const WaitlistEmbed: React.FC = () => {
  return (
    <section id="waitlist" className="w-full px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-3">
          Join the Ninja Repair Academy waiting list
        </h2>
        <p className="text-base mb-6">
          Add your email and I will let you know as soon as we go live.
        </p>

        <iframe
          title="Ninja Repair Academy waiting list"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdeoiNyQw2qp00hMo-Rny_CBmxYZ-eNIKC5VxUo5xm8SjHrXw/viewform?embedded=true"
          width="100%"
          height={700}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ border: "none", display: "block", margin: "0 auto", maxWidth: 800 }}
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default WaitlistEmbed;
