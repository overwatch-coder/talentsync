import { features } from "@/constants/features";
import Image from "next/image";
import features_image from "@/assets/features-image.png";
import Button from "@/components/shared/Button";

const Features = () => {
  return (
    <section className="px-5 md:px-32 flex flex-col-reverse items-center mx-auto md:flex-row md:justify-between gap-4 md:gap-10">
      <div className="flex flex-col gap-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Ready to clear the path to perfect communication?
        </h2>

        <div className="flex flex-col gap-5 ps-4">
          {features.map((feature, idx: number) => (
            <div key={idx} className="flex items-center gap-3">
              <Image
                src={feature.icon}
                alt="checkmark icon"
                width={20}
                height={20}
                quality={100}
                className="object-contain"
              />

              <p className="text-sm md:text-lg font-normal text-gray-600">
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-3">
          <Button
            name="Talk to sales"
            classNames="border-gray-400 text-gray-900 bg-white border"
          />

          <Button
            name="Start your free trial"
            classNames="bg-blue-700 text-white"
          />
        </div>
      </div>

      <Image
        src={features_image}
        alt="clearlink hero image"
        width={700}
        height={700}
        quality={100}
        className="object-contain flex-1 md:w-[500px] md:h-[500px] w-full h-auto"
      />
    </section>
  );
};

export default Features;
