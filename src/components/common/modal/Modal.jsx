import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { Hix } from "react-icons/hi";

export default class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    header: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };

  handleEscape(event) {
    if (event.key === "Escape") {
      console.log("Esc a fost apasat");
      this.props.handleClose();
    }
  }

  render() {
    const { isOpen, handleClose, header, children } = this.props;

    if (!isOpen) {
      return;
    }

    return (
      <div className={styles.overlay}>
        <dialog className={styles.modal}>
          <header className={`${styles.header} relative`}>
            <button className={styles.closeBtn} onClick={() => handleClose()}>
              <Hix />
            </button>
          </header>
          <main className={styles.content}>
            <h1 className={styles.title}>
              {header.icon} {header.label}
            </h1>
            {children}
          </main>
        </dialog>
      </div>
    );
  }
}
