import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

  const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <p className="text-gray-700"> Food Street, Sanath Nagar Town, Hyderabad</p>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
              <FaPhone className="text-green-500 text-xl" />
              <p className="text-gray-700">+91 6303512729</p>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
              <FaEnvelope className="text-blue-500 text-xl" />
              <p className="text-gray-700">support@DineDash.com</p>
            </div>
            <div className="flex space-x-4 text-gray-600 mt-4">
              <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:scale-110" />
              <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:scale-110" />
              <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:scale-110" />
            </div>
          </div>
          
          <form className="space-y-4 bg-gray-100 p-6 rounded-xl">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none" required />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none" required />
            <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none" required />
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
