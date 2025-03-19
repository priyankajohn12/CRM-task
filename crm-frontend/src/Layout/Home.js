import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch customer data from the API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/customers', {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('@token'))}`,
          },
        });
        setCustomers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch customers.');
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="home-container">
      <h1>Customer List</h1>
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td>{customer._id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
