import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./TranscriptionPage.scss";

import Btn from "../../components/Btn/Btn";

// load simulated data from json file
import data from "../../data/texts.json";

const TranscriptionPage = () => {
  // component states
  const [text, setText] = useState({});
  const [userScore, setUserScore] = useState(0);
  const [userInput, setUserInput] = useState("");

  // helper function
  const getText = (texts) => {
    const nextText = texts[Math.floor(Math.random() * texts.length)];

    if (nextText.id !== text.id) {
      setText(nextText);
    } else {
      getText(texts);
    }
  };

  // event handlers
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserScore(userScore + text.point_value);
    getText(data);
  };

  // react hooks
  useEffect(() => {
    getText(data);
  }, []);

  useEffect(() => {
    // reset user input when a new text loads
    setUserInput("");
  }, [text]);

  return (
    text && (
      <div className="transcription">
        <div className="transcription__content-container">
          <div className="transcription__scores">
            <p>
              Your current score is{" "}
              <span className="bold">{userScore} points</span>.
            </p>
            <p>
              This text is worth{" "}
              <span className="bold">{text.point_value} points</span>.
            </p>
          </div>
          <div className="transcription__image-display">
            <img
              className="transcription__image"
              src={`/images/${text.image_url}`}
              alt=""
            />
          </div>
          <p className="transcription__text">
            {userInput?.split("").map((letter, i) => (
              <span
                key={uuidv4()}
                className={`transcription__letter ${
                  letter === text.transcription[i]
                    ? ""
                    : "transcription__letter--error"
                }`}
              >
                {letter}
              </span>
            ))}
          </p>
          <form className="transcription__interface" onSubmit={handleSubmit}>
            <input
              className="transcription__input"
              name="input"
              type="text"
              placeholder="type here"
              value={userInput}
              onChange={handleInputChange}
              autoComplete="off"
              autoCapitalize="off"
            ></input>
            <div className="transcription__controls">
              <Btn
                btnType="submit"
                btnText="Next"
                btnModifier="success"
                btnDisabled={userInput !== text.transcription}
              />
            </div>
          </form>
          <section>
            <h2>Instructions</h2>
            <ol>
              <li>Start typing the letters you see in the image</li>
              <li>The feedback section will display what you type</li>
              <li>
                Change the incorrect (red) letters until you get them right
              </li>
            </ol>
          </section>
          <section>
            <h2>Hints</h2>
            <ul>
              <li>
                The words are in Latin, so don't expect to understand them!
              </li>
              <li>All letters are lowercase</li>
              <li>This script uses 'u' instead of 'v'</li>
              <li>The letters 'u' and 'n' look very similar</li>
              <li>An 'm' and 'in' look almost identical</li>
              <li>
                The letters 'l' and 'i' look similar, but 'l' is a little taller
              </li>
              <li>There's a special tall 's' that looks like an 'f'</li>
            </ul>
          </section>
        </div>
      </div>
    )
  );
};

export default TranscriptionPage;
