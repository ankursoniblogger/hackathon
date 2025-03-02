import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  Home,
  Briefcase,
  HeartPulse,
  Hotel,
  MapPin,
  Settings,
  BookOpen,
  Bell,
  HelpCircle,
  Shield,
  Megaphone,
  Briefcase as BriefcaseBusiness,
  Download,
} from "lucide-react"; // Import all required icons

export default function JobsPage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Social Media Manager",
      company: "Kalkeri Sangeet Vidyalaya",
      location: "Dhanvad, Karnataka, India (On-site)",
      time: "Viewed",
      promoted: true,
      easyApply: true,
      logo: "https://picsum.photos/seed/kalkeri/50", // Example logo URL
    },
    {
      id: 2,
      title: "Digital Marketing Executive",
      company: "Painting Drive",
      location: "Mumbai, Maharashtra, India (On-site)",
      time: "1 day ago",
      promoted: true,
      easyApply: true,
      logo: "https://picsum.photos/seed/painting/50", // Example logo URL
    },
    {
      id: 3,
      title: "Social Media Manager and Strategist",
      company: "Sulte Group",
      location: "Santa Monica, CA (Remote)",
      time: "2 months ago",
      promoted: false,
      easyApply: true,
      logo: "https://picsum.photos/seed/sulte/50", // Example logo URL
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="text-2xl font-bold text-blue-600">SmartChat</div>
        <div className="flex-1 mx-13 relative flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative flex-[2] mr-4">
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
            <Input
              className="w-full pl-10 border-gray-300"
              placeholder="Title, skill, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Location Input */}
          <div className="relative flex-0">
            <MapPin className="absolute left-3 top-2.5 text-gray-500" size={18} />
            <Input
              className="w-full pl-10 border-gray-300"
              placeholder=""
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          
        </div>
        <div className="flex space-x-13 items-center">
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

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Side Navigation Panel */}
        <aside className="w-64 p-6 bg-white shadow-lg">
          {/* Preferences Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Preferences</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/preferences" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Settings className="mr-2" size={18} />
                  Preferences
                </Link>
              </li>
              <li>
                <Link to="/my-jobs" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Briefcase className="mr-2" size={18} />
                  My Jobs
                </Link>
              </li>
              <li>
                <Link to="/career-insights" className="flex items-center text-gray-700 hover:text-blue-600">
                  <BookOpen className="mr-2" size={18} />
                  My Career Insights
                </Link>
              </li>
              <li>
                <Link to="/post-job" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Megaphone className="mr-2" size={18} />
                  Post a free job
                </Link>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">More</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600">
                  <HelpCircle className="mr-2" size={18} />
                  About
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Bell className="mr-2" size={18} />
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="flex items-center text-gray-700 hover:text-blue-600">
                  <HelpCircle className="mr-2" size={18} />
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Shield className="mr-2" size={18} />
                  Privacy & Terms
                </Link>
              </li>
              <li>
                <Link to="/ad-choices" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Megaphone className="mr-2" size={18} />
                  Ad Choices
                </Link>
              </li>
              <li>
                <Link to="/advertising" className="flex items-center text-gray-700 hover:text-blue-600">
                  <BriefcaseBusiness className="mr-2" size={18} />
                  Advertising
                </Link>
              </li>
              <li>
                <Link to="/business-services" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Briefcase className="mr-2" size={18} />
                  Business Services
                </Link>
              </li>
              <li>
                <Link to="/linkedin-app" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Download className="mr-2" size={18} />
                  Get the SmartChat app
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {/* Top Job Picks Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-left">Top job picks for you</h2>
            <p className="text-gray-600 mb-6 text-left">
              Based on your profile, preferences, and activity like applies, searches, and saves
            </p>

            {/* Job List */}
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start space-x-4">
                    {/* Company Logo */}
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-12 h-12 rounded-full"
                    />
                    {/* Job Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-left">{job.title}</h3>
                      <p className="text-gray-600 text-left">{job.company}</p>
                      <p className="text-gray-500 text-sm text-left">{job.location}</p>
                      <div className="mt-2 flex items-center text-gray-500 text-sm">
                        <span>{job.time}</span>
                        {job.promoted && (
                          <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            Promoted
                          </span>
                        )}
                        {job.easyApply && (
                          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Easy Apply
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show All Button */}
            <div className="mt-6">
              <Button variant="outline" className="w-semi-half">
                Show all
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}