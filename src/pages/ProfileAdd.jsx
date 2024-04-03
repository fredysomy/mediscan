import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
function ProfileAdd() {
  // State hooks for each form field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [healthProblems, setHealthProblems] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        history.push("/login");
      }
      setUserData(user);

      // Construct the query using the 'email' field
    });
  }, []);
  const createprofile = async () => {
    try {
      const docRef = await addDoc(collection(db, "profiles"), {
        name: name,
        email: userData.email,
        address: address,
        phno: phoneNumber,
        bg: bloodGroup,
        age: parseInt(age, 10), // Store age as a number
        sex: sex,
        health: healthProblems,
        medications: [],
        consultations: [],
        prescriptions: [],
      });
      if (docRef.id) {
        window.location.href = "/user/profileuser";
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const inputClasses =
    "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const btnClasses =
    "w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Create Profile</h2>
      <div className="max-w-md mx-auto my-10 ">
        <form className="space-y-4 flex flex-col">
          <input
            className={inputClasses}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={inputClasses}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={inputClasses}
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className={inputClasses}
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className={inputClasses}
            type="text"
            placeholder="Blood Group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
          <input
            className={inputClasses}
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <select
            className={inputClasses}
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <textarea
            placeholder="Health Problems"
            value={healthProblems}
            onChange={(e) => setHealthProblems(e.target.value)}
            className="input"
          ></textarea>
          <button
            className={btnClasses}
            onClick={(e) => {
              e.preventDefault();
              createprofile();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

// Basic input and button styles using Tailwind CSS

export default ProfileAdd;
