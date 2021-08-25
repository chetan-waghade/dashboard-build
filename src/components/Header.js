import './Header.css'
const Header = () => {
    return (
        <header className="flex border-b-2 justify-between items-center py-4 px-6">
            <div className=" ">
                <div className="flex gap-4">
                    <div className="menu-icon cursor-pointer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span className="tracking-normal">How are you doing today <strong>Inder?</strong>👋</span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex border-r-2 mx-4 items-center px-2">
                    <select className="bg-gray-100 px-4 py-3 text-gray-500 font-medium outline-none rounded-md text-xs tracking-normal">
                        <option>Web Campaign</option>
                        <option>Youtube Campaign</option>
                    </select>

                    <div className="credits mx-4">
                        <p className="text-gray-400 font-medium tracking-normal text-xs">Credits: <span className="text-black">200</span></p>
                    </div>
                </div>
                <span className="question-icon border-2 border-gray-400 text-gray-400 mx-4">?</span>
                <span className="profile-icon ml-4"></span>
            </div>
        </header>
    )
}

export default Header
