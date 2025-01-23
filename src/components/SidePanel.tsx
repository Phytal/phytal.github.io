import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone, Sun, Moon, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface SidePanelProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const SidePanel = ({ theme, toggleTheme }: SidePanelProps) => {
  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-full md:w-[300px] md:fixed h-auto md:h-screen bg-card p-8 shadow-lg overflow-hidden"
    >
      <div className="flex flex-col items-center">
        <Avatar className="w-48 h-48 mb-4">
          <img 
            src="https://ca.slack-edge.com/T06S4KHQYCT-U06STHA3ZJL-924ed5973c5e-512" 
            alt="William Zhang"
            className="w-full h-full object-cover rounded-full"
          />
        </Avatar>
        <h1 className="text-3xl font-bold mb-2">William Zhang</h1>
        <p className="text-muted-foreground mb-6">full-time builder & student</p>
        
        <Card className="w-full mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <p className="font-medium text-center text-sm mb-4">University of Texas - Austin</p>
              <p className="text-xs text-muted-foreground text-center">B.S. Computer Science Honors</p>
              <p className="text-xs text-muted-foreground text-center">BBA Business Honors</p>
            </div>
          </CardContent>
        </Card>
                
        <div className="flex flex-col gap-4 w-full">
          <Button variant="outline" asChild className="w-full justify-start gap-2">
            <a href="mailto:willzhang@utexas.edu">
              <Mail className="w-4 h-4" />
              willzhang@utexas.edu
            </a>
          </Button>
          <Button variant="outline" asChild className="w-full justify-start gap-2">
            <a href="https://github.com/phytal" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              github.com/phytal
            </a>
          </Button>
          <Button variant="outline" asChild className="w-full justify-start gap-2">
            <a href="https://linkedin.com/in/wzhxng" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
              linkedin.com/in/wzhxng
            </a>
          </Button>
          <Button variant="outline" asChild className="w-full justify-start gap-2">
            <a href="https://twitter.com/phytalia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-start hover:text-white">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
              @phytalia
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2">
            <Phone className="w-4 h-4" />
            (469) 703-0568
          </Button>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className="mt-8"
          onClick={toggleTheme}
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </Button>
      </div>
    </motion.aside>
  );
};

export default SidePanel;