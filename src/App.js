import { useQuery } from "@tanstack/react-query";
import "./App.css";
import axios from "axios";

function App() {

  const customerQuery = useQuery({
    queryKey: ["customers"],
    queryFn: () => {
      return axios("http://localhost:3000/api/customers");
    },

    refetchOnWindowFocus: true,
    refetchInterval: 1000 ,
  });

  if(customerQuery?.data?.data?.customers){
  return (
    <div className="App">
      {customerQuery.data.data.customers.map((customer) => {
        return <p key={customer.id}>{customer.name }</p>
      })}
    </div>
  );
}
}

export default App;
