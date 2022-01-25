import React,{Component} from 'react';
import Card from './Card';
import SearchBox from './SearchBox'

class CardsList extends Component {
  constructor() {
    super();
    this.state = {
      arr:[],
      txt:'',
      txt2:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => {
      this.setState({arr:data})
    })
  }

  // Search when writing!
   searchItem = (e) => {
//     // console.log(e.target.value);
    this.setState({txt:e.target.value})
   }


  searchClick = () => {
      this.setState({txt2:this.state.txt})
  }
  render(){
    const {arr,txt} = this.state;
    const filterArr = arr.filter(item => {
      return item.name.toLowerCase().includes(txt.toLowerCase());
    })
     return(
      <>
        <SearchBox searchItem={this.searchItem}/>
        {
          filterArr.map((item, i)=>{
            return <Card user={item} />
          })
        }
      </>
    )
  }
}
export default CardsList;
