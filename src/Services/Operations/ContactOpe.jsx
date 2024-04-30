
import toast from "react-hot-toast"
import { CONTACT_ENDPOINT } from "../api"
import { apiConnector } from "../apiConnector"



export const ContactOpe = async(data) => {
    let toastId = toast.loading("Sending...");
    
    console.log("sending data: ", data);
    console.log("first name in contact ope: ",data.firstName);
    
   try{
     const result = await apiConnector("POST",CONTACT_ENDPOINT,data);
     toast.success("Message Sent");
     console.log("result: ",result);
   }
   catch(err){
     console.log("Error: ",err);
     toast.error("Message could not send");
   }
   toast.dismiss(toastId);
   /* return response; */
}
