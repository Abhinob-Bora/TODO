import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  const [userTodos, setUserTodos] = useState([]); // State to store user-specific todos

  useEffect(() => {
    // Fetch user-specific todos based on props.userId (assuming you have it in props)
    axios.get(`/api/getUserTodos/${props.userId}`)
      .then((response) => {
        setUserTodos(response.data); // Update userTodos state with fetched todos
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [props.userId]); // Run this effect whenever props.userId changes

  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {userTodos.length > 0 && sort === "active"
            ? userTodos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      // Pass any necessary functions for your TodoItem component
                    />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {userTodos.length > 0 && sort === "completed"
            ? userTodos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      // Pass any necessary functions for your TodoItem component
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {userTodos.length > 0 && sort === "all"
            ? userTodos.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    // Pass any necessary functions for your TodoItem component
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default DisplayTodos;
