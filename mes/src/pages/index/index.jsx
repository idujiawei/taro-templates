import { useState } from 'react';
import { useReady } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from "mobx-react";
import './index.<%= cssExt %>'

const <%= _.capitalize(pageName) %> = () => {

  return (
    <View className='<%= pageName %>'>

    </View>
  )
}

export default inject('<%= pageName %>Store')(observer(<%= _.capitalize(pageName) %>));
