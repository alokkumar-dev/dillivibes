import Link from 'next/link';

export default function WhatsAppButton() {
  const weboxStyle: React.CSSProperties = {
    position: 'fixed',
    width: '50px',
    height: '50px',
    bottom: '50px',
    left: '10px',
    backgroundColor: '#25d366',
    color: '#fff',
    borderRadius: '50px',
    textAlign: 'center',
    fontSize: '30px',
    boxShadow: '2px 2px 3px #999',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div className="waIconBox">
      <Link href="https://wa.me/7817851235" legacyBehavior>
        <a style={weboxStyle} target="_blank">
          <i className="uil uil-whatsapp"></i>
        </a>
      </Link>
    </div>
  );
}
