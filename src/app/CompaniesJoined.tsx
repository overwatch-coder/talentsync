import { companies } from "@/constants/companies";
import Image from "next/image";

const CompaniesJoined = () => {
  return (
    <section className="bg-white flex flex-col gap-12 px-5 md:px-40">
      <h3 className="text-base text-gray-600 font-medium text-center">
        Join 1,500+ companies already video conferencing the ClearLink way
      </h3>

      <div className="flex flex-row items-center justify-between flex-wrap gap-6">
        {companies.map((company, idx) => (
          <Image
            key={idx}
            src={company}
            alt="company joined"
            width={100}
            height={100}
            className="object-contain"
            quality={100}
          />
        ))}
      </div>
    </section>
  );
};

export default CompaniesJoined;
