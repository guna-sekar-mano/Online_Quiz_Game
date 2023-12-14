'use client'
import Image from "next/image";
import useAuthStore from "../store/useAuthStore";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input,Tooltip} from "@nextui-org/react";
import { useState } from "react";
import { apiinvitefriends } from "@/services/apiinvite/apiinvite";
const Invitebutton=()=>{
  const {isAuthenticated}=useAuthStore();
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const [formdata,setFormdata]=useState({});
  const handleinvite=async(e)=>{
    e.preventDefault();
    const resemail=await apiinvitefriends(formdata)
    resemail.status==='Email Sent'?onClose():alert("Already Email exists")
  }
  return(

<div className=" bottom-0  mt-auto relative">
     {isAuthenticated&& 
       <Tooltip content="Invite your friends">
       <div className=" absolute right-8 bottom-4  lg:bottom-8 cursor-pointer" onClick={onOpen}>
         <div className="h-16 w-16 rounded-full bg-emerald-700  shadow flex flex-col text-white justify-center items-center">
          <Image src={`/images/icons/boy.png`}  className="flex-shrink-0  w-[3rem]  text-center " width={200} height={200} alt=""  />
         
         </div>
       </div>
       </Tooltip>
       }
       <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="bottom"
      >
        <ModalContent>
          {(onClose) => (
            <>
            <form onSubmit={handleinvite}>
              <ModalHeader className="flex flex-col gap-1">Invite friends</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <Image src={`/images/icons/mail.png`}  className="w-[2rem]  text-center " width={200} height={200} alt=""  />
                  }
                  label="Email"
                  placeholder="Enter your friend email"
                  variant="bordered"
                  name="Email"
                  onChange={(e)=>setFormdata({...formdata,...{Email:e.target.value}})}
                  autoComplete="off"
                  isRequired
                />
               
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                 Invite
                </Button>
              </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    
</div>

  )
}
export default Invitebutton;