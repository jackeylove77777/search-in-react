import React,{useState,useMemo,useRef} from 'react'
import './App.css'
const Search = () => {
  const [items, setItems] = useState(['jiejie', 'heihei'])
  const [query, setQuery] = useState('')

  const inputRef = useRef(null)
  const handleClick = () => {
    setItems(prev => {
      return [...prev,inputRef.current.value]
    })
    inputRef.current.value = ''
  }

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [query, items])
  
  //mistake example
  //这样子会消耗更多的内存与性能，如果有除了query和items其他的状态发生改变，则重渲染会导致数据的重新复制，使用useMemo可以避免这一点
  // const [filteredItems, setFilteredItems] = useState([])
  // useEffect(() => {
  //   setFilteredItems(
  //     items.filter((item) => {
  //       return item.toLowerCase().includes(query.toLowerCase());
  //     })
  //   );
  // },[query,items])
  return (
    <div className='App'>
      <div>
        <input type="text" value={query}  onChange={(e)=>{setQuery(e.target.value)}} />
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick} >Add Item</button>
      </div>
      <hr />
      <br />
      {
        filteredItems.map(item => (
          <h2>{item}</h2>
        ))
      }
    </div>
  )
}

export default Search