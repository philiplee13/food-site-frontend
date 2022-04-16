import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import createComboPlates from "./ComboPlates";
import createFamilyDinner from "./FamilyDinner";
import createSingleItems from "./SingleItem";

// data imports
import comboPlatesForOneData, {
  miniComboData,
  specialComboPlatesForOneData,
  familyDinnerData,
  appetizerData,
  soupData,
  chowMeinNoodleData,
  sweetAndSourData,
  friedRiceData,
  beefData,
  chickenData,
  seafoodData,
  chopSueyData,
  weightWatchersData,
  veggieData,
} from "../data";

function App() {
  /*
    These will be all the states for the app
    There's defenitely a better way to do this
    */

  // This is for "combo-plate-one"
  const [comboPlateOne, setComboPlateOne] = useState(false);
  function toggleComboPlateOne() {
    setComboPlateOne(!comboPlateOne);
  }
  // This is for the "special-combo-plate-one"
  const [specialComboPlateOne, setSpecialComboPlateOne] = useState(false);
  function toggleSpecialComboPlate() {
    setSpecialComboPlateOne(!specialComboPlateOne);
  }

  // This is for the "mini-combo-plate"
  const [miniComboPlate, setMiniComboPlate] = useState(false);
  function toggleMiniComboPlate() {
    setMiniComboPlate(!miniComboPlate);
  }

  // This is for the "family-dinner"
  const [familyDinner, setFamilyDinner] = useState(false);
  function toggleFamilyDinner() {
    setFamilyDinner(!familyDinner);
  }

  // This is for the "appetizers"
  const [apps, setApps] = useState(false);
  function toggleApps() {
    setApps(!apps);
  }

  // This is for the "soups"
  const [soups, setSoups] = useState(false);
  function toggleSoups() {
    setSoups(!soups);
  }

  // This is for the "chow-mein"
  const [chowMein, setChowMein] = useState(false);
  function toggleChowMein() {
    setChowMein(!chowMein);
  }

  // This is for the "sweet-and-sour"
  const [sweetAndSour, setSweetAndSour] = useState(false);
  function toggleSweetAndSour() {
    setSweetAndSour(!sweetAndSour);
  }

  // This is for the "fried-rice"
  const [friedRice, setFriedRice] = useState(false);
  function toggleFriedRice() {
    setFriedRice(!friedRice);
  }

  // This is for the "beef"
  const [beef, setBeef] = useState(false);
  function toggleBeef() {
    setBeef(!beef);
  }

  // This is for the "chicken"
  const [chicken, setChicken] = useState(false);
  function toggleChicken() {
    setChicken(!chicken);
  }

  // This is for the "seafood"
  const [seafood, setSeafood] = useState(false);
  function toggleSeafood() {
    setSeafood(!seafood);
  }

  // This is for the "veggies"
  const [veggie, setVeggies] = useState(false);
  function toggleVeggies() {
    setVeggies(!veggie);
  }

  // This is for the "chop-suey"
  const [chopSuey, setChopSuey] = useState(false);
  function toggleChopSuey() {
    setChopSuey(!chopSuey);
  }

  // This is for the "weight-watchers"
  const [weightWatchers, setWeightWatchers] = useState(false);
  function toggleWeightWatchers() {
    setWeightWatchers(!weightWatchers);
  }

  return (
    <div>
      <Header />
      <div className="allButtons">
        {/* first row start */}
        {/* first button start */}
        <div className="row combo-plate-one">
          <div className="column combo-plate-one">
            <div className="card combo-plate-one">
              <div className={comboPlateOne ? "active" : null}>
                <button
                  name="combo-plate-one allButtons"
                  className="button"
                  onClick={toggleComboPlateOne}
                >
                  Combo Plates for One
                </button>
                {comboPlateOne && comboPlatesForOneData.map(createComboPlates)}
              </div>
            </div>
          </div>
          {/* first button end */}
          {/* second button start */}
          <div className="column special-combo-plate-one">
            <div className="card special-combo-plate-one">
              <div className={specialComboPlateOne ? "active" : null}>
                <button
                  name="special-combo-plate-one"
                  className="button"
                  onClick={toggleSpecialComboPlate}
                >
                  Special Combo Plates for One
                </button>
                {specialComboPlateOne &&
                  specialComboPlatesForOneData.map(createComboPlates)}
              </div>
            </div>
          </div>
          {/* second button end */}
          {/* third button start */}
          <div className="column mini-combo-plate">
            <div className="card mini-combo-plate">
              <div className={miniComboPlate ? "active" : null}>
                <button
                  name="mini-combo-plate"
                  className="button"
                  onClick={toggleMiniComboPlate}
                >
                  Miniature Combo
                </button>
                {miniComboPlate && miniComboData.map(createComboPlates)}
              </div>
            </div>
          </div>
        </div>
        {/* third button end */}
        {/* first row end */}

        {/* second row start */}
        {/* fourth button start */}
        <div className="row family-dinner">
          <div className="column family-dinner">
            <div className="card family-dinner">
              <div className={familyDinner ? "active" : null}>
                <button
                  name="family-dinner"
                  className="button"
                  onClick={toggleFamilyDinner}
                >
                  Family Dinners
                </button>
                {familyDinner && familyDinnerData.map(createFamilyDinner)}
                {/* <textarea className={familyDinner ? "active" : null} cols="30" rows="3">
          All portions are increased proportionally according to the number of
          persons
        </textarea> */}
              </div>
            </div>
          </div>
          {/* fourth button end */}

          {/* fifth button start */}
          <div className="column appetizers">
            <div className="card appetizers">
              <div className={apps ? "active" : null}>
                <button
                  name="appetizers"
                  className="button"
                  onClick={toggleApps}
                >
                  Appetizers
                </button>
                {apps && appetizerData.map(createSingleItems)}
              </div>
            </div>
          </div>
          {/* fifth button end */}

          {/* sixth button start */}
          {/* <div className="row soups"> */}
          <div className="column soups">
            <div className="card soups">
              <div className={soups ? "active" : null}>
                <button name="soups" className="button" onClick={toggleSoups}>
                  Soups
                </button>
                {soups && soupData.map(createSingleItems)}
              </div>
            </div>
          </div>
        </div>
        {/* sixth button end */}
        {/* second row end */}

        {/* third row start */}
        {/* seventh button start */}
        <div className="row soups">
          <div className="column soups">
            <div className="card soups">
              <div className={chowMein ? "active" : null}>
                <button
                  name="chow-mein"
                  className="button"
                  onClick={toggleChowMein}
                >
                  Chow Mein
                </button>
                {chowMein && chowMeinNoodleData.map(createSingleItems)}
              </div>
            </div>
          </div>
          {/* seventh button end */}

          {/* eigth button start */}
          <div className="column sweet-and-sour">
            <div className="card sweet-and-sour">
              <div className={sweetAndSour ? "active" : null}>
                <button
                  name="sweet-and-sour"
                  className="button"
                  onClick={toggleSweetAndSour}
                >
                  Sweet and Sour
                </button>
                {sweetAndSour && sweetAndSourData.map(createSingleItems)}
              </div>
            </div>
          </div>
          {/* eigth button end */}

          {/* ninth button start */}
          <div className="column fried-rice">
            <div className="card fried-rice">
              <div className={friedRice ? "active" : null}>
                <button
                  name="fried-rice"
                  className="button"
                  onClick={toggleFriedRice}
                >
                  Fried Rice
                </button>
                {friedRice && friedRiceData.map(createSingleItems)}
              </div>
            </div>
          </div>
        </div>
        {/* ninth button end */}
        {/* third row end */}

        {/* fourth row start */}
        {/* tenth button start */}
        <div className="row beef">
          <div className="column beef">
            <div className="card beef">
              <div className={beef ? "active" : null}>
                <button name="beef" className="button" onClick={toggleBeef}>
                  Beef
                </button>
                {beef && beefData.map(createSingleItems)}
                {/* {beefData.spicyImg ? <img src="https://drive.google.com/thumbnail?id=1PrxCOEP2gTQvEY2swapNObKqboi3C_3L" alt="red-hot-chili"/> : "nothing"} */}
                {/* {beefData.image && <img src={beefData.image} alt="red-hot-chili"/>} */}
              </div>
            </div>
          </div>
          {/* tenth button end */}

          {/* eleventh button start */}
          <div className="column chicken">
            <div className="card chicken">
              <div className={chicken ? "active" : null}>
                <button
                  name="chicken"
                  className="button"
                  onClick={toggleChicken}
                >
                  Chicken
                </button>
                {chicken && chickenData.map(createSingleItems)}
              </div>
            </div>
          </div>
          {/* eleventh button end */}

          {/* tweleveth button start */}
          <div className="column seafood">
            <div className="card seafood">
              <div className={seafood ? "active" : null}>
                <button
                  name="seafood"
                  className="button"
                  onClick={toggleSeafood}
                >
                  Seafood
                </button>
                {seafood && seafoodData.map(createSingleItems)}
              </div>
            </div>
          </div>
        </div>
        {/* tweleveth button end */}
        {/* fourth row end */}

        {/* fifth row start */}
        {/* 13th button start */}
        <div className="row veggie">
          <div className="column veggie">
            <div className="card veggie">
              <div className={veggie ? "active" : null}>
                <button
                  name="veggie"
                  className="button"
                  onClick={toggleVeggies}
                >
                  Vegetables
                </button>
                {veggie && veggieData.map(createSingleItems)}
              </div>
            </div>
          </div>
          {/* 13th button end */}

          {/* 14th button start */}
          <div className="column chop-suey">
            <div className="card chop-suey">
              <div className={chopSuey ? "active" : null}>
                <button
                  name="chop-suey"
                  className="button"
                  onClick={toggleChopSuey}
                >
                  Chop Suey
                </button>
                {chopSuey && chopSueyData.map(createSingleItems)}
              </div>
            </div>
          </div>
          {/* 14th button end */}

          {/* 15th button start */}
          <div className="column chop-suey">
            <div className="card chop-suey">
              <div className={weightWatchers ? "active" : null}>
                <button
                  name="weight-watchers"
                  className="button"
                  onClick={toggleWeightWatchers}
                >
                  Weight Watchers
                </button>
                {weightWatchers && weightWatchersData.map(createSingleItems)}
              </div>
            </div>
          </div>
        </div>
        {/* 15th button end */}
        {/* fifth row end */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
