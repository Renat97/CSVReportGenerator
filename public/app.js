// import axios from 'axios';
var FormOne = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    action: "/formTwo",
    method: "post"
  }, /*#__PURE__*/React.createElement("label", null, "Name: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    required: true
  }), /*#__PURE__*/React.createElement("label", null, "Email: "), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    required: true
  }), /*#__PURE__*/React.createElement("label", null, "Password: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "name",
    name: "password",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "next ")));
};

var FormTwo = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", {
    for: "line1"
  }, "line1: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "line1",
    name: "line1",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    for: "line2"
  }, "line2: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "line2",
    name: "line2",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    for: "city"
  }, "city: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "city",
    name: "city",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    for: "state"
  }, "state: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "state",
    name: "state",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    for: "zip"
  }, "zip: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "zip",
    name: "zip",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    for: "phone"
  }, "phone: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "phone",
    name: "phone",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "next ")));
};

var FormThree = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", {
    for: "credit"
  }, "credit card #: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "credit",
    name: "credit",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    for: "expiry"
  }, "expiry date: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "expiry",
    name: "expiry",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    for: "CVV"
  }, "CVV "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "CVV",
    name: "CVV",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    for: "zip"
  }, "zip code "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "CVV",
    name: "CVV",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "next ")));
};

var CheckOut = props => {
  if (!props.clicked) {
    return null;
  }

  return (
    /*#__PURE__*/
    // takes us to forms
    React.createElement("div", null, /*#__PURE__*/React.createElement(FormOne, null))
  );
};

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

  formOneClick() {}

  formTwoClick() {}

  formThreeClick() {}

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " Multi Step CheckOut App"), /*#__PURE__*/React.createElement("button", {
      value: "checkout",
      onClick: this.checkOutClick
    }, "checkout"), /*#__PURE__*/React.createElement(CheckOut, {
      clicked: this.state.checkOutClicked
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkZvcm1PbmUiLCJwcm9wcyIsIkZvcm1Ud28iLCJGb3JtVGhyZWUiLCJDaGVja091dCIsImNsaWNrZWQiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJjaGVja091dENsaWNrZWQiLCJjdXJyZW50Q2hlY2tPdXQiLCJjaGVja091dENsaWNrIiwiYmluZCIsInNldFN0YXRlIiwiZm9ybU9uZUNsaWNrIiwiZm9ybVR3b0NsaWNrIiwiZm9ybVRocmVlQ2xpY2siLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsSUFBSUEsT0FBTyxHQUFJQyxLQUFELElBQVc7QUFDekIsc0JBQ0UsOENBQ0E7QUFBTSxJQUFBLE1BQU0sRUFBQyxVQUFiO0FBQXdCLElBQUEsTUFBTSxFQUFDO0FBQS9CLGtCQUNBLDRDQURBLGVBRUE7QUFBTyxJQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLElBQUEsRUFBRSxFQUFHLE1BQXhCO0FBQStCLElBQUEsSUFBSSxFQUFDLE1BQXBDO0FBQTJDLElBQUEsUUFBUTtBQUFuRCxJQUZBLGVBR0EsNkNBSEEsZUFJQTtBQUFPLElBQUEsSUFBSSxFQUFDLE9BQVo7QUFBb0IsSUFBQSxFQUFFLEVBQUcsT0FBekI7QUFBaUMsSUFBQSxJQUFJLEVBQUMsT0FBdEM7QUFBOEMsSUFBQSxRQUFRO0FBQXRELElBSkEsZUFLQSxnREFMQSxlQU1BO0FBQU8sSUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixJQUFBLEVBQUUsRUFBRyxNQUF4QjtBQUErQixJQUFBLElBQUksRUFBQyxVQUFwQztBQUErQyxJQUFBLFFBQVE7QUFBdkQsSUFOQSxlQU9BO0FBQVEsSUFBQSxJQUFJLEVBQUM7QUFBYixhQVBBLENBREEsQ0FERjtBQWNDLENBZkQ7O0FBaUJBLElBQUlDLE9BQU8sR0FBRyxNQUFNO0FB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QU1DLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ1IsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLUyxLQUFMLEdBQWE7QUFDYkMsTUFBQUEsZUFBZSxFQUFFLEtBREo7QUFFYkMsTUFBQUEsZUFBZSxFQUFFO0FBRkosS0FBYjtBQUlBLFNBQUtDLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDRDs7QUFDREQsRUFBQUEsYUFBYSxHQUFHO0FBQ2QsU0FBS0UsUUFBTCxDQUFjO0FBQ1pKLE1BQUFBLGVBQWUsRUFBRSxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFEakIsS0FBZDtBQUdEOztBQUNESyxFQUFBQSxZQUFZLEdBQUcsQ0FFZDs7QUFDREMsRUFBQUEsWUFBWSxHQUFHLENBRWQ7O0FBQ0RDLEVBQUFBLGNBQWMsR0FBRyxDQUVoQjs7QUFDREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOENBQ0UsMkRBREYsZUFFRTtBQUFRLE1BQUEsS0FBSyxFQUFDLFVBQWQ7QUFBeUIsTUFBQSxPQUFPLEVBQUksS0FBS047QUFBekMsa0JBRkYsZUFLRSxvQkFBQyxRQUFEO0FBQVUsTUFBQSxPQUFPLEVBQUksS0FBS0gsS0FBTCxDQUFXQztBQUFoQyxNQUxGLENBREY7QUFTRDs7QUFqQytCOztBQXFDcENTLFFBQVEsQ0FBQ0QsTUFBVCxlQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXdCRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xudmFyIEZvcm1PbmUgPSAocHJvcHMpID0+IHtcbnJldHVybiAoXG4gIDxkaXY+XG4gIDxmb3JtIGFjdGlvbj1cIi9mb3JtVHdvXCIgbWV0aG9kPVwicG9zdFwiPlxuICA8bGFiZWw+TmFtZTogPC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQgPSBcIm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkLz5cbiAgPGxhYmVsPkVtYWlsOiA8L2xhYmVsPlxuICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQgPSBcImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWQvPlxuICA8bGFiZWw+UGFzc3dvcmQ6IDwvbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkID0gXCJuYW1lXCIgbmFtZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQvPlxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5uZXh0IDwvYnV0dG9uPlxuICA8L2Zvcm0+XG5cbiAgPC9kaXY+XG4pO1xufVxuXG52YXIgRm9ybVR3byA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgPGRpdj5cbiAgPGZvcm0+XG4gIDxsYWJlbCBmb3I9XCJsaW5lMVwiPmxpbmUxOiA8L2xhYmVsPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZCA9IFwibGluZTFcIiBuYW1lPVwibGluZTFcIiByZXF1aXJlZC8+XG4gIDxsYWJlbCBmb3I9XCJsaW5lMlwiPmxpbmUyOiA8L2xhYmVsPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZCA9IFwibGluZTJcIiBuYW1lPVwibGluZTJcIiByZXF1aXJlZC8+XG4gIDxsYWJlbCBmb3I9XCJjaXR5XCI+Y2l0eTogPC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQgPSBcImNpdHlcIiBuYW1lPVwiY2l0eVwiIHJlcXVpcmVkLz5cbiAgPGxhYmVsIGZvcj1cInN0YXRlXCI+c3RhdGU6IDwvbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkID0gXCJzdGF0ZVwiIG5hbWU9XCJzdGF0ZVwiIHJlcXVpcmVkLz5cbiAgPGxhYmVsIGZvcj1cInppcFwiPnppcDogPC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQgPSBcInppcFwiIG5hbWU9XCJ6aXBcIiByZXF1aXJlZC8+XG5cbiAgPGxhYmVsIGZvcj1cInBob25lXCI+cGhvbmU6IDwvbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkID0gXCJwaG9uZVwiIG5hbWU9XCJwaG9uZVwiIHJlcXVpcmVkLz5cbiAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+bmV4dCA8L2J1dHRvbj5cbiAgPC9mb3JtPlxuXG4gIDwvZGl2PlxuICApXG59O1xuXG52YXIgRm9ybVRocmVlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGZvcm0+XG4gICAgPGxhYmVsIGZvcj1cImNyZWRpdFwiPmNyZWRpdCBjYXJkICM6IDwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQgPSBcImNyZWRpdFwiIG5hbWU9XCJjcmVkaXRcIiByZXF1aXJlZC8+XG4gICAgPGxhYmVsIGZvcj1cImV4cGlyeVwiPmV4cGlyeSBkYXRlOiA8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkID0gXCJleHBpcnlcIiBuYW1lPVwiZXhwaXJ5XCIgcmVxdWlyZWQvPlxuICAgIDxsYWJlbCBmb3I9XCJDVlZcIj5DVlYgPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZCA9IFwiQ1ZWXCIgbmFtZT1cIkNWVlwiIHJlcXVpcmVkLz5cbiAgICA8bGFiZWwgZm9yPVwiemlwXCI+emlwIGNvZGUgPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZCA9IFwiQ1ZWXCIgbmFtZT1cIkNWVlwiIHJlcXVpcmVkLz5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5uZXh0IDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgfVxuXG4gIHZhciBDaGVja091dCA9IChwcm9wcykgPT4ge1xuICAgIGlmKCFwcm9wcy5jbGlja2VkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgIC8vIHRha2VzIHVzIHRvIGZvcm1zXG4gICAgPGRpdj5cbiAgICA8Rm9ybU9uZS8+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgICB9XG5cbiAgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrT3V0Q2xpY2tlZDogZmFsc2UsXG4gICAgICBjdXJyZW50Q2hlY2tPdXQ6IDBcbiAgICAgIH07XG4gICAgICB0aGlzLmNoZWNrT3V0Q2xpY2sgPSB0aGlzLmNoZWNrT3V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY2hlY2tPdXRDbGljaygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjaGVja091dENsaWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrT3V0Q2xpY2tlZFxuICAgICAgfSk7XG4gICAgfVxuICAgIGZvcm1PbmVDbGljaygpIHtcblxuICAgIH1cbiAgICBmb3JtVHdvQ2xpY2soKSB7XG5cbiAgICB9XG4gICAgZm9ybVRocmVlQ2xpY2soKSB7XG5cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+IE11bHRpIFN0ZXAgQ2hlY2tPdXQgQXBwPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIHZhbHVlPVwiY2hlY2tvdXRcIiBvbkNsaWNrID0ge3RoaXMuY2hlY2tPdXRDbGlja30+XG4gICAgICAgICAgICBjaGVja291dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxDaGVja091dCBjbGlja2VkID0ge3RoaXMuc3RhdGUuY2hlY2tPdXRDbGlja2VkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9O1xuXG4gIH1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=