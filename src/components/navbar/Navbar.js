import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import NavbarItem from "./NavbarItem";
import NavbarItemNoDD from "./NavbarItemNoDD";

function Navbar() {
  return (
    <nav>
      <ul className="links-list">
        <NavbarItemNoDD title={"Discover"} highlighted={false}></NavbarItemNoDD>
        <NavbarItem
          title={"Recipes"}
          highlighted={true}
          contents={[
            [
              "Meals",
              "Appetizers",
              "Breakfast",
              "Dessert",
              "Dinner",
              "Drinks",
              "Lunch",
              "Snacks",
            ],
            [
              "Cuisine",
              "American",
              "Chinese",
              "Greek",
              "Indian",
              "Italian",
              "Japanese",
              "Mexican",
            ],
            [
              "Diet",
              "Gluten-Free",
              "Dairy-Free",
              "Keto",
              "Low Calorie",
              "Low Carb",
              "Vegetarian",
              "Vegan",
            ],
          ]}
        ></NavbarItem>
        <NavbarItem
          title={"Collections"}
          highlighted={false}
          contents={[
            ["OOga", "Booga"],
            ["Lipton", "Iced Tea"],
          ]}
        ></NavbarItem>
      </ul>
    </nav>
  );
}

export default Navbar;
