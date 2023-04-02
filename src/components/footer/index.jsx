/** @format */

import React from "react";
import s from "./style.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <p>© 2023 Shop Company. All rights reserved.</p>
        <ul className={s.footerList}></ul>
      </div>
    </footer>
  );
}
