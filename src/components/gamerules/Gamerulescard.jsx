"use client"

import { useRouter } from "next/navigation"

const Gamerulescard=()=>{
    const router=useRouter()
    return(

        <div className="bg-white py-6 px-8 lg:px-14 rounded-3xl drop-shadow-xl shadow-xl  relative flex flex-col items-center justify-center">
         
            <div className="absolute -top-6 py-3 px-6  align-middle grow text-center bg-yellow-500  text-white drop-shadow-xl shadow-xl rounded-xl text-xl font-semibold flex items-center">
               Game Rules
            </div>
            <div className="my-5 text-left w-full">
               <div>
                <ul className="text-sm mb-4">
                    <li className=" font-medium">Levels and Questions:</li>
                    <li className="text-gray-600">There are 5 levels, each with 5 stages.</li>
                    <li className="text-gray-600">Each stage has 20 multiple-choice questions (MCQs).</li>
                </ul>
                <ul className="text-sm mb-4">
                    <li className=" font-medium">Advancing to the Next Stage: </li>
                    <li className="text-gray-600">Answer at least 10 questions correctly to move to the next stage.</li>
                </ul>
                <ul className="text-sm mb-4">
                    <li className=" font-medium">Lives: </li>
                    <li className="text-gray-600">You begin with 5 lives.</li>
                    <li className="text-gray-600">Lose a life if you don`t get 10 questions right.</li>
                </ul>
                <ul className="text-sm mb-4">
                    <li className=" font-medium">Points and Treasure: </li>
                    <li className="text-gray-600">If you lose all your lives, no worries! You won`t lose, but 20 points will be taken from your treasure for each game you don`t win.</li>
                    <li className="text-gray-600">Win every stage, and you earn a point for each correct answer. For example, if you get 12 questions correct, 12 points will be added to your treasure chest.</li>
                    <li className="text-gray-600">Think of your points as a magical treasure chest!</li>
                </ul>
                <ul className="text-sm">
                    <li className=" font-medium">Earning Points:</li>
                    <li className="text-gray-600">Earn points by learning and answering questions.</li>
                    <li className="text-gray-600 mb-5">Refer friends or make a payment to earn extra points for your treasure.</li>
                    <li className="text-gray-600">Embark on your journey to accumulate points and unlock the mysteries of knowledge! </li>
                </ul>
               </div>
            </div>
            <div className="text-center mt-5">
          <button
            type="button"
            onClick={()=>router.push('/start-game/levels')}
            className="relative inline-flex bg-green-700 text-white items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out   rounded-xl group w-auto"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-700 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)">
              Accept
            </span>
            <span className="relative invisible">Button Text</span>
          </button>
        </div>
        </div>
    )
}
export default Gamerulescard