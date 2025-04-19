import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { auth, provider, signInWithPopup, signInWithEmailAndPassword } from "../Config/firebase.js";

export default function LoginPage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      alert("Login Successful!");
      navigate("/home"); // Redirect to the Home page after successful login
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in: ", user);
      alert(`Welcome, ${user.displayName}`);
      navigate("/home"); // Redirect to the Home page after Google sign-in
    } catch (error) {
      console.error("Google Sign-In Error: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg p-6 bg-white rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="w-full" onClick={() => handleLogin(email, password)}>
              Sign In
            </Button>
            <Button className="w-full flex items-center gap-2" variant="outline" onClick={handleGoogleSignIn}>
              <FcGoogle className="text-xl" /> Sign in with Google
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account? <a href="/signup" className="text-blue-600">Sign up</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}