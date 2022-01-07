import { useState } from 'react';
import { useReady } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from "mobx-react";
import './index.<%= cssExt %>'

const <%= _.upperFirst(pageName) %> = () => {

  return (
    <View className='<%= _.snakeCase(pageName) %>'>

    </View>
  )
}

export default inject('<%= pageName %>Store')(observer(<%= _.upperFirst(pageName) %>));
