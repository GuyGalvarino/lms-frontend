import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Links here */}
      <Outlet />
    </div>
  );
};

export default Layout;
