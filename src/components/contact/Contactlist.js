import React, { useEffect } from "react";
import Contactcard from "./Contactcard";
import { useSelector, useDispatch } from "react-redux";

//redux part
import { setContact } from "../../store/contactSlice";
//backend part
import { fetchAllContact } from "../../api/contactapi";

const Contactlist = () => {
  const contact = useSelector((state) => state.contactElement);
  console.log("contactElement", contact);

  const dispatch = useDispatch();
  const getAll = async () => {
    const data = await fetchAllContact();
    console.log("je viens de la bd", data.contact);
    dispatch(setContact(data.contact));
  };
  //to get data from db
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      {contact.map((e) => (
        <Contactcard mini={e} getAll={getAll} />
      ))}
    </div>
  );
};

export default Contactlist;
