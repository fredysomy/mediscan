import React, { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import QRCode from "react-qr-code";
const Profile = () => {
  const auth = getAuth();
  const [userData, setUserData] = useState(null);
  const [profile, setProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [encKey, setEncKey] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (!user) {
        history.push("/login");
      }
      setUserData(user);
      if (user.email) {
        isDocumentPresentByEmail("profiles", user.email)
          .then((exists) => {
            console.log(exists);
            exists ? setProfile(true) : setProfile(false);
            console.log(profile);
          })
          .catch((error) => {
            console.error("Error checking document existence: ", error);
          });
        // Construct the query using the 'email' field
      }
    });
  }, []);
  async function isDocumentPresentByEmail(collectionName, email) {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    // If the querySnapshot is not empty, then the document exists
    return !querySnapshot.empty;
  }
  async function fetchEncKey() {
    const url = "http://localhost:3000/encrypt";
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: `{"token":"${userData.accessToken}"}`,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setEncKey(data)
      setShowModal(true)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1 className="font-sans text-center font-semibold text-4xl mt-10">
        Profile Page
      </h1>
      {profile ? (
        <div>
          <h2>Profile Data</h2>
          <p>{userData?.displayName}</p>
          <p>{userData?.email}</p>
          <p>{userData?.phoneNumber}</p>
          <button
            onClick={() => fetchEncKey()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Show QR Code
          </button>
          {showModal ? (
            <div className="modal">
              <div className="modal-content">
                <span onClick={() => setShowModal(false)} className="close">
                  &times;
                </span>
                <QRCode value={encKey || "s"} />
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex flex-col">
          <h2 className="font-sans text-center font-semibold text-2xl mt-10">
            No Profile Data
          </h2>
          <button
            onClick={() => {
              window.location.href = "/user/profileadd";
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto "
          >
            Create a Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
