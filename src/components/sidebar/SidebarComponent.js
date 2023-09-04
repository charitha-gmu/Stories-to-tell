import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import { IconSettings } from 'assets/icons';
import { convertSlugToUrl } from 'resources/utils';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06,
    },
});

function SidebarComponent() {
    const navigate = useNavigate();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        localStorage.removeItem('signedIn');
        navigate(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        navigate(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.home}
                title="Dashboard"
                icon={IconSettings}
                onClick={() => onClick(SLUGS.home)}
            />
            <MenuItem
                id={SLUGS.recentJobs}
                title="Recent Jobs"
                icon={IconSettings}
                onClick={() => onClick(SLUGS.recentJobs)}
            />
            <MenuItem
                id={SLUGS.createJob}
                title="Create"
                icon={IconSettings}
                onClick={() => onClick(SLUGS.createJob)}
            />
            <MenuItem
                id={SLUGS.signup}
                title="Master Data"
                icon={IconSettings}
                // onClick={() => onClick(SLUGS.recentJobs)}
            />
            <div className={classes.separator}></div>

            <MenuItem
                id="logout"
                title="Logout"
                icon={IconSettings}
                onClick={logout}
            />
        </Menu>
    );
}

export default SidebarComponent;
