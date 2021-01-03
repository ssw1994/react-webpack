import React from "react";
import CheckBox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  categories,
  selectedcategories,
} from "../../store/selectors/util.selector";
import { selectedCategory } from "../../store/actions/util.action";
import { userSettings, activeMenu } from "../../store/selectors/menu.selector";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { setActiveMenu } from "../../store/actions/menu.action";
export function ProductCategories() {
  const allCategories = useSelector(categories);
  const selectedCategories = useSelector(selectedcategories);
  const dispatch = useDispatch();
  function handleChange(e) {
    let categories = [].concat(selectedCategories);
    if (e.target.value && selectedCategories.indexOf(e.target.value) === -1) {
      categories = categories.concat([e.target.value]);
    } else {
      categories.splice(categories.indexOf(e.target.value), 1);
    }
    dispatch(selectedCategory({ categories }));
  }

  return (
    <ul>
      {allCategories.map((category, key) => {
        return (
          <li key={key}>
            <span>
              <CheckBox
                value={category.id}
                checked={selectedCategories.indexOf(category.id) !== -1}
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                onChange={(e) => handleChange(e)}
              />
              {category.category}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function UsersSettings() {
  const settings = useSelector(userSettings);
  const cmenu = useSelector(activeMenu);
  console.log(cmenu);
  const dispatch = useDispatch();
  const setMenu = (event, route) => {
    event && event.stopPropagation();
    dispatch(setActiveMenu(route));
  };
  return (
    <div className="s-menus">
      <div className="nav-list">
        <nav>
          <ul>
            {settings.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={(e) => setMenu(e, item)}
                  className={cmenu[0].id === item.id ? "active" : ""}
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export function filterProducts() {
  return <></>;
}
