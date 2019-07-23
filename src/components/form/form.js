import React, {Component, form, label} from 'react'

 class  MyForm extends Component {
    constructor(props) {
        super(props);
    }
    render(props) 
    { 
        const {setCity, setAmount, setName, setStreet, setState, city, name, state, amount, street} = this.props;

        return(
            <div>
                <form>
                    <label>
                    Name:
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </label>
                    <label>
                    Street:
                    <input type="text" value={street} onChange={(e)=>{setStreet(e.target.value)}} />
                    </label>
                    <label>
                    City:
                    <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
                    </label>
                    <label>
                    State:
                    <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} />
                    </label>
                    <label>
                    Check Amount:
                    <input type="text" value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
                    </label>
                </form>
            </div>
        );
    }
}
 
export default MyForm