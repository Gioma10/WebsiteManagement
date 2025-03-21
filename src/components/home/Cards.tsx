import React from "react"
import { FaCalendarAlt, FaUserPlus, FaUserCheck, FaUserClock } from "react-icons/fa";


interface CardsArray {
    title: string,
    value: string,
    color: string
    icon: React.ReactNode,
}
const Cards: React.FC = () =>{


    const cards: CardsArray[] = [
        {
            title: 'Inizio Attività',
            value: '1 mese',
            color: 'blue-600',
            icon: <FaCalendarAlt />,
        },
        {
            title: 'Clienti adesso',
            value: '9 su 40',
            color: 'green-800',
            icon: <FaUserCheck />,
        },
        {
            title: 'Da contattare',
            value: '2',
            color: 'red-700',
            icon: <FaUserPlus/>,
        },
        {
            title: 'In Trattativa',
            value: '3',
            color: 'yellow-500',
            icon: <FaUserClock />,
        }
    ]
    return (
        <div className="grid grid-cols-4 gap-5">
            {cards.map((card, index)=>{


                return (
                    <div key={index} className={`flex items-center gap-4 shadow shadow-${card.color} rounded-xl px-4 py-2`}>
                        <div className={`p-3 shadow-2xl rounded-lg text-white bg-${card.color}`}>
                            {card.icon}
                        </div>
                        <div className="flex flex-col ">
                            <span className="opacity-40 text-xs">{card.title}</span>
                            <span>{card.value}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;