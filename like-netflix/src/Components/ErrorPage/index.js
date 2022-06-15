import PropTypes from "prop-types";
import Button from "../Button";
import styles from "./styles.module.css";

const ErrorPage = ({ error, resetErrorBoundary }) => {
  return (
    <div className={styles.errorContainer}>
      <h2>error</h2>
      <p>{error.message}</p>
      <Button
        title={"to home"}
        styles={styles.homeBtn}
        click={resetErrorBoundary}
      />
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorPage;
