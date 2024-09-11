'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/getSession";
import { MapPinIcon, CalendarIcon, UsersIcon } from "lucide-react";

// Mock data for trip plans
const tripPlans = [
  {
    id: 1,
    title: "Paris Getaway",
    description: "Romantic 5-day trip to the City of Light",
    image: "https://th.bing.com/th/id/R.563c60421331b07686ef0505cb82e8f8?rik=03u3TmaUx%2bA2zw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f0%2f0b%2fEiffel_tower-Paris.jpg&ehk=7cx0isTLmsqIGwFa3wRHPq7Maizyj7uuvGxWtqg6Sj8%3d&risl=1&pid=ImgRaw&r=0",
    location: "Paris, France",
    duration: "5 days",
    people: 2,
  },
  {
    id: 2,
    title: "Tokyo Adventure",
    description: "Explore the vibrant culture of Japan's capital",
    image: "https://th.bing.com/th/id/R.39a79d3cb2b3fbe41feb008b5e204c07?rik=aefRtRTGFHk%2fSA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-5th7gvm6SSs%2fTfoEaOJ2t1I%2fAAAAAAAABLU%2f0aPLzT5vevs%2fs1600%2fEast_Shinjuku_Tokyo_Japan.jpg&ehk=PqSL5ihcJXIF%2bmo5YF6PyqJbb1munYZm9IEsMKeUX2U%3d&risl=&pid=ImgRaw&r=0",
    location: "Tokyo, Japan",
    duration: "7 days",
    people: 3,
  },
  {
    id: 3,
    title: "New York City Explorer",
    description: "Experience the Big Apple's iconic sights",
    image: "https://th.bing.com/th/id/R.8879e3ca0331dd70eec506ec0107dda1?rik=jZKvupAz05f9ew&pid=ImgRaw&r=0",
    location: "New York, USA",
    duration: "4 days",
    people: 2,
  },
  {
    id: 4,
    title: "Bali Relaxation",
    description: "Unwind on the beautiful beaches of Bali",
    image: "https://static.superiorwallpapers.com/images/lthumbs/2018-08/12762_Wonderful-pool-and-beach-in-Bali-Relaxing-summer-holiday.jpg",
    location: "Bali, Indonesia",
    duration: "6 days",
    people: 2,
  },
];

export default function Dashboard () {
  // const session = await getSession();
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tripPlans.map((trip) => (
          <button key={trip.id} className="text-left transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-lg" onClick={() => console.log(`Clicked on trip: ${trip.title}`)}>
            <Card className="overflow-hidden h-full">
              <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{trip.title}</CardTitle>
                <CardDescription>{trip.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {trip.location}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center">
                    <UsersIcon className="w-4 h-4 mr-1" />
                    {trip.people} people
                  </div>
                </div>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}
