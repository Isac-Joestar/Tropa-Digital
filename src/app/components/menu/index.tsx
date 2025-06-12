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
          <nav aria-label="Menu principal">
            <ul className={styles.list}>
              {menuItems.map((item) => (
                <ListItem key={item.name} $active={pathname === item.path}>
                  {item.path ? (
                    <NavLink href={item.path} aria-label={`Ir para ${item.name}`}>
                      <Icon aria-hidden="true">{item.icon}</Icon>
                      <p className={styles.text}>{item.name}</p>
                    </NavLink>
                  ) : (
                    <button
                      type="button"
                      disabled
                      aria-label={`${item.name} (inativo)`}
                    >
                      <Icon aria-hidden="true">{item.icon}</Icon>
                      <p className={styles.text}>{item.name}</p>
                    </button>
                  )}
                </ListItem>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.bottom_content}>
        <div className={styles.profile}>
          <PhotoWrapper>
            <img src="/image/perfil.png" alt="Foto do seu perfil" />
          </PhotoWrapper>
          <div className={styles.adm_info}>
            <Name>Kaique Steck</Name>
            <Role>Administrador</Role>
          </div>
        </div>

        <ConfigItem as="button" aria-label="Alterar dados do perfil">
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
