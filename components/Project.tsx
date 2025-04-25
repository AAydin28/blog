// "use client";
// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Button,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
// } from "@mui/material";
// import { amber } from "@mui/material/colors";

// const categories = [
//   "All",
//   "UI/UX",
//   "Web Design",
//   "App Design",
//   "Graphic Design",
// ];

// const projectsData = [
//   {
//     id: 1,
//     category: "Web Design",
//     title: "Portfolio Website",
//     imageUrl: "../public/mongo.db.png",
//   },
//   {
//     id: 2,
//     category: "App Design",
//     title: "Mobile App UI",
//     imageUrl: "../public/nod.js.png",
//   },
//   {
//     id: 3,
//     category: "Graphic Design",
//     title: "Branding Project",
//     imageUrl: "../public/pyhton.png",
//   },
//   {
//     id: 4,
//     category: "UI/UX",
//     title: "Landing Page UX",
//     imageUrl: "../public/react.png",
//   },
// ];

// const Project = () => {
//   const [selectedCatogory, setSelectedCatogory] = useState("All");
//   const filteredProjects =
//     selectedCatogory === "All"
//       ? projectsData
//       : projectsData.filter((p) => p.category === selectedCatogory);

//   return (
//     <section className="py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <Container maxWidth="lg" sx={{ py: 8 }}>
//           <Box textAlign="center" mb={4}>
//             <Typography
//               variant="h4"
//               fontWeight="bold"
//               sx={{ color: amber[600] }}
//             >
//               My Projects
//             </Typography>

//             <Typography variant="body1" sx={{ color: "slategray" }} mt={1}>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
//               neque blanditiis commodi, eligendi quos minima?
//             </Typography>
//           </Box>

//           <Box textAlign={"center"} mb={4}>
//             {categories.map((cat) => (
//               <Button
//                 key={cat}
//                 variant={cat === selectedCatogory ? "contained" : "outlined"}
//                 sx={{
//                   m: 1,
//                   borderColor: amber[600],
//                   color: cat === selectedCatogory ? "#000" : amber[600],
//                   backgroundColor:
//                     cat === selectedCatogory ? amber[600] : "transparent",
//                   "&:hover": {
//                     backgroundColor:
//                       cat === selectedCatogory ? amber[700] : amber[50],
//                     borderColor: amber[600],
//                   },
//                 }}
//                 onClick={() => setSelectedCatogory(cat)}
//               >
//                 {cat}
//               </Button>
//             ))}

//             {/* Grid Container */}
//             <Grid container spacing={4}>
//               {filteredProjects.map((project) => (
//                 <Grid item xs={12} sm={6} md={3} key={project.id}>
//                   <Card>
//                     <CardMedia
//                       component="img"
//                       alt={project.title}
//                       height="180"
//                       image={project.imageUrl}
//                       sx={{
//                         objectFit: "contain",
//                         width: "100%",
//                       }}
//                     />
//                     <CardContent>
//                       <Typography variant="h6">{project.title}</Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Container>
//       </div>
//     </section>
//   );
// };

// export default Project;
