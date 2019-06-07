import React, { Component } from 'react'
import '../App.css';

class Lista extends Component {
  state = {
    list: [],
    item:  '',
    list2:  [{id:1, name:"Cat1"}, {id:2, name:"Cat2"}, {id:3, name:"Cat3"} ],
    itemcat: {}
  }

    handleItemChange = event => {
        this.setState({
        item: event.target.value
        })
    }

    handleItemChangeCat = event => {
        const { list2 } = this.state
        this.setState({
        itemcat: list2[event.target.value]
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { list, item, itemcat } = this.state

        if (!this.state.item) return
        this.setState({
            list: [{name:item,cat:itemcat}, ...list],
            item: ''
        })
    }

    handleExcluir = index =>  {    
        this.setState({
            list: this.state.list.filter((_, i) => i !== index)
        })
    }

  render () {

    const { item,list,list2 } = this.state
    return (

        <div className='container'>
            <form onSubmit={this.handleSubmit} className='form'>
            <label className='input-container' htmlFor='tarefa'>
                Tarefa
                <input
                id='tarefa'
                value={item.name}
                onChange={this.handleItemChange}
                />
                <br/>

                <select value={this.state.value}  onChange={this.handleItemChangeCat}>
                    <option value="">Selecione</option>
                    {
                    list2.map((item, index) =>
                       <option value={index}>{item.name}</option>
                    )
                    }
                </select>

                <button className='btn'>
                +
                </button>
            </label>
            <ul className='list'>
                {
                list.map((item, index) =>
                    <li
                    onClick={
                        () => this.handleExcluir(index)
                    }
                    className='list-item' key={index}>
                    {item.name} - {item.cat.name}
                    </li>
                )
                }
            </ul>
            </form>
        </div>

     

    )
  }
}

export default Lista
