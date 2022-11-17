import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAllCategories,
  getAlllocations,
  getUser,
  updateUser,
} from "./helper/ProfileHelper";

const UpdateProfile = () => {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(false);

  const [user, setUser] = useState("");

  const loadUser = () => {
    getUser().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setUser(data);
      }
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const [values, setValues] = useState({
    location: "",
    prefrence1: "",
    prefrence2: "",
    prefrence3: "",
    error: "",
    loading: false,
  });

  const { prefrence1, prefrence2, prefrence3 } = values;

  const loadAllCategories = () => {
    getAllCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadAllLocations = () => {
    getAlllocations().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setLocations(data);
      }
    });
  };

  useEffect(() => {
    loadAllCategories();
  }, []);

  useEffect(() => {
    loadAllLocations();
  }, []);

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const navigate = useNavigate();

  const onSubmit = (event) => {
    if (
      prefrence1 !== prefrence2 ||
      prefrence2 !== prefrence3 ||
      prefrence1 !== prefrence3
    ) {
      event.preventDefault();
      setValues({ ...values, error: "", loading: true });

      updateUser(user, values);
      navigate("/newshome");
    } else {
      //errorMessage();
    }
  };

  return (
    <section className="updateprofile">
      <div>
        <h1>Update Prefrences</h1>
        <label htmlFor="location">Select a Location:</label>
        <select
          name="location"
          id="location"
          onChange={handleChange("location")}
        >
          <option value={""}>Select a location</option>
          {locations.map((location) => {
            return (
              <option key={location._id} value={location.code}>
                {location.name}
              </option>
            );
          })}
        </select>
        <br />
        <label htmlFor="category">Select 1st prefrence:</label>
        <select
          name="category1"
          id="category1"
          onChange={handleChange("prefrence1")}
        >
          <option value={""}>Select a category</option>
          {categories.map((category) => {
            return (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </select>
        <br />
        <label htmlFor="location">Select 2nd prefrence:</label>
        <select
          name="category2"
          id="category2"
          onChange={handleChange("prefrence2")}
        >
          <option value={""}>Select a category</option>
          {categories.map((category) => {
            if (prefrence1 != category.name || prefrence3 != category.name) {
              return (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              );
            }
          })}
        </select>
        <br />
        <label htmlFor="location">Select 3rd prefrence:</label>
        <select
          name="category3"
          id="category3"
          onChange={handleChange("prefrence3")}
        >
          <option value={""}>Select a category</option>
          {categories.map((category) => {
            return (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>

      <button type="submit" onClick={onSubmit} href="/home">
        Submit
      </button>
    </section>
  );
};

export default UpdateProfile;
