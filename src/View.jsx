import React from "react";

const View = ({ pokemoNum, handleClick }) => {
  // console.log(pokemoNum, "View.jsxで使用"); //これは0 ~ 150の数字が入ってくる（番号）
  return (
    <div className="viewItem" onClick={() => handleClick(pokemoNum + 1)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemoNum + 1
        }.png`}
        alt=""
      />
    </div>
  );
};

export default View;
