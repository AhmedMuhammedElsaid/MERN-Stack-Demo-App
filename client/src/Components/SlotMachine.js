import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSlotMachine } from "../Store/actionCreator";
import Title from "./Title";

const SlotMachine = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.slotResult);

  let fruits = new Map();
  fruits
    .set("cherry", "🍒")
    .set("banana", "🍌")
    .set("apple", "🍎")
    .set("lemon", "🍋");
  console.log(result);
  return (
    <>
      <Title title="Slot Machine Game" center />
      <div className="mb-5 text-center text-capitalize text-primary">
        <p> 3 cherries in a row: won 50 coins </p>
        <p> 3 Apples in a row: won 20 coins </p>
        <p> 3 Bananas in a row: won 50 coins </p>
        <p> 3 lemons in a row: won 3 coins </p>
        <p> 2 cherries in a row: won 40 coins </p>
        <p> 2 Apples in a row: won 10 coins </p>
        <p> 2 Bananas in a row: won 5 coins </p>
      </div>

      <div className="row my-5">
        <div className=" col col-lg-3 col-sm-3 card">
          <div className="card-body">
            <div
              style={{ fontSize: "5rem", width: "100%", textAlign: "center" }}
            >
              {result.length > 0
                ? fruits.get(`${result[0]}`)
                : fruits.get("cherry")}
            </div>
          </div>
        </div>
        <div className=" col col-lg-3 col-sm-3 card">
          <div className="card-body">
            <div
              style={{ fontSize: "5rem", width: "100%", textAlign: "center" }}
            >
              {result.length > 0
                ? fruits.get(`${result[1]}`)
                : fruits.get("cherry")}
            </div>
          </div>
        </div>{" "}
        <div className=" col col-lg-3 col-sm-3 card">
          <div className="card-body">
            <div
              style={{ fontSize: "5rem", width: "100%", textAlign: "center" }}
            >
              {result.length > 0
                ? fruits.get(`${result[2]}`)
                : fruits.get("cherry")}
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-center text-capitalize my-5">
          {result.length > 0 ? `${result[3]}  ` : null}
        </h3>
        <h3 className="text-center text-capitalize my-5">
         
          {result.length > 0 ? `Your Coins now = ${result[4]}` : null}
        </h3>
      </div>
      <button
        style={{ maxWidth: "60%", fontSize: "1.5rem" }}
        className="btn-block mx-auto mb-5 btn btn-btn-lg btn-light "
        onClick={() => dispatch(getSlotMachine())}
      >
        PLAY
      </button>
    </>
  );
};
export default SlotMachine;
