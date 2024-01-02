import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography
} from "@mui/material";
import React from "react";
import { qualification } from "../constants/Qualification";
import { skills } from "../constants/skills";
import CardDesign from "./CardDesign";
import { projects } from "../constants/projects";

const SkillsSection = () => {
  return (
    <>
    
      <div style={{ height: "100vh" }}>
        <div className="d-flex g-5 col-md-12  justify-content-center align-item-center ">
          {/* Skills */}
          <div class="row g-5 m-5 col-md-12">
            {skills.map((skillItem) => {
              return (
                <div class="col-sm   text center">
                  <p className="text-center">{skillItem.title}</p>
                  {skillItem.skills.map((skills) => {
                    return (
                      <Chip
                        sx={{height:'60px'}}
                        avatar={<Avatar alt="Natacha" src={skills.image} />}
                        label={skills.name}
                        variant="outlined"
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* educations */}

        {projects.map((item) => {
          return (
            <Grid
            container
            spacing={2}
            style={{ margin:'' }}
          >
              {item.project.map((program) => {
                return (
                  <Grid item xs={12} md={12} style={{marginLeft:'50px',marginRight:'50px',marginBottom:'30px'}}>
                    <CardDesign props={program}/>
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </div>
    </>
  );
};

export default SkillsSection;
