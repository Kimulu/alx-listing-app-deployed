// components/property/PropertyDetail.tsx
import React from "react";
import Image from "next/image";

interface PropertyProps {
  property: {
    id: string;
    title: string;
    description: string;
    location: string;
    image: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    amenities?: string[];
  };
}

const PropertyDetail: React.FC<PropertyProps> = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md">
        <Image
          src={property.image}
          alt={property.title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-xl mt-2 font-semibold">
        KES {property.price.toLocaleString()}
      </p>

      <div className="mt-4">
        <p>
          <strong>Bedrooms:</strong> {property.bedrooms}
        </p>
        <p>
          <strong>Bathrooms:</strong> {property.bathrooms}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-1">Description</h3>
        <p className="text-gray-700">{property.description}</p>
      </div>

      {property.amenities && property.amenities.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-1">Amenities</h3>
          <ul className="list-disc list-inside text-gray-700">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
