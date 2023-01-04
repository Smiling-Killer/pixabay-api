import React from 'react'


class Searchinput extends React.Component{
    constructor(props){
        super(props)
     this.state={entry:""}
    }
    onsubmit = (e) => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.entry);
      }
    onChangeValue = (e) => {
        this.setState({ entry: e.target.value })
    }   
   
    render() {
      console.log("hi");  
        return (
            <div className='ui segment'>
            <form className='ui form' onSubmit={this.onsubmit}>
              <div className='field'>
                <div className='ui massive icon input'>
                  <input
                    type="text"
                    placeholder='Search anything...'
                    onChange={this.onChangeValue}
                    value={this.state.entry}
                  />
                  <i className='search icon'></i>
                </div>
              </div>
            </form>
          </div>
        )
    }
}
    

export default Searchinput;
