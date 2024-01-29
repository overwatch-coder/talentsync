import {
  company,
  legal,
  product,
  resources,
  socials,
} from "@/constants/footer-items";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/clearlink-logo.svg";
import playstore from "@/assets/playstore.png";
import appstore from "@/assets/appstore.png";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="px-5 md:px-40 grid grid-cols-2 place-items-baseline mx-auto md:flex gap-10 md:flex-row md:justify-between md:gap-20 flex-wrap lg:flex-nowrap">
        {/* Logo */}
        <div className="flex flex-col gap-4 col-span-2">
          <Link href={"/"}>
            <Image
              src={logo}
              width={100}
              height={100}
              quality={100}
              alt="ClearLink footer Logo"
              className="object-contain"
            />
          </Link>

          <p className="text-gray-600 font-normal text-sm">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>

        {/* Product */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-gray-500 text-xs">Product</h2>

          <div className="flex flex-col gap-4">
            {product.map((item, idx) => (
              <Link
                key={idx}
                href={"/"}
                className="text-gray-600 font-semibold text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-gray-500 text-xs">Company</h2>
          <div className="flex flex-col gap-4">
            {company.map((item, idx) => (
              <Link
                key={idx}
                href={"/"}
                className="text-gray-600 font-semibold text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-gray-500 text-xs">Resources</h2>
          <div className="flex flex-col gap-4">
            {resources.map((item, idx) => (
              <Link
                key={idx}
                href={"/"}
                className="text-gray-600 font-semibold text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-gray-500 text-xs">Legal</h2>
          <div className="flex flex-col gap-4">
            {legal.map((item, idx) => (
              <Link
                key={idx}
                href={"/"}
                className="text-gray-600 font-semibold text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Get The App */}
        <div className="flex flex-col gap-5 col-span-2">
          <h2 className="text-blue-700 font-semibold text-xs">Get the app</h2>
          <div className="flex flex-col gap-4">
            <Link href={"/"}>
              <Image
                src={appstore}
                alt="appstore icon"
                width={300}
                height={300}
                quality={100}
                className="object-contain w-40 h-auto md:w-72"
              />
            </Link>

            <Link href={"/"}>
              <Image
                src={playstore}
                alt="playstore icon"
                width={300}
                height={300}
                quality={100}
                className="object-contain w-40 h-auto md:w-72"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-50 py-10 md:py-8">
        {/* Copyright */}
        <div className="px-5 md:px-40 flex flex-col md:flex-row gap-5 items-center md:justify-between">
          <p className="font-normal text-gray-500 text-sm">
            © 2023 ClearLink. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socials.map((social, idx) => (
              <Link href={"/"} key={idx}>
                <Image
                  src={social}
                  alt="social icon"
                  width={15}
                  height={15}
                  quality={100}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
