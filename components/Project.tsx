"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  // CardContent,
} from "@mui/material";
import { amber } from "@mui/material/colors";

const categories = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "Graphic Design",
];

const projectsData = [
  {
    id: 1,
    category: "Web Design",
    title: "Portfolio Website",
    imageUrl: "/typescript.png",
  },
  {
    id: 2,
    category: "App Design",
    title: "Mobile App UI",
    imageUrl: "/typescript.png",
  },
  {
    id: 3,
    category: "Graphic Design",
    title: "Branding Project",
    imageUrl: "/typescript.png",
  },
  {
    id: 4,
    category: "UI/UX",
    title: "Landing Page UX",
    imageUrl: "/typescript.png",
  },
  {
    id: 5,
    category: "UI/UX",
    title: "Landing Page UX",
    imageUrl: "/typescript.png",
  },
  {
    id: 6,
    category: "UI/UX",
    title: "Landing Page UX",
    imageUrl: "/typescript.png",
  },
];

const Project = () => {
  const [selectedCatogory, setSelectedCatogory] = useState("All");
  const filteredProjects =
    selectedCatogory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCatogory);

  return (
    <section className="py-10" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: amber[600] }}
            >
              My Projects
            </Typography>

            <Typography variant="body1" sx={{ color: "slategray" }} mt={1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              neque blanditiis commodi, eligendi quos minima?
            </Typography>
          </Box>

          <Box textAlign={"center"} mb={4}>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === selectedCatogory ? "contained" : "outlined"}
                sx={{
                  m: 1,
                  borderColor: amber[600],
                  color: cat === selectedCatogory ? "#000" : amber[600],
                  backgroundColor:
                    cat === selectedCatogory ? amber[600] : "transparent",
                  "&:hover": {
                    backgroundColor:
                      cat === selectedCatogory ? amber[700] : amber[50],
                    borderColor: amber[600],
                  },
                }}
                onClick={() => setSelectedCatogory(cat)}
              >
                {cat}
              </Button>
            ))}

            <Grid container spacing={4} mt={4}>
              {filteredProjects.map((project) => (
                <Grid key={project.id} className=" sm:grid-rows-2 w-80">
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      backgroundColor: "transparent",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.imageUrl}
                      alt={project.title}
                      sx={{
                        height: 180,
                        objectFit: "contain",
                      }}
                    />

                    <Typography variant="body2" sx={{ color: amber[600] }}>
                      {project.category}
                    </Typography>
                    <Typography variant="h6" mt={1} sx={{ color: "slategray" }}>
                      {project.title}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </section>
  );
};

export default Project;
