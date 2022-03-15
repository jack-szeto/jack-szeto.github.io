import { Banner } from "@components/banner/banner";
import { ItemGrid } from "@components/item-grid/item-grid";
import React from "react";
import styles from "./index.module.scss";

const HomePage = () => {
    return (
        <div className={styles.homePage}>

            <Banner />

            <ItemGrid />

        </div>
    );
};
export default HomePage;
