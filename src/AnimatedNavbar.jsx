import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Bell, Settings, Mail, User } from "lucide-react";
import "./Nav.css";

const navItems = [
  { id: "dashboard", label: "Home", icon: Home },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "messages", label: "Messages", icon: Mail },
  { id: "profile", label: "Profile", icon: User },
];

const AnimatedNavbar = () => {
  const [active, setActive] = useState("dashboard");
  const [hovered, setHovered] = useState(null);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-dock">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          const isHovered = hovered === item.id;

          return (
            <motion.div
              key={item.id}
              className={`dock-item ${isActive ? "active" : ""} ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive(item.id)}
              layout // yahi se smooth push effect aayega
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              <Icon size={20} className="dock-icon" />

              {/* Ye text dock ke ANDAR aayega */}
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    className="dock-label"
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedNavbar;