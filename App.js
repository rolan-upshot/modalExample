
import React, {useCallback, useMemo, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {

 const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  },[]);

  return (
      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
        <View style={styles.contentContainer}>
           <Text>Awesome 🎉</Text>
           <Button title="Hello, World">Hello</Button>
        </View>
       </BottomSheet>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
