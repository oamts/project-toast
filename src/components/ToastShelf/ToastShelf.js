import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ list, removeToast }) {
  return (
    <ol className={styles.wrapper}>
      {list.map(({ message, variant, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            variant={variant}
            message={message}
            onClose={() => removeToast(id)}
          ></Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
