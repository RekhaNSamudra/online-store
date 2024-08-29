import React from "react";
import styles from "./Components.module.css";
import { capitalizeFirstLetter } from "../Utility/utils";

const ListItem = ({ item }) => {
  return (
    <>
      <li className={`list-group-item m-2 ${styles.list}`}>
        <p>
          {item.id}. <span> {capitalizeFirstLetter(item.category)}</span>{" "}
        </p>
        <p>{item.title}</p>
      </li>
    </>
  );
};

export default ListItem;
