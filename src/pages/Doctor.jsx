import React, { useState, useEffect, useRef } from "react";
import "./styles1.css"; // Import CSS file for styling
import { QrReader } from "react-qr-reader";

const Doctor = () => {
  const [data, setData] = useState("No result");
  const [isRecording, setIsRecording] = useState(true);
  const [uData, setUData] = useState();
  const [delayScan, setDelayScan] = useState(500);
  const [prescriptions, setPrescriptions] = useState([]);
  const [nameofDoc, setNameofDoc] = useState();
  const [cause, setCause] = useState();
  const [diagnosis, setDiagnosis] = useState();
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
  const storeData = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/presupdate";
    let newData = {
      ...uData,
      prescriptions: [{ name: nameofDoc, p: prescriptions }],
      consultations: [{ cause: cause, diagnosis: diagnosis }],
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
      <div className="flex flex-row">
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
          <h2 className="pat">
            <strong>PATIENT DETAILS</strong>
          </h2>
          {data}
          <p>NAME: {uData?.name || ""}</p>
          <p>AGE: {uData?.age || ""}</p>
          <p>ADDRESS: {uData?.address || ""}</p>
          <p>PHONE NO: {uData?.phno || ""}</p>
          <p>SEX: {uData?.sex || ""}</p>
          <input
            className={inputClasses}
            value={nameofDoc}
            placeholder="Name of doctor"
            onChange={(e) => {
              setNameofDoc(e.target.value);
            }}
          />
          <h3 className="mt-5">Prescriptions</h3>
          {prescriptions.map((prescription, index) => (
            <div key={index}>
              <input
                className={inputClasses}
                value={prescription.medicine}
                onChange={(e) =>
                  updatePrescription(index, "medicine", e.target.value)
                }
                placeholder="Medicine Name"
              />
              <input
                className={inputClasses}
                value={prescription.quantity}
                onChange={(e) =>
                  updatePrescription(index, "quantity", e.target.value)
                }
                placeholder="Quantity"
              />
              <input
                className={inputClasses}
                value={prescription.reason}
                onChange={(e) =>
                  updatePrescription(index, "reason", e.target.value)
                }
                placeholder="Reason"
              />
              <input
                className={inputClasses}
                value={prescription.schedule}
                onChange={(e) =>
                  updatePrescription(index, "schedule", e.target.value)
                }
                placeholder="When to eat (1-0-1)"
              />
            </div>
          ))}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addPrescription}
          >
            Add Prescription
          </button>
          <h3 className="mt-5">Diagnosis</h3>
          <input
            className={inputClasses}
            value={cause}
            placeholder="Cause"
            onChange={(e) => {
              setCause(e.target.value);
            }}
          />
          <textarea
            className={inputClasses}
            value={diagnosis}
            placeholder="Diagnosis"
            onChange={(e) => {
              setDiagnosis(e.target.value);
            }}
          />
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            storeData(e);
          }}
        >
          Finish
        </button>
        </div>
        
      </div>
      <div className="flex flex-row w-screen ">
        <div className="w-1/2">
          {" "}
          <h2 className="text-blue-500 font-bold text-3xl">Prescriptions</h2>
          {uData?.prescriptions?.length > 0 ? (
            uData.prescriptions.map((prescription, index) => (
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
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className="text-red-500 font-bold">
              No previous prescriptions found
            </p>
          )}
        </div>
        <div className="w-1/2">
          <h2 className="text-blue-500 font-bold text-3xl"> Diagnosis</h2>
          {uData?.consultations?.length > 0 ? (
            uData.consultations.map((consultations, index) => (
              <div
                key={index}
                className="border-2 border-blue-500 rounded-lg p-4 m-2"
              >
                <div className="border-t border-gray-200 pt-2">
                  <p className="text-gray-700">
                    <span className="font-bold">Cause:</span>{" "}
                    {consultations.cause}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Diagnosis:</span>{" "}
                    {consultations.diagnosis}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-500 font-bold">
              No previous diagnosis found
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Doctor;
