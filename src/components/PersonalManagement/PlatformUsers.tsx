import { CiUser } from "react-icons/ci";
import { MdCircle } from "react-icons/md";

const PlatformUsers: React.FC = ()=>{
    return (
        <div className="shadow-[0_0_15px_rgba(0,0,0,0.3)] p-5">
            <h3 className="text-center text-xl font-bold mb-20">Utenti in piattaforma</h3>
            <div className="flex-col flex shadow-[0_0_15px_rgba(0,0,0,0.2)]">

                {/* top part  */}
                <div className=" flex gap-10 p-5 relative">
                    {/* online alert  */}
                    <div className="absolute top-4 right-4 flex gap-1 p-1 bg-green-700 text-white text-sm rounded justify-center items-center">
                        <MdCircle />
                        <p>Online</p>
                    </div>

                    {/* icon profile  */}
                    <div className="flex items-center">
                        <div className="rounded-full p-2 border">
                            PG
                        </div>
                    </div>

                    {/* description  users*/}
                    <div>
                        <div className="flex gap-2 items-center">
                            <CiUser />
                            <h5 className="text-lg">Puleri Giuseppe</h5>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs">Amministratore Europa</p>
                            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime repudiandae incidunt molestias animi enim! Architecto vel quod unde quibusdam, quos quasi voluptate alias totam velit exercitationem dolorem magnam earum.</p>
                            
                            {/* Progress bar  */}
                            <div className="gap-1">
                                <div className="w-full h-2 rounded-full bg-gray-200 relative">
                                    <div className="absolute bottom-0 bg-green-500 w-6/10 h-full rounded-full" />
                                </div>
                                <p className="text-xs text-end">Puoi gestire massimo 10 clienti: 6</p>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* bottom part  */}
                <div className="grid grid-cols-5 w-full justify-around p-4 text-sm">
                    <div className=" flex flex-col justify-center items-center">
                        <p className="text-green-600">6</p>
                        <p className="font-bold">Già clienti</p>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <p className="text-blue-600">3</p>
                        <p className="font-bold">In trattativa</p>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <p className="text-yellow-400">0</p>
                        <p className="font-bold">Da contattare</p>
                    </div>
                    <div className="text-gray-500 flex flex-col justify-center border-x items-center">
                        <p>2</p>
                        <p>Privilegi</p>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <p>2025/03/21 16:28:06</p>
                        <p className="text-gray-500">Ultimo acesso</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PlatformUsers;