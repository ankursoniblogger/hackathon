import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Home, Briefcase, HeartPulse, Hotel } from "lucide-react";

export default function RentalHomesPagePage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [searchTerm, setSearchTerm] = useState("");

  const rentalHomes = [
    {
      id: 1,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1151768913002179606/original/1beb7d9c-15e9-40d6-873f-147fec384b35.jpeg?im_w=720",
      title: "Townhouse in Paju-si, South Korea",
      rating: "4.96 (54)",
      beds: "3 beds",
      pricePerNight: "₹6,262 night",
      totalPrice: "₹33,105 total",
    },
    {
      id: 2,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1151768913002179606/original/1beb7d9c-15e9-40d6-873f-147fec384b35.jpeg?im_w=720",
      title: "Tiny home in Cabangan, Philippines",
      rating: "4.82 (174)",
      beds: "2 queen beds",
      pricePerNight: "₹7,905 night",
      totalPrice: "₹39,524 total",
    },
    {
      id: 3,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1151768913002179606/original/1beb7d9c-15e9-40d6-873f-147fec384b35.jpeg?im_w=720",
      title: "Villa in Thành phố Phan Thiết, Vietnam",
      rating: "4.95 (39)",
      beds: "10 beds",
      pricePerNight: "₹30,545 night",
      totalPrice: "₹1,52,724 total",
    },
    {
      id: 4,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1151768913002179606/original/1beb7d9c-15e9-40d6-873f-147fec384b35.jpeg?im_w=720",
      title: "Villa in Muang Pattaya, Thailand",
      rating: "5.0 (61)",
      beds: "8 beds",
      pricePerNight: "₹65,167 night",
      totalPrice: "₹3,25,834 total",
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
            placeholder="Search..."
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
      {/* Rental Homes Section */}
      <div className="p-6">
        <h1 className="text-2xl font-bold">Family-friendly stays with full kitchens</h1>
        <p className="text-gray-600">Prepare a feast for loved ones in these stays with kitchens and BBQ grills.</p>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {rentalHomes.map((home) => (
            <div key={home.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={home.image} alt={home.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{home.title}</h2>
                <p className="text-gray-600">{home.rating}</p>
                <p className="text-gray-600">{home.beds}</p>
                <p className="text-gray-800 font-bold">{home.pricePerNight}</p>
                <p className="text-gray-600">{home.totalPrice}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg">Let's get cooking</button>
      </div>
      
    </div>
  );
}