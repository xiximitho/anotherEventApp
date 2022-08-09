import {CheckBox} from '@rneui/themed';
import React, {useState} from 'react';

export default function EvCheckbox() {
  const [check1, setCheck1] = useState(false);
  const [check3, setCheck3] = useState(false);

  return (
    <>
      <CheckBox
        center
        title="Click Here"
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />

      <CheckBox
        center
        title={`Click Here to ${check3 ? 'Remove' : 'Add'} This Item`}
        iconRight
        iconType="material"
        checkedIcon="clear"
        uncheckedIcon="add"
        checkedColor="red"
        checked={check3}
        onPress={() => setCheck3(!check3)}
      />
    </>
  );
}
