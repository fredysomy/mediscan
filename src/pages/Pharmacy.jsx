import React ,{useState}from "react";
import "./styles.css"; // Import your CSS file for styling
import backgroundImage from "./images.jpeg";
import { QrReader } from "react-qr-reader";

const Pharmacy = () => {
  const [data, setData] = useState("No result");
  const [isRecording, setIsRecording] = useState(true);
  const [uData, setUData] = useState();
  const [delayScan, setDelayScan] = useState(500);
  const [prescriptions, setPrescriptions] = useState([]);
  const [nameofDoc, setNameofDoc] = useState();
  const inputClasses =
    "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const addPrescription = () => {
    setPrescriptions([
      ...prescriptions,
      {
        medicine: "",
        quantity: "",
        schedule: "",
        reason: "",
        isPurchased: false,
      },
    ]);
  };
  const storeData = async () => {
    const url = "http://localhost:3001/presupdate";
    let newData = {
      ...uData,
      prescriptions: [{ name: nameofDoc, p: prescriptions }],
    };
    console.log(newData);
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ qrrr: data, profiledata: newData }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setUData(data);
      window.location.href = "/doctor";
    } catch (error) {
      console.error(error);
    }
  };

  const updatePrescription = (index, field, value) => {
    const newPrescriptions = [...prescriptions];
    newPrescriptions[index][field] = value;
    setPrescriptions(newPrescriptions);
  };

  const fetchDataFromBackend = async (ddd) => {
    const url = "http://localhost:3001/decrypt";
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: `{"qrrr":"${ddd}"}`,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setUData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        {/* Left column */}
        <div className="left-column">
          <h1>SCAN THE QR CODE</h1>

          <QrReader
            scanDelay={delayScan}
            facingMode={"environment"}
            onResult={(result) => {
              if (result?.text.length > 5) {
                setData(result?.text);
                setDelayScan(false);

                fetchDataFromBackend(result?.text);
              }
            }}
            style={{ width: "100%" }}
            legacyMode={true}
          />
        </div>

        <div className="right-column">
          {uData?.prescriptions?.length > 0 ? (
            uData.prescriptions.filter((prescription) => !prescription.isPurchased).map((prescription, index) => (
              <div
                key={index}
                className="border-2 border-blue-500 rounded-lg p-4 m-2"
              >
                <h3 className="text-blue-500 font-bold text-lg">
                  Doctor: {prescription.name}
                </h3>
                {prescription.p.map((p, i) => (
                  <div key={i} className="border-t border-gray-200 pt-2">
                    <p className="text-gray-700">
                      <span className="font-bold">Medicine:</span> {p.medicine}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold">Reason:</span> {p.reason}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold">Quantity:</span> {p.quantity}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold">Schedule:</span> {p.schedule}
                    </p>
                    {console.log(p,i)}
                    <p className="text-gray-700">
                      <input 
                      type="checkbox" 
                      checked={p.isPurchased} 
                    
                      onChange={(e) => {
                        updatePrescription(i, 'isPurchased', !e.target.checked);
                      }}
                      />
                      <span className="ml-2">Purchased</span>
                    </p>
                    </div>
                  ))}
                  </div>
                ))
                ) : (
                <p className="text-red-500 font-bold">
                  No previous prescriptions found
                </p>
                )}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addPrescription}>Update</button>
              </div>
              </div>
            </>
            );
};

export default Pharmacy;
