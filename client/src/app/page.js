import Carousel from "./carousel/page";
import Faq from "./faq/page";
import Footer from "./footer/page";

import Landing from "./page1/page";
import RangeSlide from "./range/page";

export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-auto">
      <Landing />
      <Carousel />
      <RangeSlide />
      <Faq />
      <Footer />
    </div>
  );
}
