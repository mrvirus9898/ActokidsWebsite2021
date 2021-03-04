import React from 'react';
import { View, Text } from 'react-native';
import InputSpinner from "react-native-input-spinner";

import { Card } from 'react-native-elements'

export default function FontSettings(){

    let fontValue: number = 0;

    function setValue(num){
        fontValue = num;
        console.log(fontValue);
    }

    return(
        <Card>
            <View>
                <Text>
                    <InputSpinner
                        max={10}
                        min={0}
                        step={1}
                        colorMax={"#f04048"}
                        colorMin={"#40c5f4"}
                        value={0}
                        onChange={(num) => {
                            console.log(num);
                        }}
                    />
                </Text>
            </View>
        </Card>

    );
}

/*
<Text>
                    Heat
                    <InputSpinner
                        max={10}
                        min={0}
                        step={1}
                        colorMax={"#f04048"}
                        colorMin={"#40c5f4"}
                        value={0}
                        onChange={(num) => {
                            console.log(num);
                        }}
                    />
                </Text>
*/