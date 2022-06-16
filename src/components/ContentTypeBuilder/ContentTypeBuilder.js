import React, { useEffect } from "react";
import { useState } from "react";
import $ from "jquery";
import "./ContentTypeBuilder.css";
const ContentTypeBuilder = () => {
  const [fieldCount, setFieldCount] = useState(1);                      //Content type içindeki field sayısını tutan state.
  const [preview, setPreview] = useState([]);                           //Oluşturulan content type'ın önizlemesini içeren html elementlerini tutan state.

  function control() {                                                  //Control fonksiyonu field alanının ismi ve türünün girilip girilmediğini kontrol eder.
    let fieldType = $(`input[name=${fieldCount}]:checked`).val();      
    let fieldName = $(`input[id=${fieldCount}]`).val();
    let isOK = fieldType && fieldName.length != 0;                      //Field tipi ve ismi yoksa false varsa true döndürür.
    return isOK;
  }

  function addField(e) {
    // tek amaç == yeni field için html elementleri ekle.
    if (control()) {                                                    //Son field girilmediyse yeni field eklemez.
      setFieldCount((prev) => prev + 1);                                //fieldCount state'ini arttırır ve sayfaya yeni field için elementler ekler.
      $(`[name=${fieldCount}]`).prop("disabled", true);                 //önceki field ekleme elementlerini disable eder.
      $(`[id=${fieldCount}]`).prop("disabled", true);
      $(`[id=${-fieldCount}]`).prop("disabled", true);
    } else {  
      alert("Enter Content Type Name, Field Name and Field Type.");
    }
  }
  function showTable(createdContentType) {                              //previewTable fonksiyonu tarafından çağırılır.
    let table = [];                                                     //oluşturulan json objesi tablo içine yerleştirilir.
    for (let i = 1; i <= fieldCount; i++) {                             //her bir field için yeni satır oluşturulur
      let field = Object.values(createdContentType.fields[i-1]);
      let fieldName = field[1];
      let fieldType = field[0];
      let isMandatory = field[2];
      console.log(isMandatory);
      table.push(
            <tbody>
              <tr>
                <td>{fieldName}</td>
                <td>{fieldType}</td>
                <td>{isMandatory ? "Required" : "Non-required"}</td>
              </tr>
            </tbody>
      );
    }
    setPreview(table);                                                  //oluşturulan tablo sayfaya eklenmesi için state içine atılır.
  }
  function previewTable() {
    if (control() && $(`input[id="contentType"]`).val().length != 0) {  // control fonksiyonu tablo gösterileceği zaman content type name'in de varlığı kontrol edileceği için yetersiz kalır.
      let fields = [];                                                  // eklenmiş tüm fieldları tutan array.
      for (let i = 1; i <= fieldCount; i++) {
        let field = {};                                                 //her bir fieldı için bir obje oluşturulur ve fielda ait özellikle içinde tutulur.
        field["fieldType"] = $(`input[name=${i}]:checked`).val();
        field["fieldName"] = $(`input[id=${i}]`).val();
        field["isMandatory"] = $(`[id=${-i}]`).is(":checked");
        fields.push(field);                                             //oluşturulan obje, fields dizisine atanır.
      }
      let contentType = {};                                             //field'larla birlikte contentType'a ait özellikleri de depolayan obje.
      contentType["typeName"] = $(`[id="contentType"]`).val();
      contentType["fields"] = fields;
      showTable(contentType);                                           //önizleme tablosunu oluşturur.
    } else {
      alert("Enter Content Type Name, Field Name and Field Type.");
    }
  }

  let fields = [];

  let types = ["number", "string", "date", "boolean"]; //tipleri tutan array. İşte buna comment derim

  for (let i = 1; i <= fieldCount; i++) {
    //field sayısı kadar elementi oluşturan ve bunları fields içinde tutan döngü
    //console.log(i);
    fields.push(
      //field içine atıyor
      <div>
        <label htmlFor={i}>Field Name</label>
        <input type="text" id={i}></input>
        {types.map(
          (
            value //her bir tip için radio button oluşturuyor.
          ) => (
            <>
              <input
                type="radio"
                name={i} //0,1,2 gibi isimleri olacak. Bu sayede field sayısını kullanarak bu butonlardaki verilere kolayca ulaşabileceğiz.
                value={value} //value için number, boolean gibi değerleri tutar ki ulaşabilelim.
              />
              <label>{value}</label>
            </>
          )
        )}
        <input type="checkbox" id={-i}></input>
        <label htmlFor={-i}>{-i}</label>
      </div>
    );
  }

  return (
    <main>
      <label htmlFor="contentType">Cotent Type Name</label>
      <input type="text" id="contentType"></input>
      <section>{fields}</section>
      
      <button onClick={addField}>
        {" "}
        {/*yeni field oluşturmak için gerekli fonksiyonu şaapıyor.*/}
        Add new field
      </button>
      <button id="preview" onClick={previewTable}>
        {" "}
        {/*json formatı haline getirip ekranda önizleme oluşturuyor.*/}
        Preview Content Type
      </button>
      <section>
        <table id="fieldInfo">
        <tr>
                <th>Field Name</th>
                <th>Field Type</th>
                <th>Mandatory</th>
              </tr>
        {preview}</table>
      </section>
    </main>
  );
};

export default ContentTypeBuilder;
