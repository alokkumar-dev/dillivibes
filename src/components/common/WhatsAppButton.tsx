import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <>
      <div className="waIconBox">
        <Link
          href="https://wa.me/1234567890"
          className="wa-link"
          target="_blank"
        >
          <i className="fab fa-whatsapp wa-icon"></i>
          What's app
        </Link>
      </div>
    </>
  );
}
