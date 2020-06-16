import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Title from "./Title";
import styled from "styled-components";
import { getCountry } from "../Store/actionCreator";

const InputForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountry(name));
    setName("");
  };

  return (
    <div className="container">
      <Title title="Get The Country Info By Name" center />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group row mt-5">
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-lg"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type a county name ex: germany bulgaria netherlands Albania "
              />
            </div>
            <button
              type="submit"
              className="col col-sm-4  btn btn-lg btn-primary"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <Space></Space>
    </div>
  );
};

export default InputForm;

const Space = styled.div`
  margin-bottom: 100px;
`;
