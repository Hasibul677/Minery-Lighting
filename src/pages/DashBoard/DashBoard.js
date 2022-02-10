import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';
import useAuth from '../../hooks/useAuth';
import ManageProduct from './ManageProduct/ManageProduct';
import MyOrder from './Users/MyOrder/MyOrder';
import Payment from './Users/Payment/Payment';
import Review from './Users/Review/Review';
import ManageItem from './ManageItem/ManageItem';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PreviewIcon from '@mui/icons-material/Preview';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';

const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { logOut, admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        <Link style={{ textDecoration: 'none' }} to={`${url}`}></Link><br />
        <Link style={{ textDecoration: 'none' }} to='/home'> <Button style={{ fontFamily: 'cursive', fontSize: '15px', fontWeight: 600 }} color="inherit"><HomeIcon className='text-secondary me-1'/> Home</Button></Link><br />
       {admin && <div>
        <Link style={{ textDecoration: 'none' }} to={`${url}/manageItem`}> <Button style={{ fontFamily: 'cursive', fontSize: '15px', fontWeight: 600 }} color="inherit"><BorderColorIcon className='text-secondary me-1'/> Manage Orders</Button></Link><br />
        <Link style={{ textDecoration: 'none' }} to={`${url}/addProduct`}> <Button style={{ fontFamily: 'cursive', fontSize: '15px', fontWeight: 600 }} color="inherit"><ShoppingBasketIcon className='text-secondary me-1'/> Add Product</Button></Link><br />
        <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}> <Button style={{ fontFamily: 'cursive', fontSize: '15px', fontWeight: 600 }} color="inherit"><SupervisorAccountIcon className='text-secondary me-1'/> Make Admin</Button></Link><br />
        <Link style={{ textDecoration: 'none' }} to={`${url}/manageProduct`}> <Button style={{ fontFamily: 'cursive', fontSize: '15px', fontWeight: 600 }} color="inherit"><ControlCameraIcon className='text-secondary me-1'/> All Products</Button></Link><br />
        </div>}
        {/* user part */}
        {!admin && <div>
        <Link style={{ textDecoration: 'none' }} to={`${url}/payment`}> <Button style={{ fontFamily: 'cursive', fontSize: '15px', fontWeight: 600 }} color="inherit"><CreditCardIcon className='text-secondary me-1'/> Payment</Button></Link><br />
        <Link style={{ textDecoration: 'none' }} to={`${url}/myOrder`}> <Button style={{ fontFamily: 'cursive', fontSize: '15px', fontWeight: 600 }} color="inherit"><BookmarkBorderIcon className='text-secondary me-1'/> My Order</Button></Link><br />
        <Link style={{ textDecoration: 'none' }} to={`${url}/review`}> <Button style={{ fontFamily: 'cursive', fontSize: '15px', fontWeight: 600 }} color="inherit"><PreviewIcon className='text-secondary me-1'/> Review</Button></Link><br />
        </div>}


        <Link style={{ textDecoration: 'none' }} to='/'> <Button style={{ fontFamily: 'cursive', fontSize: '15px', fontWeight: 600 }} onClick={logOut} color="inherit"><ExitToAppIcon className='text-secondary me-1'/> LogOut</Button></Link>


      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ fontFamily: 'cursive' }} variant="h6" noWrap component="div">
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/manageItem`}>
            <ManageItem></ManageItem>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProduct></ManageProduct>
          </AdminRoute>
          <Route path={`${path}/myOrder`}>
           <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>

        </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
