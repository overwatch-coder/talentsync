import Image from "next/image";
import choose_clearlink from "@/assets/choose-clearlink.png";
import hand_drawn_arrow from "@/assets/hand-drawn-arrow.png";
import { reasons } from "@/constants/reasons";

const WhyChooseClearLink = () => {
  return (
    <section className="flex flex-col gap-20 relative px-5 md:px-40">
      <div className="flex flex-col gap-5">
        <h2 className="text-blue-700 text-sm font-semibold">
          The ClearLink Advantage
        </h2>
        <h3 className="text-gray-800 text-4xl font-semibold">
          Why choose ClearLink?
        </h3>
        <p className="text-gray-500 font-normal">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-16 relative">
        <Image
          src={hand_drawn_arrow}
          alt={`hand-drawn arrow image`}
          width={200}
          height={200}
          className="object-contain absolute right-32 -top-36 md:-top-20"
          quality={100}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col gap-5 col-span-1">
              <Image
                src={reason.icon}
                alt={`${reason.title}'s image`}
                width={35}
                height={35}
                className="object-contain"
                quality={100}
              />
              <h3 className="font-semibold text-gray-900 text-xl">
                {reason.title}
              </h3>
              <p className="font-normal text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="relative hidden items-center justify-center flex-grow w-full">
          <Image
            src={hand_drawn_arrow}
            alt={`hand-drawn arrow image`}
            width={200}
            height={200}
            className="object-contain absolute right-24 -top-40"
            quality={100}
          />

          <Image
            src={choose_clearlink}
            alt="why choose clearlink image"
            width={544}
            height={527}
            className="object-cover"
            quality={100}
          />
        </div>

        <Image
          src={choose_clearlink}
          alt="why choose clearlink image"
          width={700}
          height={700}
          className="object-cover flex-1 md:w-[350px] md:h-[350px] w-full h-auto"
          quality={100}
        />
      </div>
    </section>
  );
};

export default WhyChooseClearLink;
