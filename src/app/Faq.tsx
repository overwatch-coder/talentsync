"use client";

import { faqs } from "@/constants/faq";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import minus from "@/assets/minus.png";
import plus from "@/assets/plus.png";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleCollapseItem = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="flex flex-col items-start md:flex-row md:justify-between gap-20 relative px-5 md:px-40">
      <div className="flex flex-col gap-5 md:w-[60%]">
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

      <div className="flex flex-col md:w-full">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`${
              openFaq === idx ? "bg-gray-50 border" : "border-b"
            } flex flex-col gap-5 p-8 rounded-2xl border-gray-200`}
          >
            <h3 className="flex items-center justify-between gap-2">
              <span className="font-semibold text-gray-900">{faq.title}</span>

              <button onClick={() => toggleCollapseItem(idx)}>
                <Image
                  src={openFaq === idx ? minus : plus}
                  alt={`plus or minus icon`}
                  width={23}
                  height={23}
                  className="object-contain"
                  quality={100}
                />
              </button>
            </h3>

            {idx === openFaq && (
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
