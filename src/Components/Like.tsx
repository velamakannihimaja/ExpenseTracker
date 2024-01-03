import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [selectLike, setSelectLike] = useState(false);
  if (selectLike)
    return (
      <AiFillHeart
        size={50}
        color="#ff6b81"
        onClick={() => {
          // console.log("clicked");
          setSelectLike(false);
          onClick();
        }}
      />
    );
  return (
    <AiOutlineHeart
      size={50}
      onClick={() => {
        // console.log("yah clicked");
        setSelectLike(true);
        onClick();
      }}
    />
  );
};

export default Like;
