'use client'

import styles from './index.module.css'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { RxDashboard } from "react-icons/rx";
import { IoCalendarOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";



function Menu(){
    const [activeItem, setActiveItem] = useState("Dashboard");

    const pathname = usePathname();

    const menuItems = [
      { name: "Dashboard", icon: <RxDashboard />, path: "/dashboard" },
      { name: "Eventos", icon: <IoCalendarOutline />, path: "/events" },
      { name: "Equipes", icon: <RiTeamLine />, path: "/equipes" },
      { name: "Inscrições", icon: <AiOutlineTeam />, path: "/inscricoes" },
    ];

    return(
        <div className={styles.menu}>
            <div className={styles.content_top}>
                <img className={styles.logo} src="/icon.svg" alt="" />

                <div className={styles.content_list}>
                    <p className={styles.section_title}>Menu</p>
                    <ul className={styles.list}>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={`${styles.li} ${
                            pathname === item.path ? styles.active : ""
                            }`}>
                                <Link href={item.path} className={styles.link}>
                                <div className={styles.icon}>{item.icon}</div>
                                <p className={styles.text}>{item.name}</p>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.content_bottom}>
                <div className={styles.perfil}>
                    <div>

                    </div>
                    <div>
                        <p className={styles.name}>Isac Joestar</p>
                        <p className={styles.adm}>Adiministrador</p>
                    </div>
                </div>

                <div className={styles.config}>

                </div>
                <div className={styles.exit}>

                </div>
            </div>
        </div>
    )
}

export default Menu