import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountry, selectCountry } from "./countriesSlice";
import styles from "./Countries.module.css";
import countries from "../../app/dummy/countries.json";
import { Dropdown } from "semantic-ui-react";

export function Countries() {
  const country = useSelector(selectCountry);
  const dispatch = useDispatch();
  console.log({
    country,
  });
  return (
    <>
      <span className={styles.value}>{country}</span>
      <Dropdown
        placeholder="Select Country"
        fluid
        selection
        options={countries}
        onChange={(e, data) => {
          console.log(data);
          return dispatch(setCountry(data.value));
        }}
      />
    </>
  );
}
