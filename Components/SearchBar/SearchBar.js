import React, { useState } from "react";
import "./SearchBar.css";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function SearchBar() {
  const [searchActif, setSearchActif] = useState(false);
  const [searchText, setSearchText] = useState(
    "Rechercher ou démarrer une nouvelle discussion"
  );
  return (
    <div className="SearchBar">
      <div className="Input">
        {searchActif ? (
          <ArrowBackIcon style={{ color: "#828689" }} />
        ) : (
          <SearchOutlined style={{ color: "#828689" }} />
        )}
        <input
          placeholder={searchText}
          type="text"
          onFocus={() => {
            setSearchActif(true);
            setSearchText("");
          }}
          onBlur={() => {
            setSearchActif(false);
            setSearchText("Rechercher ou démarrer une nouvelle discussion");
          }}
          onChange={(e) => setSearchText(e)}
        />
      </div>
    </div>
  );
}
