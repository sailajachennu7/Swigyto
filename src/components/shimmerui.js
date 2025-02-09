const ShimmerUi = () => {
    return (
        <div className="p-6">
            {/* Shimmer for Search Bar */}
            <div className="flex justify-center items-center mb-6">
                <div className="w-64 h-10 bg-gray-300 animate-pulse rounded-lg"></div>
                <div className="w-24 h-10 bg-gray-300 animate-pulse ml-4 rounded-lg"></div>
                <div className="w-36 h-10 bg-gray-300 animate-pulse ml-4 rounded-lg"></div>
            </div>

            {/* Shimmer for Restaurant Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                {Array(8).fill("").map((_, index) => (
                    <div 
                        key={index} 
                        className="w-60 h-72 bg-gray-300 animate-pulse rounded-lg shadow-lg"
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ShimmerUi;
