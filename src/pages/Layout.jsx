import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>Library Management System</div>
      {/* Links here */}
      <Outlet />
    </div>
  );
};

export default Layout;
