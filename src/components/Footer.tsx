import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
            <div className="flex items-center">
              <span>© MyersMakarenkov</span>
            </div>
            
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>benyamyers@gmail.com</span>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 (945) 265-5233</span>
            </div>

            {/* Instagram Link */}
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded flex items-center justify-center">
                <Instagram className="w-2.5 h-2.5 text-white" />
              </div>
              <a 
                href="https://www.instagram.com/myersmakarenkov/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                @myersmakarenkov
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;