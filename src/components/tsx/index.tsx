 
// // 返回一个渲染函数
// export default function () {
//   return (<div>hualian</div>)
// }
// optionsApi
// import { defineComponent, render } from 'vue'

// export default defineComponent({
//   data () {
//     return {
//       age: 23
//     }
//   },
//   render () {
//     return (<div>{this.age}</div>)
//   }
// }) 
// setup 函数模式
// v-show 支持
// ref template 自动解包.value tsx并不会 ref .value
// v-if 不支持 使用三元表达式代替
// 使用 map 代替 v-for
// v-bind {} 代替
// props emit 
// slots
// v-model 支持

const A = (_,{slots}) => (<>
    <div>{slots.default ? slots.default() : '默认值'}</div>
    <div>{slots.foo?.()}</div>
  </>)
  
  interface Props {
    name?: string
  }
  import { defineComponent ,ref } from 'vue'
  export default defineComponent({
    props: {
      name: String
    },
    emits: ['on-click'],
    setup (props: Props, { emit }) {
      const flag = ref(false)
      const data = [
        {name: 'hualian1'},
        {name: 'hualian2'},
        {name: 'hualian3'},
        {name: 'hualian4'}
      ]
      const fn = (item) => {
        console.log('触发了',item)
        emit('on-click',item)
      }
      const slot = {
        default: ()=>(<div>得分default slot</div>),
        foo: ()=>(<div>得分default foo</div>)
      }
      const v = ref<string>('')
      return ()=> (<>
        <input v-model={v.value} type='text'></input>
        <div>{v.value}</div>
        <hr />
        <A v-slots={slot}></A>slot
        <hr />
        <div>props:{props.name}</div>
        <hr />
        {data.map(v=>{
          return <div onClick={()=> fn(v)} name={v.name}>{v.name}</div>
        })}
      </>)
    }
  }) 
  
  
  