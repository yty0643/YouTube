import styles from "./search_header.module.css";
import React, { useRef, memo } from "react";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          className={styles.image}
          src="/images/youtube.png"
          alt="YouTube logo"
        />
        <h1 className={styles.title}>YouTube</h1>
      </div>

      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.btn} type="submit" onClick={onClick}>
        <img className={styles.image} src="images/search.png" alt="search" />
      </button>
    </header>
  );
});
export default SearchHeader;
