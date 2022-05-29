import { React, useState } from "react";
import "./SideBar.css";
import Logo from "../../assets/images/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SideBarData } from "../Data/Data";

const SideBar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="sidebar">
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        {/* menu */}
        <div className="menu">
          {SideBarData.map((data, index) => (
            <div
              className={index === selected ? "menu-item active" : "menu-item"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <div>
                <data.icon />
              </div>
              <span>{data.title}</span>
            </div>
          ))}

          <div className="menu-item">
            <div>
              <UilSignOutAlt />
            </div>
            {/* <span>{data.title}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
