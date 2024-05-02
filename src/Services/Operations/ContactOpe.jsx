
import toast from "react-hot-toast"
import { CONTACT_ENDPOINT } from "../api"
import { apiConnector } from "../apiConnector"



export const ContactOpe = async(formData) => {
    let toastId = toast.loading("Sending...");
    console.log("sending data: ", formData);
    const headers = {
      'Content-Type': 'multipart/form-data', 
     }
   try{
     const result = await apiConnector("POST",CONTACT_ENDPOINT,formData,headers);
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
