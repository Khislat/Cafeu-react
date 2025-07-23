// import { Link } from "react-router-dom";
// import { teamList } from "../../data/Data";

// import { motion } from "framer-motion";
// const TeamSection3 = () => {
//   return (
//     <section>
//       <motion.div
//         className="ad-chef"
//         initial={{
//           y: 80,
//           opacity: 0,
//         }}
//         whileInView={{
//           y: 0,
//           opacity: 1,
//         }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 1.5,
//           ease: "easeIn",
//         }}
//       >
//         <div className="ad-chef-title-container">
//           <img src="/img/aida-images/service-icon.png" alt="" />
//           <h4 className="ad-title-text">Group of professional chefs</h4>
//           <p className="ad-description-text">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
//             aspernatur ipsa veritatis
//             <br className="d-none d-md-block" />
//             consectetur cupiditate minima quasi voluptates, eius magni?
//           </p>
//         </div>
//         <div className="container ad-chef-container">
//           <div className="row g-5 ad-chef-custom-row">
//             {teamList.slice(-3).map((item) => (
//               <div className="col-lg-4 col-md-6" key={item.id}>
//                 <div className="position-relative ad-chef-card">
//                   <div className="ad-chef-single-card">
//                     <div className="ad-chef-image d-flex gap-3 align-items-end">
//                       <div className="overflow-hidden">
//                         <Link to={`/team/${item.slug}`}>
//                           <img
//                             src={item.imgSrc}
//                             className="ad-chef-person"
//                             alt=""
//                           />
//                         </Link>
//                       </div>
//                       <div className="ad-chef-icon-container">
//                         <i className="fa-brands fa-linkedin-in"></i>
//                         <i className="fa-brands fa-twitter"></i>
//                         <i className="fa-brands fa-instagram"></i>
//                         <i className="fa-brands fa-facebook"></i>
//                       </div>
//                     </div>
//                     <Link to={`/team/${item.slug}`}>
//                       <h4>{item.name}</h4>
//                     </Link>
//                     <p>{item.position}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default TeamSection3;
