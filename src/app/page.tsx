'use client'
import Cards from '../components/home/Cards'
import React, { useEffect, useState } from "react";


const Home: React.FC = ()=>{
     // Stato per memorizzare i dati caricati dal JSON
    // const [data, setData] = useState<any[]>([]);

    // useEffect(()=>{
    //     const fetchData = async ()=>{
    //         try {
    //             // Esegui la richiesta per caricare il file JSON
    //             const response = await fetch('/users.json');
    //             if (!response.ok) {
    //               throw new Error('Errore nel caricamento del file JSON');
    //             }
    //             const jsonData = await response.json();
    //             setData(jsonData); // Salva i dati nel stato
    //           } catch (error: any) {
    //             // setError(error.message); // Gestisci l'errore
    //           } finally {
    //         //     setLoading(false); // Imposta loading a false una volta terminato
    //            }
    //     }
    //     fetchData()
    // },[])

    // console.log(data);
    
    return (
        <div className="p-10 flex flex-col gap-10">
            <div>
                <h2 className="text-6xl">Home</h2>
                <p>Benvenuto sul nostro gestionale...</p>
            </div>
            <Cards />
        </div>
    ) 
}

export default Home;