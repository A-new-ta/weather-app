import React, { useContext } from 'react'
import cn from 'classnames';
import { ThemeContext } from '../../context/ThemeProvider';

const Layout = ({ children }) => {
    const { isDark } = useContext(ThemeContext);
    return <div className={cn('layout', { dark: isDark })}>
        {children}
    </div>
}

export default Layout