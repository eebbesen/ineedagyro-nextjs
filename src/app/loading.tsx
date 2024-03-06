import Image from "next/image";
import logo from "../../public/open_gyro_outline.png";

export default function Loading() {
  return (
    <div
      id="loading"
      data-testid="loading"
      className="grid justify-center mt-20"
    >
      <Image
        src={logo.src}
        className="animate-logo-spin w-full h-auto"
        alt="spinning gyro"
        width="0"
        height="0"
        sizes="100vw"
        priority
      />
    </div>
  );
}
