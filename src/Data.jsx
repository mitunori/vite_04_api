import React, { useState, useEffect } from "react";
import View from "./View";
import Item from "./Item";

const Data = () => {
  // 1. useStateを準備しましょう🤗
  const [pokemon, setPokemon] = useState([]);
  const [data, setData] = useState([]);

  // 2.useEffectを使ってデータを取得します🤗
  // データ？？⇨これはAPIに通信をして、データの塊をゲットしてきます🤗
  useEffect(() => {
    const fetchData = async () => {
      // apiデータを取得する
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=600"
      ); //urlとは？apiの通信するURL

      // jsonにしてjsで操作できるようにします🤗
      const data = await response.json();
      // console.log(data.results, "データの塊");

      setPokemon(data.results);
    };

    // fetchDataを実行させる
    fetchData();
  }, []);

  // clickした際に、ポケモンの「数字（番号）」を取得し、それを使ってAPIのデータの塊を取得します🤗
  const handleClick = async (num) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${num}`
    ).then((res) => res.json());

    setData(response);
  };
  // useStateのdataをチェックしています🤗
  console.log(data, "ゲットできているかチェック");
  // console.log(data.name, "ゲットできているかチェック");
  // console.log(data.id, "ゲットできているかチェック");
  // console.log(data.sprites.back_default, "ゲットできているかチェック");

  return (
    <div>
      <div className="viewBox">
        {pokemon.map((item, index) => (
          <View key={index} pokemoNum={index} handleClick={handleClick} />
        ))}
      </div>
      {/* Itemのパーツをここで表示します🤗 */}
      {data.length !== 0 && (
        <Item
          id={data.id}
          height={data.height}
          pokemonName={data.name}
          weight={data.weight}
          front={data.sprites.front_default}
          back={data.sprites.back_default}
          shiny={data.sprites.front_shiny}
          shinyBack={data.sprites.back_shiny}
        />
      )}
      {data.length === 0 && <div>データがありません</div>}
    </div>
  );
};

export default Data;
