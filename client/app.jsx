// import axios from 'axios';
var FormOne = (props) => {
return (
  <div>
  <form action="/formTwo" method="post">
  <label>Name: </label>
  <input type="text" id = "name" name="name" required/>
  <label>Email: </label>
  <input type="email" id = "email" name="email" required/>
  <label>Password: </label>
  <input type="text" id = "name" name="password" required/>
  <button type="submit">next </button>
  </form>

  </div>
);
}

var FormTwo = () => {
  return (
  <div>
  <form>
  <label for="line1">line1: </label>
  <input type="text" id = "line1" name="line1" required/>
  <label for="line2">line2: </label>
  <input type="text" id = "line2" name="line2" required/>
  <label for="city">city: </label>
  <input type="text" id = "city" name="city" required/>
  <label for="state">state: </label>
  <input type="text" id = "state" name="state" required/>
  <label for="zip">zip: </label>
  <input type="text" id = "zip" name="zip" required/>

  <label for="phone">phone: </label>
  <input type="text" id = "phone" name="phone" required/>
  <button type="submit">next </button>
  </form>

  </div>
  )
};

var FormThree = () => {
  return (
    <div>
    <form>
    <label for="credit">credit card #: </label>
    <input type="text" id = "credit" name="credit" required/>
    <label for="expiry">expiry date: </label>
    <input type="text" id = "expiry" name="expiry" required/>
    <label for="CVV">CVV </label>
    <input type="text" id = "CVV" name="CVV" required/>
    <label for="zip">zip code </label>
    <input type="text" id = "CVV" name="CVV" required/>
    <button type="submit">next </button>
    </form>
    </div>
  );
  }

  var CheckOut = (props) => {
    if(!props.clicked) {
      return null;
    }

    return (
    // takes us to forms
    <div>
    <FormOne/>
    </div>
    );
    }

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      checkOutClicked: false,
      currentCheckOut: 0
      };
      this.checkOutClick = this.checkOutClick.bind(this);
    }
    checkOutClick() {
      this.setState({
        checkOutClicked: !this.state.checkOutClicked
      });
    }
    formOneClick() {

    }
    formTwoClick() {

    }
    formThreeClick() {

    }
    render() {
      return (
        <div>
          <h1> Multi Step CheckOut App</h1>
          <button value="checkout" onClick = {this.checkOutClick}>
            checkout
          </button>
          <CheckOut clicked = {this.state.checkOutClicked} />
        </div>
      )
    };

  }

ReactDOM.render(<App/>, document.getElementById('app'));