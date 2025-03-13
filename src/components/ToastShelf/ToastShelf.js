import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useGetToastProvider } from "../ToastProvider";

function ToastShelf() {
  const { getToasts, removeToast } = useGetToastProvider();
  const list = getToasts();
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
