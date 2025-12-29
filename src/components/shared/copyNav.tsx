// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Dumbbell, Menu, X } from "lucide-react";
// import { useState } from "react";

// const Navbar = () => {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
//     >
//       <div className="container-custom flex items-center justify-between h-20 px-4 md:px-8">
//         <Link to="/" className="flex items-center gap-3 group">
//           <motion.div
//             whileHover={{ rotate: 15 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Dumbbell className="w-8 h-8 text-primary" />
//           </motion.div>
//           <span className="font-display text-2xl tracking-wider">
//             IRON<span className="text-primary">FORGE</span>
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           {links.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className="relative font-medium text-sm tracking-wide uppercase"
//             >
//               <span
//                 className={
//                   location.pathname === link.path
//                     ? "text-primary"
//                     : "text-muted-foreground hover:text-foreground transition-colors"
//                 }
//               >
//                 {link.label}
//               </span>
//               {location.pathname === link.path && (
//                 <motion.div
//                   layoutId="navbar-indicator"
//                   className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
//                   initial={false}
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                 />
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden p-2 text-foreground"
//         >
//           {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <motion.div
//         initial={false}
//         animate={{ height: isOpen ? "auto" : 0 }}
//         className="md:hidden overflow-hidden bg-card border-b border-border"
//       >
//         <div className="flex flex-col p-4 gap-4">
//           {links.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               onClick={() => setIsOpen(false)}
//               className={`font-medium text-lg ${
//                 location.pathname === link.path
//                   ? "text-primary"
//                   : "text-muted-foreground"
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navbar;