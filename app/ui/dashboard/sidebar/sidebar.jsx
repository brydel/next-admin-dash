import React from 'react'
import styles from "./sidebar.module.css"
import Image from 'next/image';

import {
    MdSpaceDashboard,
    MdPerson,
    MdSchool,
    MdPayment,
    MdBarChart,
    MdGroups,
    MdAssignment,
    MdSettings,
    MdHelp,
    MdLogout,
  } from "react-icons/md";
import MenuLink from './menuLink/menuLink';
  
  const menuItems = [
    {
      title: "Gestion",
      list: [
        {
          title: "Tableau de bord",
          path: "/dashboard",
          icon: <MdSpaceDashboard />,
        },
        {
          title: "Étudiants",
          path: "/dashboard/users",
          icon: <MdPerson />,
        },
        {
          title: "Cours",
          path: "/dashboard/cours",
          icon: <MdSchool />,
        },
        {
          title: "Paiements",
          path: "/dashboard/paiements",
          icon: <MdPayment />,
        },
      ],
    },
    {
      title: "Analytique",
      list: [
        {
          title: "Statistiques",
          path: "/dashboard/statistiques",
          icon: <MdBarChart />,
        },
        {
          title: "Rapports",
          path: "/dashboard/rapports",
          icon: <MdAssignment />,
        },
        {
          title: "Groupes",
          path: "/dashboard/groupes",
          icon: <MdGroups />,
        },
      ],
    },
    {
      title: "Utilisateur",
      list: [
        {
          title: "Paramètres",
          path: "/dashboard/parametres",
          icon: <MdSettings />,
        },
        {
          title: "Aide",
          path: "/dashboard/aide",
          icon: <MdHelp />,
        },
      ],
    },
  ];

const Sidebar = () => {
  return (
    <div className= {styles.contenair}>
        <div className={styles.user}>
            <Image className={styles.userImage} src="/noavatar.png" width="50" height="50" alt="" />
            <div className={styles.userDetail}>
            <span className={styles.username}> John Joe</span>
            <span className={styles.userTitle}>Utilisateur</span> 

        </div>

        </div>
       

    
        <ul>
        {menuItems.map(cat=> (
         <li key={cat.title} className={styles.list}>
           <span className={styles.cat}>
           {cat.title}
            
            </span>  
            {cat.list.map((item)=>(
            <MenuLink item={ item} key ={item.title}/>
            ))}
         </li>

        ))}

        </ul>
        <button className={styles.logout}>Se Deconnecter
            <MdLogout/>
            
         </button>
        
        
        </div>
      
    
  )
}

export default Sidebar
