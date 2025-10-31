import React, { useState } from "react";
import { FollowersContext } from "./FollowersContext";

export const FollowersProvider = ({ children }) => {
  const [followers, setFollowers] = useState([]);

  const addFollower = (user) => {
  
    setFollowers((prev) =>
      prev.some((f) => f.id === user.id) ? prev : [...prev, user]
    );
  };

  const removeFollower = (id) => {
    setFollowers((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <FollowersContext.Provider value={{ followers, addFollower, removeFollower }}>
      {children}
    </FollowersContext.Provider>
  );
};
