import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Home, Briefcase, HeartPulse, Hotel } from "lucide-react";

export default function HotelsPage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [searchTerm, setSearchTerm] = useState("");

  const hotels = [
    {
      id: 1,
      name: "Hotel East Inn Delhi Airport",
      location: "New Delhi, India",
      rating: 9.1,
      reviews: 16,
      priceOld: 1189,
      priceNew: 892,
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/651875294.jpg?k=0a3fa1ce1dee7f57ecec92aeaf1d98f89233f4510d7c02bd66a2153902bb2247&o=",
    },
    {
      id: 2,
      name: "Hotel Shabnam",
      location: "Kolkata, India",
      rating: 6.5,
      reviews: 19,
      priceOld: 1974,
      priceNew: 1184,
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/632090356.jpg?k=8a76508621467a7371a095d6e9f033d665c9105da76c62ed676feb0f6fbb17fe&o=",
    },
    {
      id: 3,
      name: "Super Hotel O Maligaon Adabari",
      location: "Guwahati, India",
      rating: 7.3,
      reviews: 13,
      priceOld: 3567,
      priceNew: 2033,
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/652934962.jpg?k=354d884b9034e1ec6ac5eaca00739660d8382cf6bbc7485bab0ba2d21427aae5&o=",
    },
    {
      id: 4,
      name: "Hotel Ginger Palace Delhi Airport",
      location: "New Delhi, India",
      rating: 9.1,
      reviews: 17,
      priceOld: 1189,
      priceNew: 1070,
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/651870732.jpg?k=8f54071b9a6072ad6904e377a1f35b3ecaaa3614457175a1e8a0db0c13747569&o=",
    },
  ];
  

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="text-2xl font-bold text-blue-600">SmartChat</div>
        <div className="flex-1 mx-13 relative">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          <Input
            className="w-64 pl-10 border-gray-300"
            placeholder="Search for hotels"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-10 items-center">
          {/* Navigation links */}
          <Link to="/home" className="flex flex-col items-center text-gray-700 hover:text-blue-600 text-sm">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/jobs" className="flex flex-col items-center text-gray-700 hover:text-blue-600 text-sm">
            <Briefcase size={18} />
            <span>Jobs</span>
          </Link>
          <Link to="/hospitals" className="flex flex-col items-center text-gray-700 hover:text-blue-600 text-sm">
            <HeartPulse size={18} />
            <span>Hospitals</span>
          </Link>
          <Link to="/hotels" className="flex flex-col items-center text-gray-700 hover:text-blue-600 text-sm">
            <Hotel size={18} />
            <span>Hotels</span>
          </Link>
          <Link to="/rental-homes" className="flex flex-col items-center text-gray-700 hover:text-blue-600 text-sm">
            <Home size={18} />
            <span>Rental Homes</span>
          </Link>
        </div>
        <div className="ml-20"></div>
        {/* Login and Signup buttons */}
        <div className="flex space-x-4">
          <Button variant="outline" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="outline" onClick={() => navigate("/signup")}>
            Signup
          </Button>
        </div>
      </header>
     {/* Hotel Deals Section */}
     <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Deals for the weekend</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{hotel.name}</h2>
                <p className="text-gray-600 text-sm">{hotel.location}</p>
                <div className="flex items-center mt-2">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {hotel.rating}
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">{hotel.reviews} reviews</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">2 nights</div>
                <div className="mt-1 text-lg font-bold">
                  <span className="line-through text-gray-400 text-sm mr-2">
                    ₹{hotel.priceOld}
                  </span>
                  ₹{hotel.priceNew}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}