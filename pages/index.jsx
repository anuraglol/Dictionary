import Head from "next/head";
import { useState } from "react";

export default function Home() {
  // hooks
  var [val, setVal] = useState("hello");
  var [def, setDef] = useState("");
  var [phonetic, setPhonetic] = useState("");
  var [src, setSrc] = useState("");
  var [word, setWord] = useState("");

  const fetchWord = async () => {
    try {
      let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
      const res = await fetch(url);
      const data = await res.json();

      setWord(data[0].word);
      setDef(data[0].meanings[0].definitions[0].definition);
      setPhonetic(data[0].phonetic);
      let SRC = data[0].phonetics[0].audio;
      setSrc(`https:${SRC}`);
    } catch (error) {
      setPhonetic("");
      setWord("");
      setDef("oops!! enter a meaningful word");
      setSrc("");
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="./sticky-note-solid.svg"
          type="image/x-icon"
        />
        <title>Dictionary</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
          rel="stylesheet"
        />
      </Head>
      <div className="main font-poppins font-medium text-xl bg-white p-4 rounded-lg shadow-2xl w-main">
        <input
          type="text"
          onChange={(e) => setVal(e.target.value)}
          className="outline-none"
        />
        <p className="w-full flex justify-center">
          <button
            onClick={fetchWord}
            className="text-white p-2 rounded bg-primary m-3"
          >
            Search
          </button>
        </p>

        <div>
          <span>
            {word} <span>{phonetic}</span>
          </span>

          <p className="m-1">{def}</p>
          <audio src={src} controls></audio>
        </div>
      </div>
    </>
  );
}
