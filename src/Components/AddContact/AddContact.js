import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./AddContact.css";

function AddContact() {
  let { id } = useParams();

  let navigate = useNavigate();

  let localData = JSON.parse(localStorage.getItem("contactData"));
  const [formData, setFormData] = useState({
    fName: "",
    phone: "",
    type: "",
    isWhatsapp: false,
    profile: "",
  });

  const [data, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.fName === "" &&
      formData.phone === "" &&
      formData.type === ""
    ) {
      alert("please Fill the details First");
    } else {
      if (id) {
        let submitData = localData;
        submitData[id] = formData;
        localStorage.setItem("contactData", JSON.stringify(submitData));
      } else {
        setData([...data, formData]);
      }

      setFormData({
        fName: "",
        phone: "",
        type: "",
        isWhatsapp: false,
      });
      if (id) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    console.log("currentId==>", id);
  }, []);

  const handleChange = (event) => {
    let name = event.target.name;
    let value;
    if (event.target.type == "checkbox") {
      value = event.target.checked;
      console.log("hhhhhh", value);
    } else {
      value = event.target.value;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setLocalData = (data) => {
    localStorage.setItem("contactData", JSON.stringify(data));
  };

  useEffect(() => {
    if (data) setLocalData(data);
  }, [data]);

  useEffect(() => {
    let tempData = JSON.parse(localStorage.getItem("contactData"));
    if (tempData) {
      setData(tempData);
    }
  }, []);

  const updateData = (i) => {
    let tempData = {};

    console.log("localData", localData);
    localData.forEach((elem, index) => {
      if (i == index) {
        console.log("update", elem);
        tempData = elem;
      }
    });

    setFormData(tempData);
  };

  useEffect(() => {
    if (data && id) {
      updateData(id);
    }
  }, [data, id]);

  return (
    <Layout>
      <h1 className="pt-5 text-xl font-bold text-center">
        {id ? "Edit" : "Add"} Contact {id ? "of" : "To"} Your List
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="fName"
          placeholder="Enter Name"
          onChange={handleChange}
          value={formData.fName}
          className="inputClass"
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Your Phone"
          onChange={handleChange}
          value={formData.phone}
          className="inputClass"
        />
        <select
          value={formData.type}
          onChange={handleChange}
          name="type"
          className="inputClass"
        >
          <option value="">select An Option</option>
          <option value="personal">Personal</option>
          <option value="office">Office</option>
        </select>
        <div className="flex">
          <label className="pt-2 font-bold border-none selectClass">
            <input
              type="checkbox"
              name="isWhatsapp"
              onChange={handleChange}
              value={formData.isWhatsapp}
              checked={formData.isWhatsapp}
            />
            Select your Whatsapp status
          </label>
        </div>

        <button
          className="w-32 m-auto border-2 border-black rounded-lg"
          type="submit"
        >
          submit
        </button>
      </form>
    </Layout>
  );
}

export default AddContact;
