import React, { useState, useEffect, useRef} from 'react';
import {useTheme} from 'next-themes';
import {MdOutlineDarkMode, MdOutlineLightMode} from 'react-icons/md';

interface ThemeToggleIconProps {
    mounted: boolean;
}

const ThemeToggleIcon: React.FC<ThemeToggleIconProps> = ({mounted})=>{
    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(mounted){
        return (
            <>{currentTheme === "dark" ? <MdOutlineDarkMode onClick={()=>setTheme('light')}/>:<MdOutlineLightMode onClick={()=>setTheme('dark')}/>}</>
         )
    }

    return null;
   
}

export default ThemeToggleIcon;