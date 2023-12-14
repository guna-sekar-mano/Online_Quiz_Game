
'use client'
import {Card, CardBody} from "@nextui-org/react";
const Lowpoints=()=>{
  return(
    <div>
            <Card className="shadow-xl">
              <CardBody className=" font-poppins text-center text-red-800 font-semibold">
                <p>You got low points</p>
              </CardBody>
            </Card>
    </div>
  )
}
export default Lowpoints