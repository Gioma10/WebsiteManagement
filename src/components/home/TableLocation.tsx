const TableClient: React.FC = ()=>{

    const customers: string[] = ['ImEdge', 'Gioielleria La Rocca', 'TresJolie Boutique', 'Lo Cicero', 'Ciotta Moda & Sport', 'Comune di Ravanusa', 'Prestige Outlet Campobello di Licata', 'Millepiedi', 'Malvasia B&B']
    return (
        <div className=" border border-gray-300 shadow-2xl">
            <h3 className="w-full border-b border-gray-300 px-3 py-3">Localizzazione dei clienti</h3>
            <div className="p-4">
                <table className="w-full p-5">
                    <thead>
                        <tr className=" border-b">
                            <th className="border-b text-start p-2">Azienda</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index)=>{
                            return (
                                <tr key={index}>
                                    <td className=" border-gray-300 border-b p-2 text-xs">{customer}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableClient;