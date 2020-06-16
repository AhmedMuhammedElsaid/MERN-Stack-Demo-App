const fetch = require("node-fetch");

// First Function
const getCountryByName = async () => {
  const API_URL = `https://restcountries.eu/rest/v2/name/Germany`;
  const fetchData = await fetch(API_URL);
  const data = await fetchData.json();
  return data;
};

// Helper Function to get the common countries that shared a part with anyone of the array elements
function getCommonParts(bigArray, smallArray) {
  let bigArray_sorted = bigArray.sort().join(" ").toLowerCase().split(" ");
  let smallArray_sorted = smallArray.sort().join(" ").toLowerCase().split(" ");
  let commonParts = [];
  let i = 0;
  let j = 0;

  while (j < smallArray_sorted.length) {
    if (i >= bigArray_sorted.length) {
      i = 0;
      j++;
    }
    if (bigArray_sorted[i].includes(smallArray_sorted[j])) {
      commonParts.push(bigArray_sorted[i]);
      j++;
    }
    i++;
  }
  return commonParts;
}

//Second Function :)
const getData = async (strArr) => {
  const fetchedData = await fetch(
    "https://restcountries.eu/rest/v2/region/europe"
  );
  let data = await fetchedData.json();
  let countries = await data.map((val) => val.name);
  // returns a list of countries where their name matches at least a part of one of these string
  let commonParts = getCommonParts(countries, strArr);
  return commonParts;
};

//Slot Machine Game
function slotMachine(userCoins) {
  let coins = userCoins;
  coins--;
  let result, level, data;
  let Reel1 = [
    "cherry",
    "lemon",
    "apple",
    "lemon",
    "banana",
    "banana",
    "lemon",
    "lemon",
  ];
  let Reel2 = [
    "lemon",
    "apple",
    "lemon",
    "lemon",
    "cherry",
    "apple",
    "banana",
    "lemon",
  ];
  let Reel3 = [
    "lemon",
    "apple",
    "lemon",
    "apple",
    "cherry",
    "lemon",
    "banana",
    "lemon",
  ];
  let span1 = Reel1[Math.floor(Math.random() * 7)];
  let span2 = Reel2[Math.floor(Math.random() * 7)];
  let span3 = Reel3[Math.floor(Math.random() * 7)];

  if (span1 === "cherry" && span2 === "cherry" && span3 === "cherry") {
    level = `You Got Three Kind Of cherry And Your Coins Increased By 50`;
    coins += 50;
  } else if (span1 === "apple" && span2 === "apple" && span3 === "apple") {
    level = `You Got Three Kind Of apple And Your Coins Increased By 20`;
    coins += 20;
  } else if (span1 === "banana" && span2 === "banana" && span3 === "banana") {
    level = `You Got Three Kind Of banana And Your Coins Increased By 15`;
    coins += 15;
  } else if (span1 === "lemon" && span2 === "lemon" && span3 === "lemon") {
    level = `You Got Three Kind Of lemon And Your Coins Increased By 3`;
    coins += 3;
  } else if (
    (span1 === "apple" && span2 === "apple") ||
    (span1 === "apple" && span3 === "apple") ||
    (span2 === "apple" && span3 === "apple")
  ) {
    level = `You Got Two Apples In Row And Your Coins Increased By 10`;
    coins += 10;
  } else if (
    (span1 === "cherry" && span2 === "cherry") ||
    (span1 === "cherry" && span3 === "cherry") ||
    (span2 === "cherry" && span3 === "cherry")
  ) {
    level = `You Got Two  cherries In Row And Your Coins Increased By 40`;
    coins += 40;
  } else if (
    (span1 === "banana" && span2 === "banana") ||
    (span1 === "banana" && span3 === "banana") ||
    (span2 === "banana" && span3 === "banana")
  ) {
    level = `You Got Two  bananas In Row And Your Coins Increased By 5`;
    coins += 5;
  } else {
    level = `You Are Not Lucky Today You Have Lost One Coin`;
  }

  data = [span1, span2, span3, level, coins];

  return data;
}

module.exports = {
  getCountryByName: getCountryByName,
  getCommonCountries: getData,
  slotMachine: slotMachine,
};
