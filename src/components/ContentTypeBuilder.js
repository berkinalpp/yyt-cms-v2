import React, { useEffect } from "react";
import { useState } from "react";
import $ from "jquery";
const ContentTypeBuilder = () => {


  const [fieldChoosen, setFieldChoosen] = useState({});

  const [fieldCount, setFieldCount] = useState(1);



  let A = {};
  const handleChange = (e) => {
    let index = parseInt(e.target.name)
    let field = e.target.value
    console.log(fieldChoosen);
    const newField = { ...fieldChoosen };
    newField[document.getElementById(index).value] = field;
    console.log(field);
    console.log(newField);
    setFieldChoosen(newField);
  };



  function addField() {
    $(`[name=${fieldCount - 1}]`).prop("disabled", true);
    $(`[name=${fieldCount - 1}]`).prop("disabled", true);
    $(`[id=${fieldCount - 1}]`).prop("disabled", true);
    setFieldCount((prev) => prev + 1)
  }

  let fields = [];

  let types = ["number", "string", "date", "boolean"];

  for (let i = 0; i < fieldCount; i++) {
    //console.log(i);
    fields.push(
      <section>
        <label htmlFor={i}>Field Name</label>
        <input type="text" id={i}></input>
        {types.map((value) => (
          <>
            <input
              type="radio"
              name={i}
              id={value}
              value={value}
              onChange={handleChange}
            />
            <label htmlFor={i}>{value}</label>
          </>
        ))}
      </section>
    );
  }

  return (
    <main>
      {fields}
      <button onClick={addField}>
        Hız. Ben hızım.
      </button>
    </main>
  );
};

export default ContentTypeBuilder;
