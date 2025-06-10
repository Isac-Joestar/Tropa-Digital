'use client'
import { usePathname } from "next/navigation";

import {
  MenuWrapper, SectionTitle, ListItem, NavLink, Icon,
  PhotoWrapper, Name, Role, ConfigItem, ExitItem
} from "./styles";
import styles from './index.module.css'

import { RxDashboard } from "react-icons/rx";
import { IoCalendarOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam, AiOutlinePoweroff } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

function Menu() {

    const pathname = usePathname();

    const menuItems: { name: string; icon: React.ReactNode; path?: string }[] = [
      { name: "Dashboard", icon: <RxDashboard /> },
      { name: "Eventos", icon: <IoCalendarOutline />, path: "/events" },
      { name: "Equipes", icon: <RiTeamLine /> },
      { name: "Inscrições", icon: <AiOutlineTeam /> },
    ];

  return (
    <MenuWrapper>
      <div className={styles.top_content}>
        <img className={styles.logo} src="/icon.svg" alt="Logo" />
        <div className={styles.list_container}>
          <SectionTitle>Menu</SectionTitle>
          <ul className={styles.list}>
            {menuItems.map((item) => (
              <ListItem key={item.name} $active={pathname === item.path}>
                {item.path ? (
                  <NavLink href={item.path}>
                    <Icon>{item.icon}</Icon>
                    <p className={styles.text}>{item.name}</p>
                  </NavLink>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: "10px"}}>
                    <Icon>{item.icon}</Icon>
                    <p className={styles.text}>{item.name}</p>
                  </div>
                )}
              </ListItem>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom_content}>
        <div className={styles.profile}>
          <PhotoWrapper>
            <img src="https://i.pinimg.com/736x/25/98/86/2598860c31b0e9aee5a520d1b08a1580.jpg" alt="Perfil" />
          </PhotoWrapper>
          <div className={styles.adm_info}>
            <Name>Isac Joestar</Name>
            <Role>Administrador</Role>
          </div>
        </div>

        <ConfigItem>
          <BsPerson />
          <p>Alterar Dados</p>
        </ConfigItem>

        <ExitItem>
            <NavLink href="/">
                <AiOutlinePoweroff />
                <p>Sair</p>
            </NavLink>
        </ExitItem>
      </div>
    </MenuWrapper>
  );
}

export default Menu;
