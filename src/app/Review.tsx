import Image from "next/image";
import stars from "@/assets/stars.png";
import shopify from "@/assets/shopify.png";
import review_image from "@/assets/reviews.png";
import review_avatar from "@/assets/review_avatar.png";
import arrow_right from "@/assets/arrow-right.png";
import arrow_left from "@/assets/arrow-left.png";

const Review = () => {
  return (
    <div className="bg-gray-50">
      <section className="px-5 md:px-40 flex flex-col-reverse items-center md:flex-row md:justify-between gap-12 md:gap-10 py-16">
        <div className="flex flex-col items-center mx-auto gap-12 md:items-start">
          <Image
            src={shopify}
            alt="avatar hero image"
            width={100}
            height={100}
            quality={100}
            className="object-contain"
          />

          <Image
            src={stars}
            alt="avatar hero image"
            width={80}
            height={80}
            quality={100}
            className="object-contain"
          />

          <p className="text-gray-900 font-medium text-xl">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </p>

          <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
            <div className="flex items-center gap-4">
              <Image
                src={review_avatar}
                alt="clearlink hero image"
                width={60}
                height={60}
                quality={100}
                className="object-contain"
              />

              <p className="flex flex-col gap-1">
                <span className="text-gray-900 font-semibold">
                  Sarah Thompson
                </span>
                <span className="text-gray-600 font-normal text-xs">
                  Project Manager, Shopify
                </span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button>
                <Image
                  src={arrow_left}
                  alt="clearlink hero image"
                  width={30}
                  height={30}
                  quality={100}
                  className="object-contain"
                />
              </button>

              <button>
                <Image
                  src={arrow_right}
                  alt="clearlink hero image"
                  width={30}
                  height={30}
                  quality={100}
                  className="object-contain"
                />
              </button>
            </div>
          </div>
        </div>

        <Image
          src={review_image}
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

export default Review;
