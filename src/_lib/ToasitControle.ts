import { toast } from "react-toastify";

const config = {
    autoClose: 5000,
    closeOnClick: true,

}


const notify = (message: string) => toast.error(message, config);

export function ShowToasit_Error(message: string) {
    notify(message);

}
export function ShowToasit_Success(message: string) {
    notify(message);

}