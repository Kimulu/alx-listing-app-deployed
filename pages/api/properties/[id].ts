// pages/api/properties/[id].ts

import { NextApiRequest, NextApiResponse } from "next";

// Mock data
const properties = [
  {
    id: "1",
    title: "Villa Arrecife Beach House",
    description: "A stunning beachside property with breathtaking views.",
    location: "Diani, Kenya",
    image: "/assets/images/image1.png",
    price: 7500,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["WiFi", "Private Pool", "Ocean View", "Air Conditioning"],
  },
  {
    id: "2",
    title: "Serenity Mountain Cabin",
    description: "Cozy cabin retreat in the hills with panoramic views.",
    location: "Mt. Kenya",
    image: "/assets/images/image8.png",
    price: 5800,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Fireplace", "Hiking Trails", "Hot Tub"],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  return res.status(200).json(property);
}
