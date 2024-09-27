import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Customers = () => {
  const customerQuery = useQuery({
    queryKey: ["customers"],
    queryFn: () => {
      return axios("http://localhost:3000/api/customers");
    },

    refetchOnWindowFocus: false,
    cacheTime: 1000,
  });

  if (customerQuery.isLoading) {
    return <p>Patience...</p>;
  }

  if (customerQuery?.data?.data?.customers) {
    return (
      <div>
        {customerQuery.data.data.customers.map((customer) => {
          return <p key={customer.id}>{customer.name}</p>;
        })}
      </div>
    );
  }
};

export default Customers;
