import { Link } from "react-router-dom"
import LogoImage from "../assets/images/favicon.png"
import RocketIcon from "../assets/icons/rocket.png"
import CampaignsIcon from "../assets/icons/campaigns.png"
import TemplatesIcon from "../assets/icons/templates.png"
import IntergrationsIcon from "../assets/icons/integrations.png"
import ManageWebsiteIcon from "../assets/icons/manage_websites.png"
import SettingsIcon from "../assets/icons/settings.png"
import AdCard from "./AdCard"
import './Navigation.css'


const Navigation = () => {

    const navRoutes = ["", "templates", "campaigns", "integrations", "manage_websites", "settings"]
    const navNames = ["Get Started", "Templates", "Campaigns", "Integrations", "Manage Websites", "Settings"];
    const navIcons = [RocketIcon, CampaignsIcon, TemplatesIcon, IntergrationsIcon, ManageWebsiteIcon, SettingsIcon];

    return (
        <section className="flex flex-col justify-between border-r-2 border-gray-100 py-4 ">
            <div className="logo flex items-center mx-4">
                <img src={LogoImage} height="48" width="48" alt="logo" />
                <h3 className="font-extrabold text-lg font-family-monsterrat mx-2">
                    <span style={{ color: "#FF7958" }}>Nex</span>
                    <span style={{ color: "#552391" }}>Weave.</span>
                </h3>
            </div>
            <nav>
                <ul className="flex flex-col nav">

                    {
                        navNames.map((nav, index) => {
                            return (
                                <Link to={`/${navRoutes[index]}`} className="flex text-sm gap-4  my-2 py-2 pr-2 pl-6 text-gray-500"><img src={navIcons[index]} alt="icons" />{nav}</Link>
                            )
                        })
                    }


                </ul>
            </nav>
            <AdCard />
            <button className="logout px-2 py-2 w-32 flex gap-4 items-center text-gray-500 mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="rgba(100, 100, 100, 0.5)"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" /></g></svg>
                Logout</button>
        </section >
    )
}

export default Navigation
