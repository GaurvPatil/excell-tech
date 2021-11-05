import { useEffect, useState } from "react";
import EmployeeCard from "./Components/EmployeeCard";
import Loading from "./Components/Loading";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching data
  const fetching = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const employeData = await response.json();
      setLoading(false);
      setData(employeData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // call fetching function //first render()
  useEffect(() => {
    fetching();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <EmployeeCard data={data} />
    </>
  );
}

export default App;
