import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Home, Briefcase, HeartPulse, Hotel } from "lucide-react";

export default function HospitalsPage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [searchTerm, setSearchTerm] = useState("");

  const doctors = [
    {
      name: "Dr E C Vinaya Kumar",
      specialization: "ENT Specialist",
      experience: "38+ years experience",
      location: "Apollo Health City, Jubilee Hills",
      image: "https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/cdn/ff/yuM3_a_qKp7h7scYf_fJfUCOcMg8ZB0acAyKqeak1Fg/1740722525/public/2025-01/defaultprofilepicmale.jpg",
    },
    {
      name: "Dr G Venkateswara Rao",
      specialization: "General Surgeon",
      experience: "13+ years experience",
      location: "Apollo Hospitals, Kakinada",
      image: "https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/cdn/ff/yuM3_a_qKp7h7scYf_fJfUCOcMg8ZB0acAyKqeak1Fg/1740722525/public/2025-01/defaultprofilepicmale.jpg",
    },
    {
      name: "Dr Garima Pandey",
      specialization: "Neurology",
      experience: "5+ years experience",
      location: "Apollo Sage Hospitals",
      image: "https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/cdn/ff/bopg6ZehVCBP6TIXLsJCrDpu30O9P_8uyX6efTaRo6I/1740722507/public/2025-01/defaultprofilepicbig.jpg",
    },
    {
      name: "Dr G Varun Teja",
      specialization: "Medical Gastroenterologist",
      experience: "6+ years experience",
      location: "Apollo Hospitals Health City, Arilova, Vizag",
      image: "https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/cdn/ff/yuM3_a_qKp7h7scYf_fJfUCOcMg8ZB0acAyKqeak1Fg/1740722525/public/2025-01/defaultprofilepicmale.jpg",
    },
  ];

  const diseaseData = [
    {
      title: "What You Should Know About Influenza",
      image: "https://www.apollohospitals.com/themes/custom/apollo/assets/svg/apollo-disease.jpeg",
    },
    {
      title: "What support would you need to have if you have Myasthenia Gravis?",
      image: "https://www.apollohospitals.com/themes/custom/apollo/assets/svg/apollo-disease.jpeg",
    },
    {
      title: "What makes Edwards Syndrome a rare genetic disorder",
      image: "https://www.apollohospitals.com/themes/custom/apollo/assets/svg/apollo-disease.jpeg",
    },
    {
      title: "Understanding the Symptoms of Diabetes",
      image: "https://www.apollohospitals.com/themes/custom/apollo/assets/svg/apollo-disease.jpeg",
    },
    {
      title: "How to Manage Hypertension Effectively",
      image: "https://www.apollohospitals.com/themes/custom/apollo/assets/svg/apollo-disease.jpeg",
    },
    {
      title: "Recognizing the Early Signs of Alzheimer's",
      image: "https://www.apollohospitals.com/themes/custom/apollo/assets/svg/apollo-disease.jpeg",
    },
  ];
  


  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="text-2xl font-bold text-blue-600">SmartChat</div>
        <div className="flex-5 mx-13 relative">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          <Input
            className="w-70 pl-10 border-gray-300"
            placeholder="Search for Locations and Specialities"
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

      {/* Doctors List */}
      <div className="p-6">
        <h1 className="text-2xl font-bold">Doctors ({doctors.length})</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center">
              <img src={doctor.image} alt={doctor.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-lg font-semibold">{doctor.name}</h2>
              <p className="text-gray-600">{doctor.specialization}</p>
              <p className="text-gray-500 text-sm">{doctor.experience}</p>
              <p className="text-blue-500 text-sm mt-2">📍 {doctor.location}</p>
              <Button className="mt-4 w-full">Book Appointment →</Button>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Disease and Condition (1162)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {diseaseData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start gap-3 border border-gray-200"
          >
            <img src={item.image} alt="disease" className="w-12 h-12" />
            <p className="text-gray-800 font-medium">{item.title}</p>
            <button className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-600 transition">
              ➜
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}