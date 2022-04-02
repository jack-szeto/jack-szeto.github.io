import { Item } from "@components/item/item";
import { AllProjects, ProjectProp } from "@configs/project.config";
import { Grid } from "@mantine/core";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const ItemGrid = () => {
    const [projects, setProjects] = useState<ProjectProp[]>([]);

    useEffect(() => {
      setProjects(AllProjects.sort((a, b) => {
          if (a.date === undefined) return 1;
          if (b.date === undefined) return -1;
          if (a.date < b.date) return 1;
          else if (a.date > b.date) return -1;
          return 0;
      }));
    
      return () => {
        
      }
    }, [])
    

    return <div className={styles.itemGrid}>
        <Grid gutter={64} columns={12} justify={"center"}>
            {projects.map((project, index) => (
                <Grid.Col key={project.name} sm={6} md={4}>
                    <Item id={`${index}`} project={project} />
                </Grid.Col>
            ))}
        </Grid>
    </div>;
};
