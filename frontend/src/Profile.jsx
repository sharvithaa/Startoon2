import React from "react";
import profile from "./images/avatar.png"
import phone from "./images/phone-call (1).png"
import email from "./images/email (2).png"
import body from "./images/human-body.png"
import ortho from "./images/orthopedics.png"
import kit from "./images/first-aid-kit.png"
import histroy from "./images/medical-record.png"
export default function Profile()
{
    return(
        <>
        <div className="bg-white p-6 rounded-lg max-w-lg mx-auto shadow-lg">
           <div className="flex justify-between items-center mb-4">
             <button className="text-[#002467] font-bold text-lg" >← View patient</button>
            </div>
            <div className="border-t pt-2 mt-2">
            <div className="float-left mb-6">
                    <h1 className="text-[#021e57] text-lg">S.Meena, F/23</h1>
                    <h1 className="text-[#021e57] text-sm">Patient ID : 87 20200727153457</h1>
            </div>
            <div className="float-right" >
                <img src={profile} height='60px' width='60px'></img>
            </div>
            </div>
            <div className="bg-[#002647] rounded-3xl mt-20 p-4 mb-6 ml-12 shadow-xl w-4/5">
                 <h1 className="text-white text-lg font-semibold text-center">Goal reached</h1>
                 <div className="relative w-full h-24 flex justify-center items-center">
                    <div className="absolute inset-0 flex justify-center items-center">
                       <div className="w-32 h-16 bg-gray-300 rounded-t-full"></div>
                       <div className="absolute w-32 h-16 bg-yellow-400 rounded-t-full transform origin-bottom"></div>
                    </div>
                   <div className="absolute text-2xl font-bold text-white">40%</div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md text-sm">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="text-gray-500 w-24">Phone no.</span>
          <span className="text-black flex items-center">
            <img src={phone} height='10px' width='10px'></img>
             8022334455
          </span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-500 w-24">Mail ID</span>
          <span className="text-black flex items-center">
            <img src={email} height='15px' width='15px'></img>
            meenarabinsachin2@gmail.com
          </span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-500 w-24">Affected side</span>
          <span className="text-black flex items-center">
            <img src={body} width='15px' height='15px'></img>
            Bilateral
          </span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-500 w-24">Condition</span>
          <span className="text-black flex items-center">
            <img src={ortho} height='15px' width='15px'></img>
            Ortho
          </span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-500 w-24">Speciality</span>
          <span className="text-black flex items-center">
           <img src={kit} height='15px' width='15px'></img>
            Osteoarthritis
          </span>
        </div>
      </div>
      <div className="flex items-center border-t pt-2 mt-2">
        <span className="text-[#012e57] font-bold flex items-center mr-2">
          <img src={histroy} height='15px' width='15px'></img>
          Medical history
        </span>
        <span className="text-gray-700">Hypertension, DM, Hypothyroidism</span>
      </div>
    </div>
        </div>
        </>
    )
}