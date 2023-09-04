/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarProvider } from 'components/hooks/useSidebar';

function SidebarContext({ children }) {
    const { pathname } = useLocation();
    return <SidebarProvider defaultItem={pathname}>{children}</SidebarProvider>;
}
export default SidebarContext;
