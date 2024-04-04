import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col h-screen ">
            <main className="flex-grow justify-around flex flex-col p-20">
                <div className="container mx-auto grid grid-cols-2 gap-4 -mt-10">
                    <div className="col-span-1 flex flex-col justify-center items-center">
                        {/*<h1 className="text-3x1 font-bold text-center mb-6">MediScan:</h1>*/}
                        <p className="text-4xl font-semibold text-center mb-6 text-justify">
                        
                            <span className="text-blue-500 text-5xl">MediScan:</span> Spearheading healthcare innovation, putting patient data at your fingertips with every QR flick
                        </p>
                        <div className="flex justify-center items-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white fond-bold py-2 px-4 rounded-full mr-4" onClick={()=>{window.location.href="/doctor"}}>Hospital</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white fond-bold py-2 px-4 rounded-full mr-4"  onClick={()=>{window.location.href="/user/profileuser"}}>Patient</button>
                        </div>
                    </div>        
                    
                    <div className="col-span-1 flex justify-center items-center">
                        <img src="https://media.istockphoto.com/id/1358621997/vector/qr-code-smartphone-scanner-linear-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=ePiWZHIbseW9GwmM498rRKC_Dvk8IsKv41nqnC8iZhQ=" className="max-w-full h-auto" />
                        
                    </div>

                </div>

            </main>
            <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024.MediScan  All rights reserved</p>
                </div>
            </footer>

            
        </div>
    );
};

export default Home;