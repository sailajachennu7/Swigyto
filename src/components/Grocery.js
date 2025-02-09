const Grocery = () => {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-green-400 p-6">
            <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-6 text-center">
                <h1 className="text-4xl font-extrabold text-green-800 mb-4">Welcome to Our Grocery Section</h1>
                <p className="text-gray-700 mb-6">Discover fresh and high-quality grocery items delivered straight to your doorstep. We offer a wide variety of fresh vegetables, fruits, dairy products, and more!</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { title: "Fresh Vegetables", desc: "Organic and farm-fresh vegetables.", color: "bg-green-100" },
                        { title: "Dairy Products", desc: "Milk, cheese, butter, and more.", color: "bg-yellow-100" },
                        { title: "Bakery Items", desc: "Freshly baked bread and cakes.", color: "bg-orange-100" },
                        { title: "Fruits", desc: "Seasonal and exotic fruits available.", color: "bg-red-100" },
                        { title: "Beverages", desc: "Juices, soft drinks, and more.", color: "bg-blue-100" },
                        { title: "Household Essentials", desc: "Daily-use household products.", color: "bg-purple-100" }
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className={`p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl ${item.color}`}
                        >
                            <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                            <p className="text-gray-700 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Grocery;
