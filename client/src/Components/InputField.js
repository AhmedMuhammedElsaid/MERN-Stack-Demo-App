import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Title from "./Title";
import styled from "styled-components";
import { getFilteredCountry } from "../Store/actionCreator";

const InputField = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        dispatch(getFilteredCountry(name));
        e.preventDefault();
        setName("");
    };

    return (
        <>
            <Title title="Get The Country Info By typing  the Name Or Just Click on the country name in the table" center />
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
                                placeholder="Filter the list by a country name Germany Egypt Netherlands "
                            />
                        </div>
                        <button
                            type="submit"
                            className="col col-sm-4  btn btn-lg btn-primary"
                        >
                            Filter
            </button>
                    </div>
                </form>
            </div>
            <Space></Space>
         
        </>
    );
};

export default InputField;

const Space = styled.div`
  margin-bottom: 100px;
`;
