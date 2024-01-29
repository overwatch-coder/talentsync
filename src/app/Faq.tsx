import { faqs } from "@/constants/faq";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Faq = () => {
  return (
    <section className="flex flex-col items-start md:flex-row md:justify-between gap-20 relative px-5 md:px-40">
      <div className="flex flex-col gap-5">
        <h2 className="text-blue-700 text-sm font-semibold">Support</h2>
        <h3 className="text-gray-800 text-4xl font-semibold">FAQs</h3>
        <p className="text-gray-500 font-normal">
          Everything you need to know about the product and billing. Cannot find
          the answer you are looking for? Please{" "}
          <Link href={"/"} className="underline">
            chat to our friendly team.
          </Link>
        </p>
      </div>

      <div className="flex flex-col">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`${
              idx === 0 ? "bg-gray-50 border" : "border-b"
            } flex flex-col gap-5 p-8 rounded-2xl border-gray-200`}
          >
            <h3 className="flex items-center justify-between gap-2">
              <span className="font-semibold text-gray-900">{faq.title}</span>

              <button>
                <Image
                  src={faq.icon}
                  alt={`${faq.title}'s image`}
                  width={20}
                  height={20}
                  className="object-contain"
                  quality={100}
                />
              </button>
            </h3>

            {faq?.description && (
              <p className="font-normal text-sm text-gray-600 leading-relaxed">
                {faq.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
