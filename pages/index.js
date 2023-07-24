import styles from "../styles/pages/Home.module.css";
import Navbar from "@/components/navbar";
import Leftbar from "@/components/leftbar";
import Rightbar from "@/components/rightbar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UploadButton } from "./src/utils/uploadthing";

const BaseUrl = "http://localhost:3000/api";

export default function Home() {
  const [memes, setMemes] = useState([]);
  const [images, setImages] = useState([]);
  console.log(images);

  const titleref = useRef();

  useEffect(() => {
    getMemes();
  }, []);

  function getMemes() {
    // function that gets memes form Be
    axios
      .get(BaseUrl + "/memes")
      .then((res) => {
        setMemes(res.data.documents);
        console.log(res.data.documents);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Upload = () => {
    // function that posts memes to Be
    if (titleref.current.value) {
      axios
        .post(BaseUrl + "/memes", {
          title: titleref.current.value,
          img: images[0].fileUrl,
        })
        .then(() => {
          getMemes();
          titleref.current.value = "";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <Leftbar />
      <Rightbar />
      <div className={styles.content}>
        <SignedIn>
          <button className="btn btn-wide btn-outline btn-secondary" onClick={() => window.my_modal_3.showModal()}>
            Upload Meme
          </button>
        </SignedIn>
        <SignedOut>
          <h1 style={{ color: "white" }}>You have to be Signed In to upload memes</h1>
        </SignedOut>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box" style={{ width: "500px", height: "450px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <h1>Upload Meme</h1>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                if (res) {
                  setImages(res);
                }
                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
            <img src={images ?? images[0].fileUrl} style={{ marginTop: "20px", marginBottom: "20px", borderRadius: "10px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input type="text" placeholder="Title" className="input input-bordered  input-secondary w-full" ref={titleref} />
              <input type="text" placeholder="Tags" className="input input-bordered  input-secondary w-full" />
              <button className="btn btn-sm btn-outline btn-secondary w-full" onClick={Upload}>
                Upload
              </button>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        {memes.map((el, i) => {
          return (
            <div key={el?._id} className={styles.cont}>
              <img style={{ width: "100%", height: "400px" }} src={el?.img}></img>
              {el?.title && <div style={{ color: "white", padding: "20px", textAlign: "center" }}>{el?.title}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
