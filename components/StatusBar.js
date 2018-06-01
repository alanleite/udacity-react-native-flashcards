import React from 'react'
import { View, StatusBar as NativeStatusBar } from 'react-native'
import { withTheme } from 'styled-components'
import { Constants } from 'expo'

const StatusBar = ({ theme, ...props }) => {
    return (
        <View style={{ backgroundColor: theme.grey, height: Constants.statusBarHeight }}>
            <NativeStatusBar translucent backgroundColor={theme.grey} {...props} />
        </View>
    )
}

export default withTheme(StatusBar)