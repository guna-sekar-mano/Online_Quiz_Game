'use client'
import Image from "next/image";
const Custoast=(props)=>{
    const {t,label,img,bgcolor}=props;
    return(
        <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full ${bgcolor} text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <Image
                src={img}
                className="h-10 w-10 rounded-full"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-white">
                {label}
              </p>
              
            </div>
          </div>
        </div>
      
      </div>
    )
}
export default Custoast;