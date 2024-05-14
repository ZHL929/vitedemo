import { defineStore } from 'pinia'
import { Names } from './store-namespace'

type Result = {
  name: string,
  isChu: boolean
}

const Login = (): Promise<Result> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '小张',
        isChu: true
      })
    }, 3000) 
  })
}

export const useTestStore = defineStore(Names.Test,{
  state:()=> {
    return {
      current: 1,
      age: 200,
      user: <Result>{},
      // user: {}
      name: 'default'
    }
  },
  getters: {
    newPrice:(state) => `$${state.user.name}`,
    newCurrent ():number | string {
      return ++this.current + this.newName
    },
    newName ():string {
      return `$-${this.name}`
    }

  },
  actions: {
    setCurrent () {
      this.current++
    },
    randomizeCounter() {
      this.current = Math.round(100 * Math.random())
    },
    async getLoginInfo() {
      const result = await Login()
      this.user = result;
      this.setName(result.name)
    },
    setName (name: string){
      this.name = name
    }
  }
})
