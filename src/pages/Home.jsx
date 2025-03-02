import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, ThumbsUp, MessageCircle, Home, Briefcase, HeartPulse, Hotel } from "lucide-react";

const categories = [
  { name: "Technology", count: 10 },
  { name: "Health", count: 8 },
  { name: "Sports", count: 15 },
  { name: "Entertainment", count: 12 },
];

const posts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  userAvatar: `https://picsum.photos/seed/${i + 1}/50`,
  title: `Post Title ${i + 1}`,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: `https://picsum.photos/seed/${i + 1}/600/400`,
  profileImage: `https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg`,
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 20),
}));

const friends = [
  { name: "Alice", online: true, image: "https://picsum.photos/seed/alice/50" },
  { name: "Bob", online: false, image: "https://picsum.photos/seed/bob/50" },
  { name: "Charlie", online: true, image: "https://picsum.photos/seed/charlie/50" },
  { name: "David", online: true, image: "https://picsum.photos/seed/david/50" },
  { name: "Emma", online: false, image: "https://picsum.photos/seed/emma/50" },
];

export default function Dashboard() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [feed, setFeed] = useState(posts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = feed.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="flex space-x-10 items-center"> {/* Navigation links */}
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
        <div className="ml-20"></div> {/* Add space between Rental Homes and Login button */}
        <div className="flex space-x-4"> {/* Login and Signup buttons */}
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
        {/* Categories */}
        <aside className="w-64 p-6 bg-white">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat.name} className="flex justify-between py-2 text-gray-700">
                <span>{cat.name}</span>
                <span className="bg-gray-300 rounded-full px-3 py-1">{cat.count}</span>
              </li>
            ))}
          </ul>
        </aside>
        
        {/* Feed Section */}
        <main className="flex-1 overflow-y-auto p-6">
          <ScrollArea className="space-y-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white rounded-lg p-4 !border-0 mb-6">
                <CardHeader className="flex flex-row items-center space-x-3">
                  <img src={post.profileImage} className="w-12 h-12 rounded-full" />
                  <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
                  
                </CardHeader>
                <CardContent>
                  <img src={post.image} alt="Post" className="w-full h-64 object-cover rounded-lg" />
                  <p className="text-gray-600 mt-4">{post.content}</p>
                  <div className="flex items-center justify-between mt-5 text-gray-600">
                    <div className="flex items-center space-x-3 cursor-pointer">
                      <ThumbsUp className="text-blue-500" size={20} />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-3 cursor-pointer">
                      <MessageCircle className="text-gray-500" size={20} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </main>
        
        {/* Friends List */}
        {/* Connected Friends */}
<aside className="w-100 p-6 bg-white shadow-lg">
  <h2 className="text-lg font-semibold mb-4 text-left">Connected Friends</h2>
  <ScrollArea className="space-y-4">
    {friends.map((friend) => (
      <div key={friend.name} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm text-left">
        {/* Profile Image & Name */}
        <div className="flex items-center space-x-3">
          <img src={friend.image} className="w-12 h-12 rounded-full" />
          <div>
            <span className="text-gray-800 font-medium">{friend.name}</span>
            <p className="text-sm text-gray-500">Suggested for you</p>
          </div>
        </div>
        
        {/* Follow Button */}
        <button className="text-blue-600 font-semibold hover:underline">Follow</button>
      </div>
    ))}
  </ScrollArea>
</aside>

      </div>
    </div>
  );
}