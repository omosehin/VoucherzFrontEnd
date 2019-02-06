import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import Notifications from "@material-ui/icons/Notifications";
import DashboardPage from "../View/Dashboard/Dashboard";
import TableList from "../View/TableList/TableList";
// import Icons from "../View/views/Icons/Icons";
// import NotificationsPage from "../View/views/Notifications/Notifications";
import Vourcher from "../View/Vourcher/Voucher";
import CreateBulkVoucherDashBoard from '../View/Vourcher/CreateVoucher/Bulk/CreateBulkVoucherDashboard/CreateBulkVoucherDashboard'
import CreateSingleVoucherDashboard from '../View/Vourcher/CreateVoucher/Standalone/CreateSingleVoucherDashboard/CreateSingleVoucherDashboard'
// import UpdateGiftVoucher from '../View/Vourcher/UpdateVoucher/UpdateGiftVoucher'
import Redemption from '../View/Redemption/Redemption';

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Voucherz Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  
  {
    path: "/voucher",
    sidebarName: "Vourcher",
    navbarName: "Voucher",
    icon: Person,
    component: Vourcher
  },
  {
    path: "/redemption",
    sidebarName: "Redemption",
    navbarName: "Redemption",
    icon: Dashboard,
    component: Redemption
  },
  {
    path: "/table",
    sidebarName: "Vourcher Table",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },

  {
    path: "/Bulk",
    sidebarName: "Create Bulk Voucher",
    navbarName: "",
    icon: "",
    component: CreateBulkVoucherDashBoard
  },

  {
    path: "/Standalone",
    sidebarName: "Create Single Voucher",
    navbarName: "",
    icon: "",
    component:CreateSingleVoucherDashboard
  },
  
   { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
