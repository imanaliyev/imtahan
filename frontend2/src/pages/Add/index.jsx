import React, { useEffect, useState } from "react";
import "./add.scss";
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
function Add() {
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState("");
  const [sorted, setSorted] = useState(null);
  const navigate = useNavigate();

  const Post = (values) => {
    fetch("http://localhost:8080/", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigate("/");
  };

  const getFetch = () => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  const deletItem = (id) => {
    fetch(`http://localhost:8080/${id}`, { method: "DELETE" });
  };
  useEffect(() => {
    getFetch();
  }, [data]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section id="add">
        <Formik
          initialValues={{ image: "", header: "", text: "" }}
          validationSchema={Yup.object({
            image: Yup.string()
              .min(10, "Must be 10 characters or more")
              .required("Required"),
            header: Yup.string()
              .max(100, "Must be 2100 characters or less")
              .required("Required"),
            text: Yup.string()
              .max(100, "Must be 100 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              Post(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <h2>Add Your Item</h2>

            <Field name="image" type="text" placeHolder={"image-url"} />
            <h4>
              <ErrorMessage name="image" />
            </h4>

            <Field name="header" type="text" placeHolder={"header"} />
            <h4>
              <ErrorMessage name="header" />
            </h4>

            <Field name="text" type="text" placeHolder={"text"} />
            <h4>
              <ErrorMessage name="text" />
            </h4>

            <button type="submit">Submit</button>
          </Form>
        </Formik>

        <div className="ssearch">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearched(e.target.value)}
          />
          <div className="buttons">
            <button
              onClick={() => setSorted({ property: "header", asc: true })}
            >
              a-z
            </button>
            <button
              onClick={() => setSorted({ property: "header", asc: false })}
            >
              z-a
            </button>
            <button onClick={() => setSorted(null)}>defoult</button>
          </div>
        </div>
        <table id="customers">
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Header</th>
            <th>text</th>
            <th>Delete</th>
          </tr>
          {[...data]
            .sort((a, b) => {
              if (sorted && sorted.asc) {
                return a[sorted.property] > b[sorted.property]
                  ? 1
                  : b[sorted.property] > a[sorted.property]
                  ? -1
                  : 0;
              } else if (sorted && sorted.asc === false) {
                return a[sorted.property] < b[sorted.property]
                  ? 1
                  : b[sorted.property] < a[sorted.property]
                  ? -1
                  : 0;
              } else {
                return 0;
              }
            })
            .filter((x) =>
              x.header.toLowerCase().includes(searched.toLowerCase())
            )
            .map((x) => (
              <tr>
                <td>{x._id}</td>
                <td>
                  <img src={x.image} alt="" />
                </td>
                <td>{x.header}</td>
                <td>{x.text}</td>
                <td>
                  <button onClick={() => deletItem(x._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </table>
      </section>
    </>
  );
}

export default Add;
