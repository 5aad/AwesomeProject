import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
const Icon = ({name, color}) => {
  return (
    <View>
      {name === 'tower' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="24"
            fill="none"
            viewBox="0 0 22 24">
            <Path
              fill={color}
              fillRule="evenodd"
              d="M4.59 12.623h2.295v-2.295H4.59v2.295zm9.18 0h2.295v-2.295H13.77v2.295zm-4.59 0h2.295v-2.295H9.18v2.295zm9.18 8.032h-6.885v-4.59H9.18v4.59H2.295V2.295h1.147v4.59H9.18v-4.59h2.295v4.59h5.737v-4.59h1.148v18.36zM14.918 0v4.59H13.77V0H6.885v4.59H5.738V0H0v22.95h20.655V0h-5.738z"
              clipRule="evenodd"></Path>
          </Svg>
        </>
      ) : null}
      {name === 'search' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <Path
              fill={color}
              fillRule="evenodd"
              d="M22.95 21.327l-1.623 1.623-4.868-4.868 1.622-1.623 4.869 4.868zM9.18 16.065A6.893 6.893 0 012.295 9.18 6.893 6.893 0 019.18 2.295a6.893 6.893 0 016.885 6.885 6.893 6.893 0 01-6.885 6.885zM9.18 0a9.18 9.18 0 100 18.36A9.18 9.18 0 009.18 0z"
              clipRule="evenodd"></Path>
          </Svg>
        </>
      ) : null}
      {name === 'profile' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <Path
              fill={color}
              fillRule="evenodd"
              d="M19.006 20.656H3.946c-.811 0-1.41-.8-1.104-1.535 1.419-3.402 4.751-5.35 8.633-5.35 3.883 0 7.216 1.948 8.635 5.35.305.735-.293 1.535-1.104 1.535zM6.79 6.886c0-2.532 2.102-4.59 4.685-4.59 2.584 0 4.686 2.058 4.686 4.59 0 2.53-2.102 4.59-4.686 4.59-2.583 0-4.685-2.06-4.685-4.59zM22.9 20.237c-.851-3.854-3.515-6.7-7.021-7.99 1.857-1.466 2.941-3.835 2.543-6.43-.462-3.01-3.018-5.419-6.103-5.77-4.26-.485-7.872 2.762-7.872 6.837 0 2.17 1.026 4.102 2.626 5.363-3.507 1.29-6.17 4.136-7.022 7.99-.31 1.401.843 2.713 2.306 2.713h18.237c1.464 0 2.616-1.312 2.306-2.713z"
              clipRule="evenodd"></Path>
          </Svg>
        </>
      ) : null}
    </View>
  );
};

export default Icon;
