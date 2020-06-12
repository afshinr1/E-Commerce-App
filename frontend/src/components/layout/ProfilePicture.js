import React, { useState } from "react";
import axios from "axios";

import Cookies from "universal-cookie";

export default function ProfilePicture(props) {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post(
        `http://localhost:5000/upload?username=${cookies.get("username")}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.log("there was error in server");
    }
  };
  console.log(fileName);
  const cookies = new Cookies();
  console.log(
    window.location.origin + `/profile_imgs/${cookies.get("profileimg")}`
  );
  console.log(`${uploadedFile.fileName}`);
  if (uploadedFile.fileName) cookies.set("profileimg", uploadedFile.fileName);

  return (
    <div className="upload">
      {uploadedFile.filePath ? (
        <img
          src={window.location.origin + `${uploadedFile.filePath}`}
          alt=""
        ></img>
      ) : (
        <img
          src={
            window.location.origin +
            `/profile_imgs/${cookies.get("profileimg")}`
          }
          alt=""
        />
      )}
      <form className="upload-form" onSubmit={onSubmit}>
        <input type="file" id="customFile" onChange={onChange}></input>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
