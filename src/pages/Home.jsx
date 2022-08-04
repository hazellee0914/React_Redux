import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";



const Home = () => {
  return (
    <Layout>
      <Header />
      <TodoForm />
      <TodoList />
    </Layout>
    
  );
};

export default Home;