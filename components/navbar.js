import styles from "../styles/components/navbar.module.css";
import Link from "next/link";
import { SignIn, SignUp, UserButton, useUser, SignedIn, SignedOut } from "@clerk/nextjs";

export default function navbar() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search" className="input input-bordered  input-secondary" style={{ width: "258px" }} />
      <h1 className={styles.title}>
        <Link href="/">MemeDriod</Link>
      </h1>
      <SignedIn>
        <div style={{ marginLeft: "225px" }}>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
      <SignedOut>
        <div style={{ marginLeft: "142px" }}>
          <button className="btn btn-outline btn-warning" onClick={() => window.my_modal_4.showModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Sign in
          </button>

          <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box" style={{ backgroundColor: "transparent" }}>
              <SignIn />
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </SignedOut>
    </div>
  );
}
