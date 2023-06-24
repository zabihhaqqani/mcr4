import React from "react";
import { useDataContext } from "../components/context/context";
import UserPosts from "./userPost";
import { useNavigate } from "react-router-dom";
// import ProductCard from '../components/productCard/productCard';

function LandingPage() {
  const {latestVoteHandler} = useDataContext()
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="sidebar">
          <ul className="sidebar-items">
            <li onClick={() => navigate("/")}>
              <i className="fa-solid fa-house fa-lg"></i>
              Home
            </li>
            <li>
              {" "}
              <i className="fa-solid fa-compass fa-lg"></i>Explore
            </li>
            <li>
              <i className="fa-solid fa-bookmark fa-lg"></i>BookMarks
            </li>
            <li>
              {" "}
              <i className="fa-solid fa-user fa-lg"></i>Profile
            </li>
          </ul>
        </div>
        <div className="content">
          <h3 style={{ textAlign: "left", marginLeft: "1.5rem" ,padding:"1rem" }}>
            Latest Posts
          </h3>
          <UserPosts />
        </div>
        <div className="sidebar">
          <select  name="" id="">
            <option disabled value="Sort By">Sort By</option>
            <option onClick={latestVoteHandler}  value="Latest Vote">Latest Vote</option>
            <option value="Most UpVoted Post">Most UpVoted Post</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
