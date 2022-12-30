import React from "react";
import { PropTypes } from "prop-types";
import { Drawer, Toolbar, IconButton, List, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronLeft } from '@mui/icons-material';
import { MenuMainItems, MenuSecondaryItems } from "../pages/MenuList";

const drawerWidth = 240;
const DashboardDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },})
        }
    }));

export const DashboardSidebar = (props) => {
    const [open, setOpen] = React.useState(props.open);
    const { onClose } = props;

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
    <>
        <DashboardDrawer variant="permanent" open={open}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
                <IconButton onClick={onClose}>
                    <ChevronLeft />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <MenuMainItems/>
                <Divider sx={{ my: 1 }} />
                <MenuSecondaryItems />
            </List>
        </DashboardDrawer>
    </>
    );
};

DashboardSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
  };

