import axios from "axios";

export const fetchAllContact = async () => {
  const { data } = await axios.get("http://localhost:4000/contact/getAll");
  return data;
};

export const postContact = async (values) => {
  const addContact = await axios.post(
    "http://localhost:4000/contact/addContact",
    {
      ...values,
    }
  );
};
export const updateContact = async (id, values) => {
  const updateContact = await axios.put(
    `http://localhost:4000/contact/updateContact/${id}`,
    values
  );
};
export const deleteContact = async (id) => {
  const deleteContact = await axios.delete(
    `http://localhost:4000/contact/deleteContact/${id}`
  );
};
export const getUnique = async (id) => {
  const { data } = await axios.get(
    `http://localhost:4000/contact/getUnique/${id}`
  );
  return data;
};
