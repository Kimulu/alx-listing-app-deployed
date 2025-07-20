import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "../../components/property/PropertyDetail";

// ✅ Define the Property type
type Property = {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
};

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // ✅ Use the correct type
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;

      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="text-center mt-6">Loading...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
  if (!property) return <p className="text-center mt-6">Property not found</p>;

  return <PropertyDetail property={property} />;
}
