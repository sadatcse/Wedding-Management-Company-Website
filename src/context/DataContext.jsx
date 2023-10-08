import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    

    fetch("ServiceData.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node, 
};