// // components/CreativeLab.jsx
// import React from 'react';
// import './CreativeLabs.css';

// const CreativeLab = ({ 
//   data = {},
//   className = "",
//   titleColor = "#333",
//   subtitleColor = "#666",
//   itemColor = "#555",
//   accentColor = "#007bff"
// }) => {
//   const {
//     title = "Creative Lab",
//     subtitle = "Traditional art meets modern creativity",
//     sections = []
//   } = data;

//   return (
//     <div className={`creative-lab ${className}`}>
//       {/* Header Section */}
//       <div className="creative-lab-header">
//         <h1 
//           className="creative-lab-title"
//           style={{ color: titleColor }}
//         >
//           {title}
//         </h1>
//         <p 
//           className="creative-lab-subtitle"
//           style={{ color: subtitleColor }}
//         >
//           {subtitle}
//         </p>
//       </div>

//       {/* Content Sections */}
//       <div className="creative-lab-sections">
//         {sections.map((section, index) => (
//           <div key={index} className="creative-lab-section">
//             <h2 
//               className="section-title"
//               style={{ color: accentColor }}
//             >
//               {section.title}
//             </h2>
//             <ul className="section-items">
//               {section.items.map((item, itemIndex) => (
//                 <li 
//                   key={itemIndex}
//                   className="section-item"
//                   style={{ color: itemColor }}
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CreativeLab;