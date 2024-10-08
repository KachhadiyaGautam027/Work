import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import StatisticsChart from "../../Components/StatisticsChart";
import BillingPayments from "../../Components/BillingPayments";
import { FaUserInjured, FaUserMd, FaCalendarCheck } from "react-icons/fa"; // Importing icons
import PatientsSummary from "../../Components/PatientsSummary";
import AppointmentsList from "../../Components/AppointmentsList";

const Dashboard = () => {
  const patientData = [
    6000, 12000, 8000, 5000, 22000, 16000, 3476, 22000, 27000, 32000, 17000,
    6000,
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow ">
        <Header />
        <div className="overflow-x-auto">
          <div className="gap-4 grid md:grid-cols-3  p-4">
            {/* left  */}
            <div className="md:col-span-2 ">
              {/* Dashboard Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {/* Total Patients */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaUserInjured className="text-blue-500 text-lg" />{" "}
                    {/* Icon for Total Patients */}
                    <div className="md:grid">
                      <span>Total Patients</span>
                      <span className="font-bold">1500</span>
                    </div>
                  </div>
                </div>

                {/* Total Doctors */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaUserMd className="text-green-500 text-lg" />{" "}
                    {/* Icon for Total Doctors */}
                    <div className="md:grid">
                      <span>Total Doctors</span>
                      <span className="font-bold">500</span>
                    </div>
                  </div>
                </div>

                {/* Total Appointments */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaCalendarCheck className="text-purple-500 text-lg" />{" "}
                    {/* Icon for Total Appointments */}
                    <div className="md:grid">
                      <span>Total Appointments</span>
                      <span className="font-bold">1080</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Patients Statistics with Graph */}
              <div>
                <StatisticsChart patientData={patientData} />
              </div>
            </div>
            {/* right  */}
            <div className="grid gap-4">
              {/* Billing & Payments */}
              <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
                <BillingPayments />
              </div>
            </div>
          </div>
          <div className="gap-4 grid md:grid-cols-3 overflow-x-auto p-4">
            <div className="md:col-span-2">
              {/* Today's Appointments List */}
              <div className="bg-white">
                {/* <div className="bg-white p-6 rounded-lg shadow mb-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Today's Appointments
                  </h3>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>Roger Lubin</div>
                      <div>10:00 AM</div>
                      <div className="text-sm text-gray-500">Online</div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>Jakob Kongstad</div>
                      <div>10:00 AM</div>
                      <div className="text-sm text-gray-500">Online</div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>Roger Lubin</div>
                      <div>10:00 AM</div>
                      <div className="text-sm text-gray-500">Online</div>
                    </div>
                  </div>
                  <button className="mt-4 text-blue-500">View All</button>
                </div> */}
                <AppointmentsList />
              </div>
            </div>
            <div className="grid">
              {/* Patients Summary */}
              {/* <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Patients Summary</h3>
                <div className="flex items-center justify-between">
                  <span>Total Patients</span>
                  <span className="font-bold">100</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>New Patients</span>
                  <span className="font-bold">35</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>Old Patients</span>
                  <span className="font-bold">65</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>Total Bills</span>
                  <span className="font-bold">150</span>
                </div>
              </div> */}
              <PatientsSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
