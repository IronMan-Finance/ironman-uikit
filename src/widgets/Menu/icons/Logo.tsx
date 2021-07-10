import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 205 26" {...props} style={{width: "250px"}}>
      <image href={isDark ? 'images/ironman/big-title.png' : 'images/ironman/big-title.png'}/>
    </Svg>
  )
};  

export default Logo;
