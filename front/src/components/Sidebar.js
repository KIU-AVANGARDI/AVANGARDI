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
import {Input} from "reactstrap";
import APIService from "../APIService";
import {HiDotsHorizontal} from "react-icons/hi";
import {useTranslation} from "react-i18next";

export default function Sidebar({handleChange, setKitchenSelected}) {
    const {t} = useTranslation()

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
    const [SearchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState([]);
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        menuCollapse ? setSearchText(t("sidebar:search")) : setSearchText(<BsSearch/>);
    };

    const [priceFilters, setPriceFilters] = useState([0, 1000])

    const setPriceFiltersByIndex = (index, value) => {
        if (index === 0)
            setPriceFilters([value, priceFilters[1]])
        else
            setPriceFilters([priceFilters[0], value])

    }

    const StandardClick = () => {
        StandardActive ? setStandardActive(false) : setStandardActive(true);
        setKitchenFalse()
    };
    const WWorktopClick = () => {
        WWorktopActive ? setWWorktopActive(false) : setWWorktopActive(true);
        setKitchenFalse()
    };

    const SDLClick = () => {
        SDLActive ? setSDLActive(false) : setSDLActive(true);
        setKitchenFalse()
    };
    const CLWClick = () => {
        CLWActive ? setCLWActive(false) : setCLWActive(true);
        setKitchenFalse()
    };
    const SAWClick = () => {
        SAWActive ? setSAWActive(false) : setSAWActive(true);
        setKitchenFalse()
    };
    const MixersClick = () => {
        MixersActive ? setMixersActive(false) : setMixersActive(true);
        setMaterialsFalse()
    };
    const StandardPlusClick = () => {
        StandardPlusActive ? setStandardPlusActive(false) : setStandardPlusActive(true);
        setKitchenFalse()
    };

    const WorktopClick = () => {
        WorktopActive ? setWorktopActive(false) : setWorktopActive(true);
        setKitchenFalse()
    };

    const SinksClick = () => {
        SinksActive ? setSinksActive(false) : setSinksActive(true);
        setMaterialsFalse()
    };

    let navigate = useNavigate();

    const setKitchenFalse = () => {
        setSinksActive(false)
        setMixersActive(false)
        setKitchenSelected(false)
    }

    const setMaterialsFalse = () => {
        setStandardActive(false)
        setStandardPlusActive(false)
        setSDLActive(false)
        setWorktopActive(false)
        setWWorktopActive(false)
        setCLWActive(false)
        setSAWActive(false)
        setKitchenSelected(true)
    }

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext"></div>
                        {/*<div className="closemenu" onClick={menuIconClick}>*/}
                        {/*    {menuCollapse ? <FiArrowRightCircle/> : <FiArrowLeftCircle/>}*/}
                        {/*</div>*/}
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <SubMenu icon={<GiWoodBeam/>} title={t("sidebar:materials")}>
                                <MenuItem active={StandardActive} onClick={StandardClick}>
                                    {t("sidebar:standard")}
                                </MenuItem>
                                <MenuItem active={StandardPlusActive} onClick={StandardPlusClick}>
                                    {t("sidebar:standardplus")}
                                </MenuItem>
                                <MenuItem active={SDLActive} onClick={SDLClick}>
                                    {t("sidebar:sdl")}
                                </MenuItem>
                                <MenuItem active={WorktopActive} onClick={WorktopClick}>
                                    {t("sidebar:worktops")}
                                </MenuItem>
                                <MenuItem active={WWorktopActive} onClick={WWorktopClick}>
                                    {t("sidebar:wworktops")}
                                </MenuItem>
                                <MenuItem active={CLWActive} onClick={CLWClick}>
                                    {t("sidebar:clw")}
                                </MenuItem>
                                <MenuItem active={SAWActive} onClick={SAWClick}>
                                    {t("sidebar:saw")}
                                </MenuItem>
                            </SubMenu>
                            <SubMenu icon={<GiKitchenTap/>} title={t("sidebar:kitchen")}>
                                <MenuItem active={SinksActive} onClick={SinksClick}>
                                    {t("sidebar:sinks")}
                                </MenuItem>
                                <MenuItem active={MixersActive} onClick={MixersClick}>
                                    {t("sidebar:mixers")}
                                </MenuItem>
                            </SubMenu>


                            <SubMenu icon={<AiFillDollarCircle/>} title={t("sidebar:price")}>
                                <div>
                                    <Pricebar priceFilters={priceFilters} setPriceFilters={setPriceFiltersByIndex}/>
                                </div>
                            </SubMenu>
                            <SubMenu icon={<HiDotsHorizontal/>} title={t("sidebar:keyword")}>
                                <div className="form-group1">
                                    <Input placeholder={t("sidebar:search")} onChange={(e) => setSearchInput(e.target.value)}></Input>
                                </div>
                            </SubMenu>
                            <br/>
                            <br/>
                            <button
                                className={menuCollapse ? "btn5" : "btn6"}
                                onClick={() => handleChange(priceFilters, {
                                    "STANDARD": StandardActive,
                                    "STANDARDPLUS": StandardPlusActive,
                                    "SOLIDDECORATIVELAMINATE": SDLActive,
                                    "WORKTOPS": WorktopActive,
                                    "WOODWORKTOPS": WWorktopActive,
                                    "COMPACTLAMINATEWORKTOPS": CLWActive,
                                    "SOLIDACRYLICWORKTOPS": SAWActive,
                                    "SINKS": SinksActive,
                                    "MIXERS": MixersActive
                                }, SearchInput)}
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
