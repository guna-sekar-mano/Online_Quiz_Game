'use client'
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input} from "@nextui-org/react";
import { useState } from "react";
import { apiinvitefriends } from "@/services/apiinvite/apiinvite";
const InviteForm=(props)=>{
  const {isOpen,onOpenChange, onClose} = props;
  const [formdata,setFormdata]=useState({});
  const handleinvite=async(e)=>{
    e.preventDefault();
    const resemail=await apiinvitefriends(formdata)
    resemail.status==='Email Sent'?onClose():alert("Already Email exists")
  }
  return(

<div>
    
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
export default InviteForm;