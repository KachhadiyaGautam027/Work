import React from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const PaymentProcess = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col h-full">
          <div
            className=" p-8 h-[296px]"
            style={{
              background:
                "linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)",
            }}
          >
            <h2 className="font-medium text-2xl text-white">
              Payment Dashboard
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcess;
