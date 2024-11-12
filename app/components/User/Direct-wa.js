import Image from "next/image";

function DirectWA() {
  return (
    <div id="direct-wa" className="fixed bottom-8 right-8 z-50">
      <a
        href="https://wa.me/083127605430"
        className="whatsapp-logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/whatsapp-logo.png"
          alt="WhatsApp"
          className="w-16 h-16 transition-transform duration-300 hover:scale-110"
          height={256}
          width={256}
        />
      </a>
    </div>
  );
}

export default DirectWA;
