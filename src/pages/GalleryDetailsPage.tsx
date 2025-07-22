// import React from 'react';
// import { Link, useParams } from "react-router-dom";
// import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
// import GalleryDetailSection from "../components/gallery/GalleryDetailSection";
// import Layout from "../components/layout/Layout";
// import { galleryList } from "../data/Data";

// const GalleryDetailsPage = () => {
//   const { gallerySlug } = useParams();
//   const galleryData = galleryList.find((item) => item.slug === gallerySlug);

//   return (
//     <div className="wrapper">
//       <Layout>
//         {galleryData ? (
//           <>
//             <BreadcrumbSection
//               title="Gallery Details"
//               header="Gallery Details Page"
//             />
//             <GalleryDetailSection galleryData={galleryData} />
//           </>
//         ) : (
//           <>
//             <BreadcrumbSection
//               header="Gallery Item Not Found"
//               title="Gallery Details"
//             />
//             <div className="dynamic-error-page-container">
//               <div className="not-found-image-container">
//                 <img src="/img/404.jpg" alt="page not found" />
//               </div>
//               <p className="no-page-found-text">
//                 The Gallery item you are looking for does not exist.
//               </p>
//               <Link to="/" className="custom-btn">
//                 Go back to Home
//               </Link>
//             </div>
//           </>
//         )}
//       </Layout>
//     </div>
//   );
// };
// export default GalleryDetailsPage;
