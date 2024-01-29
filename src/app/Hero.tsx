import Image from "next/image";
import Header from "@/components/Header";
import hero_image from "@/assets/hero-image.png";
import ai_bot from "@/assets/ai-bot.png";
import avatar_hero from "@/assets/avatar-hero.png";
import stars from "@/assets/stars.png";
import Button from "../components/shared/Button";

const Hero = () => {
  return (
    <div className="px-5 md:px-32 pt-10 bg-[url('../assets/background-pattern.png')] bg-center bg-cover bg-no-repeat">
      <Header />
      
      <section className="flex flex-col-reverse items-center mx-auto md:flex-row md:justify-between gap-4 md:gap-10">
        <div className="flex flex-col gap-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
            Uniting the world, one video call at a time
          </h2>

          <p className="text-sm md:text-lg font-normal text-gray-500">
            Experience the future of communication with ClearLink - where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <Button
              name="Start your free trial"
              classNames="bg-blue-700 text-white text-lg"
            />

            <p className="flex items-center gap-3">
              <Image
                src={ai_bot}
                alt="ai bot hero image"
                width={20}
                height={20}
                quality={100}
                className="object-contain"
              />

              <span className="text-blue-700 font-semibold text-lg">
                Discover AI assistant
              </span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <Image
              src={avatar_hero}
              alt="avatar hero image"
              width={170}
              height={170}
              quality={100}
              className="object-contain"
            />

            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2">
                <Image
                  src={stars}
                  alt="stars rating image"
                  width={80}
                  height={80}
                  quality={100}
                  className="object-contain"
                />
                <span className="text-gray-700 font-semibold">5.0</span>
              </p>

              <p className="text-gray-600 font-medium">from 3,000+ reviews</p>
            </div>
          </div>
        </div>

        <Image
          src={hero_image}
          alt="clearlink hero image"
          width={700}
          height={700}
          quality={100}
          className="object-cover flex-1 md:w-[400px] md:h-[400px] w-full h-auto"
        />
      </section>
    </div>
  );
};

export default Hero;
