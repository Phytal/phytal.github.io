import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabSystemProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabSystem = ({ tabs, activeTab, onTabChange }: TabSystemProps) => {
  return (
    <nav className="w-full justify-start mb-8">
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "px-4 py-2 rounded-md transition-all duration-300",
              activeTab === tab
                ? "bg-accent text-accent-foreground"
                : "hover:bg-accent/50 text-muted-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TabSystem;