import CampaignHeader from '../components/CampaignHeader';
import './Campaigns.css'
import { useState, useEffect } from 'react';
const Campaigns = () => {

    const [filterData, setFilteredData] = useState([])

    useEffect(() => {
        // Get Data from json file
        async function fetchData() {
            const response = await fetch("http://127.0.0.1:5500/src/db/data.json")
            const data = response.json();
            data.then((list) => setFilteredData(list))
        }
        fetchData();
    }, [])

    const handleMethodSort = () => {
        setFilteredData(
            filterData.filter((item) => item.method === "CSV")
        )
    }

    return (
        <article className="h-full flex flex-col justify-between ">
            <CampaignHeader />
            <section className="flex-2">
                <nav className="flex justify-between my-2 px-2">
                    <ul className="flex gap-4 campaign_nav">
                        <li className="text-sm font-semibold cursor-pointer py-2 campaign_nav_li_active text-black">All Campaigns</li>
                        <li className="text-sm text-gray-400 cursor-pointer py-2">Quick Campaigns</li>
                        <li className="text-sm text-gray-400 cursor-pointer py-2">CSV Campaigns</li>
                        <li className="text-sm text-gray-400 cursor-pointer py-2" >URL Override Campaigns</li>
                    </ul>
                    <div className="flex items-center">
                        <input type="checkbox" name="archived" />
                        <label for="archived" className="ml-2 text-gray-600 text-xs font-medium">Show Archived</label>
                    </div>
                </nav>
                <section className=" my-4 px-2">
                    <table className="w-full h-96">
                        <tr className="bg-gray-100 flex rounded-md">
                            <th className="flex-2 flex items-center p-4">
                                <input type="checkbox" name="archived" />
                                <label for="archived" className="ml-2 text-gray-600 text-xs font-medium">Campaign Name</label>
                            </th>
                            <th className="flex-1 flex items-center p-4 cursor-pointer">
                                <p className="text-xs text-gray-600 font-medium">Status <span className="ml-1"><i className="fas fa-sort-down transform -translate-y-0.5"></i></span></p>
                            </th>
                            <th className="flex-1 flex items-center p-4 cursor-pointer">
                                <p className="text-xs text-gray-600 font-medium">Created at <span className="ml-1"><i className="fas fa-sort-up transform translate-y-1"></i></span></p>
                            </th>
                            <th className="flex-1 flex items-center p-4 cursor-pointer" onClick={handleMethodSort}>
                                <p className="text-xs text-gray-600 font-medium">Method <span className="ml-1"><i className="fas fa-sort-down transform -translate-y-0.5"></i></span></p>
                            </th>
                            <th className="flex-1 flex items-center p-4 cursor-pointer">
                                <p className="text-xs text-gray-600 font-medium">Media <span className="ml-1"><i className="fas fa-sort-down transform -translate-y-0.5"></i></span></p>
                            </th>
                            <th className="flex-1 flex items-center p-4 cursor-pointer">
                                <p className="text-xs text-gray-600 font-medium">Actions </p>
                            </th>
                        </tr>
                        {/* Rendering Dynamic Data */}
                        {filterData ?
                            filterData.map((item) => {
                                return (
                                    <tr className="flex border-b-2" key={item.id}>
                                        <th className="flex-2 flex items-center p-4 ">
                                            <input type="checkbox" name="archived" />
                                            <label for="archived" className="ml-2 text-black  text-sm font-medium">{item.campaign_name}</label>
                                        </th>
                                        <th className="flex-1 flex items-center p-4 cursor-pointer ">

                                            {
                                                item.status
                                                    ?
                                                    <span className="inline-block py-2 px-4 rounded-2xl text-xs font-medium bg-green-100 text-green-500">SUCCESS</span>
                                                    :
                                                    <span className="inline-block py-2 px-4 rounded-2xl text-xs font-medium bg-red-100 text-red-500">FAILED</span>
                                            }

                                        </th>
                                        <th className="flex-1 flex items-center p-4 cursor-pointer">
                                            <p className="text-gray-700  text-sm font-medium">{item.created_at}</p>
                                        </th>
                                        <th className="flex-1 flex items-center p-4 cursor-pointer" >
                                            <p className="text-gray-700 text-sm font-medium">{item.method}</p>
                                        </th>
                                        <th className="flex-1 flex items-center p-4 cursor-pointer">
                                            <p className="text-gray-700  text-sm font-medium"> <i className="fas fa-video mr-2"></i>  {item.media}</p>
                                        </th>
                                        <th className="flex-1 flex items-center p-4 cursor-pointer">
                                            <div className="flex gap-4">
                                                <span className="bg-gray-100 block p-2 rounded-md">
                                                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.5 18V22.5H0.5V18C0.5 17.1716 1.17157 16.5 2 16.5C2.82843 16.5 3.5 17.1716 3.5 18Z" stroke="#78AF7D" />
                                                        <path d="M9.5 10V22.5H6.5V10C6.5 9.17157 7.17157 8.5 8 8.5C8.82843 8.5 9.5 9.17157 9.5 10Z" stroke="#78AF7D" />
                                                        <path d="M21.5 10V22.5H18.5V10C18.5 9.17157 19.1716 8.5 20 8.5C20.8284 8.5 21.5 9.17157 21.5 10Z" stroke="#78AF7D" />
                                                        <path d="M15.5 14V22.5H12.5V14C12.5 13.1716 13.1716 12.5 14 12.5C14.8284 12.5 15.5 13.1716 15.5 14Z" stroke="#78AF7D" />
                                                        <circle cx="2" cy="8" r="1.5" stroke="#78AF7D" />
                                                        <circle cx="14" cy="6" r="1.5" stroke="#78AF7D" />
                                                        <circle cx="8" cy="2" r="1.5" stroke="#78AF7D" />
                                                        <circle cx="20" cy="2" r="1.5" stroke="#78AF7D" />
                                                        <rect x="6.67465" y="3" width="1" height="5.19674" transform="rotate(45 6.67465 3)" fill="#78AF7D" />
                                                        <rect x="9" y="2.86603" width="1" height="4.62395" transform="rotate(-60 9 2.86603)" fill="#78AF7D" />
                                                        <rect x="18.1636" y="1.66483" width="1" height="4.47401" transform="rotate(45 18.1636 1.66483)" fill="#78AF7D" />
                                                    </svg>
                                                </span>
                                                <span className="bg-gray-100 block p-2 rounded-md">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.0711 13.3431C19.4616 12.9526 19.4616 12.3195 19.0711 11.9289C18.6805 11.5384 18.0474 11.5384 17.6569 11.9289L12 17.5858L6.34315 11.9289C5.95262 11.5384 5.31946 11.5384 4.92893 11.9289C4.53841 12.3195 4.53841 12.9526 4.92893 13.3431L11.2929 19.7071ZM11 -3.74669e-08L11 19L13 19L13 3.74669e-08L11 -3.74669e-08Z" fill="#5185D1" />
                                                        <line y1="23" x2="24" y2="23" stroke="#5185D1" stroke-width="2" />
                                                    </svg>
                                                </span>
                                                <span className="bg-gray-100 block p-2 rounded-md">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="4.5" y="4.5" width="15" height="3.21053" stroke="#50B0AB" />
                                                        <rect x="2.5" y="7.6579" width="19" height="3.21053" stroke="#50B0AB" />
                                                        <rect x="0.5" y="10.8158" width="23" height="12.6842" stroke="#50B0AB" />
                                                        <line x1="7" y1="15.0789" x2="16" y2="15.0789" stroke="#50B0AB" />
                                                    </svg>

                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                )
                            })
                            :
                            <p >Loading Data</p>
                        }
                    </table>
                </section >
            </section>
            <footer className="flex-1 flex items-center justify-between bg-gray-100 p-3 rounded-md ">
                <p className="text-xs text-gray-500 font-semibold">Showing Results {filterData.length} of 24</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="text-xs text-gray-500 font-semibold"> &lt; Prev</a>
                    <div className="result_page_nos flex gap-2 ">
                        <a href="#" className=" block py-2 px-3 bg-gray-100 text-xs text-gray-500 font-semibold">
                            1
                        </a>
                        <a href="#" className=" block py-2 px-3 bg-gray-100 text-xs text-gray-500 font-semibold">
                            2
                        </a>
                        <a href="#" className=" block py-2 px-3 bg-gray-100 text-xs text-gray-500 font-semibold">
                            3
                        </a>
                    </div>
                    <a href="#" className="text-xs text-gray-500 font-semibold"> Next &gt; </a>
                </div>
            </footer>
        </article>
    )
}

export default Campaigns
