import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSUmmary';

const INGREDIENT_PRICES = {
  salad:0.5,
  bacon:0.4,
  cheese:1.3,
  meat: 0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients :{
      salad:0,
      bacon:0,
      cheese:0,
      meat: 0

    },
    totalPrice:4,
    purchasable:false,
    purchasing:false
  }

  updatePurchaseState (ingredients) {

    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey]
    }).reduce((sum,el) => {
      return sum + el
    },0)
    this.setState({purchasable:sum>0})
  }
addIngredientsHandler = (type) => {
  const oldCount = this.state.ingredients[type]
  const updatedCount = oldCount + 1
  const updateIngredients = {
    ...this.state.ingredients
  }
  console.log("Adding")
  updateIngredients[type] = updatedCount
  const priceAddition = INGREDIENT_PRICES[type]
  const oldPrice = this.state.totalPrice
  const newPrice = priceAddition + oldPrice
  this.setState({
    totalPrice:newPrice,
    ingredients:updateIngredients
  })
  this.updatePurchaseState(updateIngredients)
}
removeIngredientsHandler = (type) => {
  const oldCount = this.state.ingredients[type]
if (oldCount <= 0) {
return
}

  const updatedCount = oldCount - 1
  const updateIngredients = {
    ...this.state.ingredients
  }
  console.log("Adding")
  updateIngredients[type] = updatedCount
  const priceDeduction = INGREDIENT_PRICES[type]
  const oldPrice = this.state.totalPrice
  const newPrice = priceDeduction - oldPrice
  this.setState({
    totalPrice:newPrice,
    ingredients:updateIngredients
  })
  this.updatePurchaseState(updateIngredients)

}
purchaseHandler = () => {
  this.setState({purchasing:true})
}
  render() {
    const disabledInfo ={
      ...this.state.ingredients
    }
    for( let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
<OrderSummary ingredients={this.state.ingredients} />
        </Modal>
<Burger ingredients={this.state.ingredients}/>
<BuildControls ingredientAdded={this.addIngredientsHandler} ingredientRemoved={this.removeIngredientsHandler} disabled={disabledInfo}
price={this.state.totalPrice}
purchasable={this.state.purchasable}
ordered={this.purchaseHandler}
   />

      </Aux>
    )
  }
}


export default BurgerBuilder;
