import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';



class ReviewsContainer extends Component {

  render() {
      const restaurant = this.props.restaurant;
      const reviews = this.props.reviews;
      const restaurantReviews = reviews.filter(review => review.restaurantId === restaurant.id)

    return (
      <div>
        <ReviewInput restaurant={restaurant} addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews restaurantReviews={restaurantReviews} deleteReview={this.props.deleteReview} editReview={this.props.editReview} restaurant={restaurant}/>

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    reviews: state.reviews

  };

}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({
    type: "ADD_REVIEW",
    review
  }),
  deleteReview: id => dispatch({
    type: "DELETE_REVIEW",
    id
  }),
  editReview: editedReview => dispatch({
    type: "EDIT_REVIEW",
    editedReview
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
