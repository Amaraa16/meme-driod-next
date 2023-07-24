import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Signup() {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#0e0e0e", gap: "20px" }}>
      <h1 style={{ color: "white", marginTop: "10px" }}>
        <Link href="/">Go Home</Link>
      </h1>
      <h1 style={{ color: "white", fontSize: "50px", marginTop: "20px" }}>Sign Up</h1>
      <SignUp />
    </div>
  );
}
