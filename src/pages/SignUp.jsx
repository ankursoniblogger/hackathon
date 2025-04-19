import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth, provider, signInWithPopup, db, createUserWithEmailAndPassword, doc, setDoc } from "../Config/firebase.js";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in: ", user);
      alert(`Welcome, ${user.displayName}`);
      navigate("/login"); // Redirect to login page after Google sign-in
    } catch (error) {
      console.error("Google Sign-In Error: ", error);
    }
  };

  const handleSignup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

      console.log("User signed up:", user);
      alert("Sign Up Successful!");
      navigate("/login"); // Redirect to login page after successful sign-up
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    handleSignup(formData.email, formData.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <Input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full bg-blue-500 text-white">Sign Up</Button>
            <Button variant="outline" className="w-full flex items-center justify-center" onClick={handleGoogleSignIn}>
              <img src="/icons8-google.svg" alt="Google" className="w-5 h-5 mr-2" /> Sign Up with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}