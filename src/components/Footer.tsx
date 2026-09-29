export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KmGeo</h3>
            <p className="text-gray-400">
              Building innovative solutions for a better tomorrow.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Services</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Khader Mohiuddin</p>
            <p className="text-gray-400">khadermat@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          © {new Date().getFullYear()} KmGeo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}