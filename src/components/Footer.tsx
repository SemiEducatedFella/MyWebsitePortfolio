import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
            <div className="flex items-center">
              <span>© Your Name or Business Name</span>
            </div>
            
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>yourname@email.com</span>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>(123) 456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;