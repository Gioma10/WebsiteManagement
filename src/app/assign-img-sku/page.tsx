'use client'
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosRefresh } from "react-icons/io";
import { Popup } from "react-leaflet";

const AssignImgSKU: React.FC = ()=>{
    const [isPopup, setIsPopup] = useState<boolean>(false)

    const handlePopup = ()=>{
        setIsPopup(prevState => !prevState)
    }
    return (
        <div className="bg-black h-full ">
            <div className="w-full p-10 text-white h-full relative">
                <div className="flex gap-8 flex-col">
                    <h2 className="text-4xl pb-2 border-b border-gray-500">Assign IMG SKU</h2>
                    <p className="text-xs text-gray-500">Carica la cartella ZIP con dentro le immagini. <br /> Una volta caricata puoi cambiare il nome dell'immagine con lo sku del prodotto corrispondente! </p>
                    <button 
                        onClick={handlePopup}
                        className="bg-green-700 cursor-pointer text-sm py-2 rounded text-center">
                        Carica la cartella ZIP
                    </button>

                    {isPopup && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md flex items-center justify-center">
                            {/* 🔹 Popup */}
                            <div className="p-4 bg-black border border-gray-600 rounded-lg shadow-lg">
                                <div className="flex items-center justify-between border-b border-gray-600 py-2">
                                    <h3 className="text-2xl">Carica cartella ZIP</h3>
                                    <IoMdClose onClick={handlePopup} className="cursor-pointer" />
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <p>Seleziona cartella ZIP:</p>
                                    <label htmlFor="fileInput" className="border border-gray-600 px-1 cursor-pointer py-3">
                                        <span className="p-1 bg-white text-black mx-2">Scegli il file</span>
                                        <input type="file" id="fileInput" className="file:hidden" />
                                    </label>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <button className="py-2 text-lg rounded flex justify-center items-center bg-gray-700">
                                        <IoIosRefresh />
                                    </button>
                                    <button className="py-2 col-span-2 rounded bg-green-700 font-bold">Invia</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AssignImgSKU;