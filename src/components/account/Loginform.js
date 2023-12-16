"use client"
import Image from "next/image";
import Link from "next/link";
const Loginform = (props) => {
    const {handlechange,userlogin}=props
  return (
    <section>
    <div className="max-w-[35rem] w-full mx-auto px-4  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">
            <div className=" p-4 md:p-10 animate-fade-left">
                <div className="mb-5 text-center flex justify-center">
                  <Image src={`/images/icons/boy.png`}  className="flex-shrink-0  w-[8rem]  text-center" width={150} height={150}  priority={true} alt=""  />
                </div>
      <form onSubmit={userlogin}>
        <div className="mb-2">
          <div className="relative">
            <input
              type="email"
              id="email"
              name="Email"
              onChange={handlechange}
              placeholder="Email"
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%) w-full px-3 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-950  shadow-2xl text-white outline-none"
              required
            />
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none z-20 pl-4">
              <Image
                src={`/images/icons/mail.png`}
                className="flex-shrink-0  w-[2rem]  text-center "
                width={100}
                height={100}
                alt=""
                decoding="async" priority={true}
              />
            </div>
          </div>
        </div>
        <div className="mb-2">
          <div className="relative">
            <input
              type="password"
              id="Password"
              name="Password"
              onChange={handlechange}
              placeholder="Password"
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%) w-full px-3 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-950  shadow-2xl text-white outline-none"
              required
            />
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none z-20 pl-4">
              <Image
                src={`/images/icons/key.png`}
                className="flex-shrink-0  w-[2rem]  text-center "
                width={100}
                height={100}
                alt=""
                decoding="async" 
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <button
            type="submit"
            href="#_"
            className="relative inline-flex bg-red-700 text-white items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out   rounded-xl group w-auto"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-700 group-hover:translate-x-0 ease">
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
              SIGN IN
            </span>
            <span className="relative invisible">Button Text</span>
          </button>
        </div>
      </form>
      <div className="mt-3 text-center">
                          <Link href={'/account/register'} className="text-xs text-blue-950 hover:text-blue-500">New to SKILL GAMER? Create an account</Link>
                      </div>
                  </div>
              </div>
          </div>
     </section>
  );
};
export default Loginform;
