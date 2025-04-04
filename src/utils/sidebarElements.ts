import React from "react";
import { FaGears, FaFileImage, FaPlug, FaUsers, FaWrench } from "react-icons/fa6";
import { MdHome } from "react-icons/md";

// Type Menu
interface MenuItem {
  title: string;
  icon: React.ComponentType<any>;
  href: string;
  subMenu?: {title: string, subItems?: {subTitle: string, href: string}[], key?: string }[];
  key?: string;
}
export const Menus: MenuItem[] = [
  { title: "Home", icon: MdHome, href: '/' },
  { title: "Gestione Tecnica", 
    icon: FaWrench ,
    href: '/', 
    subMenu: [
      {
        title: "Plugin per foto",
        key: 'pluginForPhoto',
        subItems: [
          {subTitle: 'Assign IMG SKU', href: '/assign-img-sku'},
          {subTitle: 'Upload IMG via SKU',href: '/' },
          {subTitle: 'Remove IMG BG', href: '/'}
        ]
       },
      {
        title: "Plugin per SEO",
        key: 'pluginForSeo',
        subItems: [
          {subTitle: 'Optimize IMG', href: '/'},
          {subTitle: 'Yoast Prompt AI', href: '/'}
        ]
       },
      {
        title: "Plugin per GDPR",
        key: 'pluginForGdpr',
        subItems: [
          {subTitle: 'GDPR Doc Generator', href: '/'}
        ]
       }
    ], 
    key: "gestioneTecnica" },
  { title: "Gestione clienti", 
    icon: FaUsers, 
    href: '/',
    subMenu: [
      {
        title: "General",
        key: 'general',
        subItems: [
         {subTitle: 'GDPR Doc Generator', href: '/'}
        ]
       },
       {
        title: "Security",
       },
       {
        title: "Notifications",
       }
    ], 
    key: "gestioneClienti" },
  { title: "Gestione Peronale", icon: FaFileImage, href: '/personal-management' },
  { title: "Note generali", icon: FaFileImage, href: '/' },
  { title: "Plugins", icon: FaPlug, href: '/' },
  { title: "idk", icon: FaPlug, href: '/' },
  { title: "Setting", icon: FaGears, href: '/' },
];