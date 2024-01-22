import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";

function Notice() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user.firstName) {
      navigate("/admin/login");
    }
  }, []);
  return (
    <div className="flex w-full">
      <Sidebar />
      <p>HI</p>
    </div>
  );
}

export default Notice;
