import React, { useEffect } from 'react'
import axios from 'axios'
import { Text } from 'react-native'

const App = () => {
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return <Text>Hello React Native</Text>
}

export default App