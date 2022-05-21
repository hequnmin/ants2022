import React from "react";
import { PropTypes } from "prop-types";
import { Drawer, Toolbar, IconButton, List, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronLeft } from '@mui/icons-material';
import { mainListItems, secondaryListItems } from "../pages/listItems";

const drawerWidth = 240;
const AppDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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

export const AppSidebar = (props) => {
    const [open, setOpen] = React.useState(props.open);
    const { onClose } = props;

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
    <>
        <AppDrawer variant="permanent" open={open}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
                <IconButton onClick={onClose}>
                    <ChevronLeft />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
            </List>
        </AppDrawer>
    </>
    );
};

AppSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
  };

