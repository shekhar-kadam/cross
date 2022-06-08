import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("contactData")));
  }, []);

  const deleteData = (i) => {
    data.splice(i, 1);
    setData([...data]);
  };

  useEffect(() => {
    localStorage.setItem("contactData", JSON.stringify(data));
  }, [data]);

  return (
    <Layout>
      {data.length == 0 ? (
        <>
          <div className="text-2xl mt-8 font-bold text-center text-[red]">
            No Contacts found in your list
          </div>
          <div className="m-auto mt-8 text-center border-2 border-black rounded-lg w-28">
            <Link to="addContact">Add Contact</Link>
          </div>
        </>
      ) : (
        <table
          style={{ width: 800 }}
          className="p-3 m-auto mt-10 border-2 border-black"
        >
          <thead className="border-2 border-black">
            <th> Name</th>
            <th>Phone</th>
            <th>Type</th>
            <th>Whatsapp</th>
            <th>Actions</th>
          </thead>
          <tbody style={{ margin: "10px" }}>
            {data.map((elem, i) => (
              <>
                <tr>
                  <td className="text-center">{elem.fName}</td>

                  <td className="text-center">{elem.phone}</td>

                  <td className="text-center">{elem.type}</td>

                  <td className="text-center">
                    {elem.isWhatsapp ? "Yes" : "No"}
                  </td>

                  <button
                    className="p-3 m-5 border-2 border-black rounded-lg"
                    onClick={() => deleteData(i)}
                  >
                    Delete
                  </button>

                  <Link
                    className="p-3 m-5 border-2 border-black rounded-lg"
                    to={`/addContact/${i}`}
                  >
                    Update
                  </Link>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
}

export default Home;
