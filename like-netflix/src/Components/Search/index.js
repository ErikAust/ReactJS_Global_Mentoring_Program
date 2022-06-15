import styles from "./styles.module.css";
import Button from "../Button/index";

export const Search = () => {
  return (
    <div className={styles.searchBlock}>
      <h1>find your movie</h1>
      <div className={styles.inputBlock}>
        <input type="text" placeholder="What do you want to watch?" />
        <Button style={styles.searchBtn} title={"SEARCH"} click={() => null} />
      </div>
    </div>
  );
};

export default Search;
