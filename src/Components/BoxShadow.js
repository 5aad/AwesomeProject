import React from 'react';
import DropShadow from 'react-native-drop-shadow';

export default function BoxShadow(props) {
  return (
    <DropShadow
      style={{
        shadowColor: '#2A3747',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.17,
        shadowRadius: 8,
      }}>
      {props.children}
    </DropShadow>
  );
}
