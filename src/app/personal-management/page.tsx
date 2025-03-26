import TablePersonal from "@/components/PersonalManagement/TablePersonal";
import PlatformUsers from "@/components/PersonalManagement/PlatformUsers";

const PersonalManagement: React.FC = ()=>{
    return (
        <div className="p-10 flex flex-col gap-18">
            <div>
                <h2 className="text-4xl">Gestione Perosnale</h2>
                <p className='text-sm text-red-600'>In questa pagina è possibile inserire persone nel team.</p>
            </div>
            <TablePersonal />
            <PlatformUsers />
        </div>
    )
}

export default PersonalManagement;