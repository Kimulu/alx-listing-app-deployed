import { NextApiRequest, NextApiResponse } from "next";

// Define the type for a single review
type Review = {
  id: string;
  comment: string;
  author: string;
  date: string;
};

// Allow any string key for the review map
const mockReviews: { [key: string]: Review[] } = {
  "1": [
    {
      id: "r1",
      comment: "Amazing place, very peaceful and clean!",
      author: "Alice",
      date: "2024-07-01",
    },
    {
      id: "r2",
      comment: "Perfect location and wonderful host!",
      author: "Bob",
      date: "2024-07-03",
    },
  ],
  "2": [
    {
      id: "r3",
      comment: "The cabin was cozy and had great views.",
      author: "Jane",
      date: "2024-07-04",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const reviews = mockReviews[id as string] || [];

  res.status(200).json(reviews);
}
