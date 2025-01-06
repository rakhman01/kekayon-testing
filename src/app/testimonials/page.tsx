import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection";
import SectionClientSay from "@/components/SectionClientSay";
import HaveQuestion from "@/components/HaveQuestion";


function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">

        <div className="pt-16">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/60540b48ce7e5233b970791b9a6a1cd44f608b55829c0e379efb19a98054d35f?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"
            alt="Full-width Image"
            className="w-full h-96 md:h-[480px] object-cover"
          />
          <div className="py-16">
            <h2 className="text-5xl font-bold mt-2">Testimonials</h2>
            <p className="text-base font-light text-gray-400 mt-4">At Kekayon, our travelers’ experiences are our top priority. Here’s what our customers have to say about their journeys with us. From breathtaking destinations to exceptional service, we’re proud to share these stories of adventure, connection, and unforgettable memories.</p>
          </div>

        </div>
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
        <HaveQuestion />
      </div>
    </main>
  );
}

export default PageHome;
