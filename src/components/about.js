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
                    <div className="mt-6 text-gray-700">
                        <h2 className="text-xl font-semibold">More About Me:</h2>
                        <ul className="list-disc list-inside mt-2">
                            <li>👩‍💻 **Frontend Developer** with 3+ years of experience</li>
                            <li>⚛️ Strong knowledge in **React.js, Tailwind CSS, JavaScript**</li>
                            <li>📈 Learning **SEO & Performance Optimization**</li>
                            <li>🎯 Working on a **React-based food ordering app**</li>
                            <li>🎮 Loves **playing offline games (like Snake!)**</li>
                            <li>📍 Based in **Hyderabad, India**</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
