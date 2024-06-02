import React, { useEffect, useState } from "react";
import { axiosGet, axiosPost, axiosPut, axiosDelete } from "./axiosHelper";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosGet("/products_new.json");
        setData(result.data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchData();
  }, []);

  const handleAddData = async () => {
    const newData = { name: "New Product", description: "New Description" };
    try {
      const result = await axiosPost("/products", newData);
      setData((prevData) => [...prevData, result.data]);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleUpdateData = async () => {
    const updatedData = {
      name: "Updated Product",
      description: "Updated Description",
    };
    try {
      const result = await axiosPut("/products/1", updatedData);
      setData((prevData) =>
        prevData.map((item) => (item.id === 1 ? result.data : item))
      );
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleDeleteData = async () => {
    try {
      await axiosDelete("/products/1");
      setData((prevData) => prevData.filter((item) => item.id !== 1));
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <h1>Data from API</h1>
      {data.length ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleAddData}>Add Data</button>
      <button onClick={handleUpdateData}>Update Data</button>
      <button onClick={handleDeleteData}>Delete Data</button>
    </div>
  );
}

export default App;
