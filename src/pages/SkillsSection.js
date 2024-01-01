import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography
} from "@mui/material";
import React from "react";
import { qualification } from "../constants/Qualification";
import { skills } from "../constants/skills";

const SkillsSection = () => {
  return (
    <>
    
      <div style={{ height: "80%" }}>
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

        {qualification.map((item) => {
          return (
            <div className="d-flex row g-2  m-5  mb-2">
              {item.programs.map((program) => {
                return (
                  <Card
                    sx={{
                      maxWidth: 330,
                      maxHeight: 210,
                      margin: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          alt="Remy Sharp"
                          src={program.image}
                          sx={{ width: 80, height: 80 }}
                        />
                      }
                      title={program.name}
                      subheader={program.completed}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        style={{
                          fontFamily: "monospace",
                          letterSpacing: ".1em",
                        }}
                        color="text.secondary"
                      >
                        <p>{program.university}</p>
                        <p>{program.location}</p>
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SkillsSection;
