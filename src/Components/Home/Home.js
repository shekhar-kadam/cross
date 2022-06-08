import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Modal from "../Modal";

function Home() {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDeleteIndex, setCurrentDeleteIndex] = useState(0);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("contactData"));
    console.log(
      "storedData",
      storedData.sort((a, b) => a.fName.localeCompare(b.fName))
    );
    // setData(JSON.parse(localStorage.getItem("contactData")));
    setData(storedData);
  }, []);

  const deleteData = () => {
    data.splice(currentDeleteIndex, 1);
    setData([...data]);
  };

  useEffect(() => {
    localStorage.setItem("contactData", JSON.stringify(data));
  }, [data]);

  const handleCancle = () => {
    setModalVisible(false);
  };

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
        <table className="p-3 m-auto mt-10 overflow-y-scroll border-2 border-black lg:w-10/12 md:w-52">
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

                  <div className="flex w-40 lg:m-auto md:m-auto lg:mt-0 md:mt-4">
                    <button
                      className="border-2 border-black rounded-lg lg:p-3 lg:m-5 md:p-1 md:m-3"
                      onClick={() => {
                        setModalVisible(true);
                        setCurrentDeleteIndex(i);
                      }}
                    >
                      Delete
                    </button>

                    <Link
                      className="border-2 border-black rounded-lg lg:p-3 lg:m-5 md:p-1 md:m-3"
                      to={`/addContact/${i}`}
                    >
                      Update
                    </Link>
                  </div>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      )}
      <Modal
        modalVal={modalVisible}
        onCancle={handleCancle}
        onConfirm={deleteData}
      />
    </Layout>
  );
}

export default Home;