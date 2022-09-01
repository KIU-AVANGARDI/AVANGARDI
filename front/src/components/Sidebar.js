import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Pricebar from "./Pricebar";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi";

import {AiFillDollarCircle} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";

import "react-pro-sidebar/dist/css/styles.css";
import "../styles/Sidebar.scss";
import {GiKitchenTap, GiWoodBeam} from "react-icons/gi";

export default function Sidebar() {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [StandardActive, setStandardActive] = useState(false);
    const [StandardPlusActive, setStandardPlusActive] = useState(false);
    const [WorktopActive, setWorktopActive] = useState(false);
    const [WWorktopActive, setWWorktopActive] = useState(false);
    const [SDLActive, setSDLActive] = useState(false);
    const [CLWActive, setCLWActive] = useState(false);
    const [SAWActive, setSAWActive] = useState(false);
    const [SinksActive, setSinksActive] = useState(false);
    const [MixersActive, setMixersActive] = useState(false);

    const [SearchText, setSearchText] = useState(<BsSearch/>);

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        menuCollapse ? setSearchText("ძიება") : setSearchText(<BsSearch/>);
    };

    const StandardClick = () => {
        StandardActive ? setStandardActive(false) : setStandardActive(true);
    };
    const WWorktopClick = () => {
        WWorktopActive ? setWWorktopActive(false) : setWWorktopActive(true);
    };

    const SDLClick = () => {
        SDLActive ? setSDLActive(false) : setSDLActive(true);
    };
    const CLWClick = () => {
        CLWActive ? setCLWActive(false) : setCLWActive(true);
    };
    const SAWClick = () => {
        SAWActive ? setSAWActive(false) : setSAWActive(true);
    };
    const MixersClick = () => {
        MixersActive ? setMixersActive(false) : setMixersActive(true);
    };
    const StandardPlusClick = () => {
        StandardPlusActive ? setStandardPlusActive(false) : setStandardPlusActive(true);
    };

    const WorktopClick = () => {
        WorktopActive ? setWorktopActive(false) : setWorktopActive(true);
    };

    const SinksClick = () => {
        SinksActive ? setSinksActive(false) : setSinksActive(true);
    };

    let navigate = useNavigate();

    function SearchButtonClick() {
        navigate("/products");
    }

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext"></div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? <FiArrowRightCircle/> : <FiArrowLeftCircle/>}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <SubMenu icon={<GiWoodBeam/>} title="Materials">
                                <MenuItem active={StandardActive} onClick={StandardClick}>
                                    Standard
                                </MenuItem>
                                <MenuItem active={StandardPlusActive} onClick={StandardPlusClick}>
                                    Standard+
                                </MenuItem>
                                <MenuItem active={SDLActive} onClick={SDLClick}>
                                    Solid Decorative Laminate
                                </MenuItem>
                                <MenuItem active={WorktopActive} onClick={WorktopClick}>
                                    Worktops
                                </MenuItem>
                                <MenuItem active={WWorktopActive} onClick={WWorktopClick}>
                                    Wooden Worktops
                                </MenuItem>
                                <MenuItem active={CLWActive} onClick={CLWClick}>
                                    Compact laminate Worktops
                                </MenuItem>
                                <MenuItem active={SAWActive} onClick={SAWClick}>
                                    Solid Acrylic Worktops
                                </MenuItem>
                            </SubMenu>
                            <SubMenu icon={<GiKitchenTap/>} title="Kitchen">
                                <MenuItem active={SinksActive} onClick={SinksClick}>
                                    Sinks
                                </MenuItem>
                                <MenuItem active={MixersActive} onClick={MixersClick}>
                                    Mixers
                                </MenuItem>
                            </SubMenu>
                            <SubMenu icon={<AiFillDollarCircle/>} title="Price">
                                <div>
                                    <Pricebar/>
                                </div>
                            </SubMenu>
                            <br/>
                            <br/>
                            <button
                                className={menuCollapse ? "btn5" : "btn6"}
                                onClick={SearchButtonClick}
                            >
                                {SearchText}
                            </button>
                        </Menu>
                    </SidebarContent>
                    {/*<SidebarFooter>*/}
                    {/*    <Menu iconShape="square">*/}
                    {/*        <MenuItem icon={<IoMdRemoveCircle/>}>წაშლა</MenuItem>*/}
                    {/*    </Menu>*/}
                    {/*</SidebarFooter>*/}
                </ProSidebar>
            </div>
        </>
    );
}
