/*
Actokids Project
Nick Bennett

Not sure why, but a refresh flag is eneded to update the form

*/

import React, {useState, useEffect} from 'react';
import {  View  } from 'react-native';

import { CheckBox } from 'react-native-elements';

export default function AccessOptionsCheckBox(){

    const [checkedOptions, setOptions] = useState([
        {   title: 'Wheelchair Accessible',
            key: 0,
            checked: false
        },
        {   title: 'Autism Friendly',
            key: 1,
            checked: false
        },
        {   title: 'Peer Inclusion', 
            key: 2,
            checked: false
        },
        {   title: 'Family Bathrooms', 
            key: 3,
            checked: false
        },
        {   title: 'Sign Language Interpreter', 
            key: 4,
            checked: false
        },
        {   title: 'Supporters Allowed', 
            key: 5,
            checked: false
        }
    ]);

    const [refresh, setRefresh] = useState(false);

    return(       
        <View>
            {
                checkedOptions.map((item, key) => <CheckBox
                    title={item.title}
                    key={key}
                    checked={item.checked}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o' 
                    onPress={() => changeCheck(item.key)}/>)
            }
        </View>  )

    function changeCheck(key: number){
        let tempOptions = checkedOptions
        tempOptions[key].checked = !tempOptions[key].checked
        console.log(tempOptions[key].title + " " + tempOptions[key].checked)
        setOptions(tempOptions)
        //Again, not sure why but this flag check is needed 
        setRefresh(!refresh)

    }

}
/*
        <View>
            {
                title.map((item, key) => <CheckBox
                    title={item.value}
                    key={key}
                    checked={filterCriteria.includes(item.value)}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o' 
                    onPress={() => changeCheck(item)}/>)
            }
        </View>        
    )*/