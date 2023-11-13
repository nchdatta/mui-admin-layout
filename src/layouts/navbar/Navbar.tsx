import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, Drawer, Typography, Stack, List, ListItemButton, Collapse, Divider, ListItemIcon, ListItemText } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import Scrollbar from '../../components/common/scroll-bar';
import SidebarMenu from "./SidebarMenu";
import { ChevronDown, ChevronUp, LayoutDashboard, Settings, } from "lucide-react";

const NAV_WIDTH = 280;

type NavbarProps = {
  openNav: boolean,
  onCloseNav: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ openNav, onCloseNav }: NavbarProps) => {
  const { pathname } = useLocation();
  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  const [submenuControl, setSubmenuControl] = useState({
    news: false,
    settings: false,
  })

  const handleClick = (key: any) => {
    const newValue: any = { ...submenuControl }
    const currentValue = newValue[key];
    Object.keys(newValue).forEach(keyItem => {
      newValue[keyItem] = false;
    });
    newValue[key] = !currentValue
    setSubmenuControl(newValue)
  }

  useEffect(() => {
    if (location.pathname.includes("news")) {
      const newValue = { ...submenuControl }
      newValue.news = !newValue.news
      setSubmenuControl(newValue)
    } else if (location.pathname.includes("settings")) {
      const newValue = { ...submenuControl }
      newValue.settings = !newValue.settings
      setSubmenuControl(newValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }} >

      <Box px={2}>
        <NavLink to={'/dashboard'}>
          <Stack direction={"row"} alignItems={"center"} gap={1.5} pt={2} pb={3} >
            <img src='/assets/react.svg' width={"50px"} height={50} />
            <Stack>
              <Typography fontWeight={800} color={"#34495E"}>Ecomili Inspiration</Typography>
            </Stack>
          </Stack>
        </NavLink>

        <List>
          <SidebarMenu onClose={() => onCloseNav(false)} directory="/dashboard"
            icon={<LayoutDashboard size={20} color="#1ABC9C" />}
            menuTitle={"Overview"} variant="body1" fontWeight={"medium"} />

          {/* News  */}
          <ListItemButton onClick={() => handleClick("news")}>
            <ListItemIcon>
              <LayoutDashboard size={20} color="#D68910" />
            </ListItemIcon>
            <ListItemText primary={<Typography fontWeight={"medium"}>News</Typography>} />
            {submenuControl.news ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </ListItemButton>
          <Collapse in={submenuControl.news} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Manage News"} directory="/news/manage" />
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Add News"} directory="/news/add-new" />
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"News Categories"} directory="/news/category/manage" />
              <Divider />
            </List>
          </Collapse>

          {/* Settings  */}
          <ListItemButton onClick={() => handleClick("settings")}>
            <ListItemIcon>
              <Settings size={20} color="#D68910" />
            </ListItemIcon>
            <ListItemText primary={<Typography fontWeight={"medium"}>Settings</Typography>} />
            {submenuControl.settings ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </ListItemButton>
          <Collapse in={submenuControl.settings} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SidebarMenu onClose={() => onCloseNav(false)} icon={""} menuTitle={"Manage Staffs"} directory="/settings/staff/manage" />
              <Divider />
            </List>
          </Collapse>






        </List>
      </Box>

    </Scrollbar>
  );

  return (
    <Box component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }} >

      {isDesktop ? (
        <Drawer open variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer open={openNav} onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}


export default Navbar;