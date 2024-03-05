import Image from "next/image";
import logo from "../../public/open_gyro_outline.png";

export default function Loading() {
  return (
    <div id="loading" data-testid="loading" className="grid justify-center mt-20">
      <Image
        src={logo.src}
        className="animate-logo-spin"
        alt="spinning gyro"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}
