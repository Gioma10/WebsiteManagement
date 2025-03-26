import React from "react";

const TablePersonal: React.FC = ()=>{
    return (
        <div className="p-10 shadow-[0_0_15px_rgba(0,0,0,0.3)] text-sm">
            <table className="w-full">
                <thead className="border-b">
                    <tr>
                        <th className="text-start">Aggiungi</th>
                        <th className="text-start">Username</th>
                        <th className="text-start">Password</th>
                        <th className="text-start">Nominativo</th>
                        <th className="text-start">Privilegi</th>
                        <th className="text-start">Mansione</th>
                        <th className="text-start">Email</th>
                        <th className="text-start">Data inseritmento</th>
                        <th className="text-start">Presentazione</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-400">
                        <td className="w-44 p-2">/</td>
                        <td className="w-44">pippo</td>
                        <td className="w-44"> ....... </td>
                        <td className="w-44">Name</td>
                        <td className="w-44">2</td>
                        <td className="w-44">Amministratore</td>
                        <td className="w-44">qualcosa@gmail.com</td>
                        <td className="w-44">26/03/2025</td>
                        <td className="w-44">lorem ipsum...</td>
                    </tr>
                    <tr className="border-b border-gray-400">
                        <td className=" p-2">/</td>
                        <td>pippo</td>
                        <td> ....... </td>
                        <td>Name</td>
                        <td>1</td>
                        <td>Fotografo</td>
                        <td>qualcosa@gmail.com</td>
                        <td>26/03/2025</td>
                        <td>lorem ipsum...</td>
                    </tr>
                    <tr className="border-b border-gray-400">
                        <td className=" p-2">/</td>
                        <td>pippo</td>
                        <td> ....... </td>
                        <td>Name</td>
                        <td>1</td>
                        <td>Gestione server</td>
                        <td>qualcosa@gmail.com</td>
                        <td>26/03/2025</td>
                        <td>lorem ipsum...</td>
                    </tr>
                    <tr className="border-b border-gray-400">
                        <td className=" p-2">/</td>
                        <td>pippo</td>
                        <td> ....... </td>
                        <td>Name</td>
                        <td>1</td>
                        <td>Adetto vendite</td>
                        <td>qualcosa@gmail.com</td>
                        <td>26/03/2025</td>
                        <td>lorem ipsum...</td>
                    </tr>
                    <tr className="border-b border-gray-400">
                        <td className=" p-2">/</td>
                        <td>pippo</td>
                        <td> ....... </td>
                        <td>Name</td>
                        <td>1</td>
                        <td>Collaboratore a campobello</td>
                        <td>qualcosa@gmail.com</td>
                        <td>26/03/2025</td>
                        <td>lorem ipsum...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TablePersonal;