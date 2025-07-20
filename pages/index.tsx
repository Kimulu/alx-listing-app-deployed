import React, { useState } from "react";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import { Card } from "@/components/common/Card";

const HomePage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] sm:h-[75vh] xs:h-[65vh] bg-cover bg-center flex items-center justify-center text-white rounded-[27px] overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG.src})`,
        }}
      >
        <div className="text-center bg-opacity-40 px-4 py-6 rounded-xl max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Find your favorite <br className="hidden sm:block" /> place here!
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Filter by:</h2>
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              selected={selectedFilter === filter}
              onClick={() =>
                setSelectedFilter((prev) => (prev === filter ? null : filter))
              }
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="mx-auto px-4 py-10 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
          Featured Listings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <Card key={property.name} property={property} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
