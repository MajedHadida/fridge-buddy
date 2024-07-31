import { useRef } from "react";
import { IoMdClose } from "react-icons/io";


const Success = ({onClose}) =>{
    const successRef = useRef()

    const closeSuccess = (e) =>{
        if (successRef.current === e.target){
            onClose();
        }
    }

    return(
        <div ref={successRef} onClick={closeSuccess} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            {/* Close button */}
            <div className="mt-10 flex flex-col gap-5">
            <button onClick={onClose} className="flex place-content-end"><IoMdClose size={50} className="text-white"/></button>
                <div className="bg-success rounded-xl px-20 py-10 flex flex-col gap-5 mx-4">
                    <h1 className="text-white text-5xl font-extrabold">Success</h1>
                    <p className="text-white text-4xl max-w-md">Your action was successful, but no functionality is implemented for this... yet.</p>
                </div>
            </div>
        </div>
    );
}

export default Success;