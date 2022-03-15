import { Item } from "@components/item/item";
import { AllProjects } from "@configs/project.config";
import { Grid } from "@mantine/core";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export const ItemGrid = () => {
    const [projects, setProjects] = useState(AllProjects);

    return <div className={styles.itemGrid}>
        <Grid>
            {projects.map((project) => (
                <Grid.Col key={project.name} sm={6} md={4} lg={3}>
                    <Item title={project.name} description={project.description} thumnail={project.thumnail} thumnailBlur={project.thumnailBlur} />
                </Grid.Col>
            ))}
        </Grid>
    </div>;
};
