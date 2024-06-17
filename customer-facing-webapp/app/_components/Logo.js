import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* The image comp. want us to prevent layout shift therefore height and width are compulsory */}
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}

      {/* Dynamic Image Import(without the src attribute)-> import logo from 'public/logo.png'; and <Image src={logo} alt="Logo" /> -
      This method allows Next.js to analyze the image first and automatically handle
      dimensions. */}
      <Image
        src={logo}
        quality={100}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
