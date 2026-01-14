"use client";

export default function CallToActionSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-20 px-4"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      {/* Services Tag */}
      <div
        className="mb-6"
        style={{
          width: "59px",
          height: "15px",
          fontSize: "15px",
          color: "#2E4F21",
        }}
      >
        Services
      </div>

      {/* Main Heading */}
      <h2
        className="text-center mb-4 leading-tight"
        style={{
          maxWidth: "857px",
          fontSize: "60px",
          color: "#2E4F21",
        }}
      >
        Let us handle the numbers, so you can handle your success.
      </h2>

      {/* Subheading */}
      <p
        className="text-center mb-8"
        style={{
          fontSize: "16px",
          color: "#2E4F21",
        }}
      >
        Serving individuals and small businesses since 1987
      </p>

      {/* CTA Button */}
      <button
        className="flex items-center justify-center text-white"
        style={{
          width: "107px",
          height: "37px",
          backgroundColor: "#2E4F21",
          fontSize: "12px",
          borderRadius: "18.5px",
        }}
      >
        Schedule a call
      </button>
    </section>
  );
}
