
const CampaignHeader = () => {
    return (
        <>
            <header className="flex justify-between items-center px-2">
                <h1 className="font-semibold text-3xl">
                    Campaigns
                </h1>
                <div className="flex items-center">
                    <span className="inline-block py-2 px-3 bg-gray-100 rounded-md cursor-pointer">
                        <i class="fas fa-sync text-purple-500 text-base"></i>
                    </span>
                    <button className="box-border border-2 border-purple-500 py-3 px-3 ml-4 rounded-md text-purple-500 font-medium text-xs"><span><i className="fas fa-plus mr-2"></i></span> Create a new campaign</button>
                </div>
            </header>
        </>
    )
}

export default CampaignHeader
