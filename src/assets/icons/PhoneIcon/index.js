import Svg, { Path } from "react-native-svg"

import React from "react"

const PhoneIcon = ({ color = "#6F758B", style }) => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <Path
      d="M11.4748 11.4748C9.5752 13.3732 7.3744 15.19 6.5044 14.32C5.26 13.0756 4.492 11.9908 1.7464 14.1976C-0.998002 16.4032 1.1104 17.8744 2.3164 19.0792C3.7084 20.4712 8.8972 19.1536 14.026 14.026C19.1536 8.89723 20.4676 3.70843 19.0744 2.31643C17.8684 1.10923 16.4044 -0.997972 14.1988 1.74643C11.992 4.49083 13.0756 5.25883 14.3224 6.50443C15.1888 7.37443 13.3732 9.57523 11.4748 11.4748Z"
      fill={color}
    />
  </Svg>
)

export default PhoneIcon
