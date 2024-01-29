import CompaniesJoined from "./CompaniesJoined";
import Faq from "./Faq";
import Features from "./Features";
import Review from "./Review";
import WhyChooseClearLink from "./WhyChooseClearLink";

const Home = () => {
  return (
    <section className="flex flex-col gap-24 mx-auto">
      <CompaniesJoined />
      <WhyChooseClearLink />
      <Review />
      <Faq />
      <Features />
    </section>
  );
};

export default Home;
