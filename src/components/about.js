import UserClassComp from "./userClassComp";
import React from "react";

class AboutPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render() {
        return (
            <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-200 flex flex-col items-center justify-center p-6">
                <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg w-full border border-gray-300">
                    <h1 className="text-2xl font-bold text-center text-gray-800">About Me</h1>
                    <p className="text-gray-600 text-center mt-2">
                        Passionate Web Developer | React Enthusiast | SEO Learner
                    </p>
                    <UserClassComp />
                    <div className="mt-8 bg-gradient-to-r from-purple-50 to-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-purple-700 mb-4">More About Me:</h2>
                        <ul className="list-none space-y-3 text-gray-700">
                            <li className="flex items-center"><span className="text-purple-600 text-lg">👩‍💻</span>&nbsp;<span className="font-semibold">Frontend Developer</span> with 3+ years of experience</li>
                            <li className="flex items-center"><span className="text-blue-600 text-lg">⚛️</span>&nbsp;Strong knowledge in <span className="font-semibold">React.js, Tailwind CSS, JavaScript</span></li>
                            <li className="flex items-center"><span className="text-green-600 text-lg">📈</span>&nbsp;Learning <span className="font-semibold">SEO & Performance Optimization</span></li>
                            <li className="flex items-center"><span className="text-orange-600 text-lg">🎯</span>&nbsp;Working on a <span className="font-semibold">React-based food ordering app</span></li>
                            <li className="flex items-center"><span className="text-red-600 text-lg">🎮</span>&nbsp;Loves <span className="font-semibold">playing offline games (like Snake!)</span></li>
                            <li className="flex items-center"><span className="text-indigo-600 text-lg">📍</span>&nbsp;Based in <span className="font-semibold">Hyderabad, India</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
