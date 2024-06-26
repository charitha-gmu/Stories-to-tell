import React, { useState, useEffect, useContext, createContext } from 'react';

export const SidebarContext = createContext();

// eslint-disable-next-line react/prop-types
export function SidebarProvider({ children, defaultItem }) {
    const [currentItem, setCurrentItem] = useState(defaultItem);
    useEffect(() => {
        if (defaultItem !== currentItem) {
            return setCurrentItem(defaultItem);
        }
    }, [currentItem, defaultItem]);
    return (
        <SidebarContext.Provider value={{ currentItem, setCurrentItem }}>
            {children}
        </SidebarContext.Provider>
    );
}

export const useSidebar = ({ isCollapsible, item, items = [] } = {}) => {
    const { currentItem, setCurrentItem } = useContext(SidebarContext);
    const isActive = item === currentItem || items.includes(currentItem);
    const [isExpanded, setIsExpanded] = useState(isActive);

    useEffect(() => {
        if (!isActive && isExpanded) {
            return setIsExpanded(false);
        }
        if (isActive && !isExpanded) {
            return setIsExpanded(true);
        }
    }, [currentItem]);

    const onItemClick = () => {
        if (!isCollapsible) {
            setCurrentItem(item);
        }
        setIsExpanded((prev) => !prev);
    };

    return {
        isExpanded,
        isActive,
        onItemClick,
    };
};
