'use client';
import React from "react";
const Countcard=(props)=>{
    const {cardcount}=props;
    return(
         <div className="w-full  mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                <a className="group flex flex-col bg-white  shadow rounded-xl hover:shadow-md transition " href="#">
                <div className="p-4 md:p-5">
                    <div className="flex items-center">
                    <div className="bg-indigo-500 text-white p-5 py-4 rounded-xl">
                      <i className="fa-solid fa-cube mt-1 shrink-0  text-2xl "></i>
                    </div>
                    <div className="grow ml-5">
                       <p className="text-sm text-gray-500">
                        Categories
                        </p>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 ">
                        {cardcount?cardcount.questionStats?.totalcategory:0}
                        </h3>
                      
                    </div>
                    </div>
                </div>
              </a>
              <a className="group flex flex-col bg-white  shadow rounded-xl hover:shadow-md transition " href="#">
                <div className="p-4 md:p-5">
                    <div className="flex items-center">
                    <div className="bg-rose-500 text-white p-5 py-4 rounded-xl">
                      <i className="fa-solid fa-cubes mt-1 shrink-0  text-2xl"></i>
                    </div>
                    <div className="grow ml-5">
                       <p className="text-sm text-gray-500">
                         Sub Categories
                        </p>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 ">
                        {cardcount?cardcount.questionStats?.totalsubcategory:0}
                        </h3>
                      
                    </div>
                    </div>
                </div>
              </a>
              <a className="group flex flex-col bg-white  shadow rounded-xl hover:shadow-md transition " href="#">
                <div className="p-4 md:p-5">
                    <div className="flex items-center">
                    <div className="bg-yellow-500 text-white p-5 py-4 rounded-xl">
                      <i className="fa-solid fa-circle-question mt-1 shrink-0  text-2xl"></i>
                    </div>
                    <div className="grow ml-5">
                       <p className="text-sm text-gray-500">
                       Questions
                        </p>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 ">
                        {cardcount?cardcount.questionStats?.totalquestions:0}
                        </h3>
                      
                    </div>
                    </div>
                </div>
              </a>
              <a className="group flex flex-col bg-white  shadow rounded-xl hover:shadow-md transition " href="#">
                <div className="p-4 md:p-5">
                    <div className="flex items-center">
                    <div className="bg-green-500 text-white p-5 py-4 rounded-xl">
                      <i className="fa-solid fa-users mt-1 shrink-0  text-2xl"></i>
                    </div>
                    <div className="grow ml-5">
                       <p className="text-sm text-gray-500">
                       Users
                        </p>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 ">
                         {cardcount?cardcount.totalUsers:0}
                        </h3>
                      
                    </div>
                    </div>
                </div>
              </a>
            </div>
        </div>
    )
}
export default Countcard;