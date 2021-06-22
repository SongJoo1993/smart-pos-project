import "../DetailBox/DetailBox.scss";
import DetailHeader from "../DetailHeader/index"
import { Component } from 'react';


class DetailBox extends Component {

    state = {
        category: "Lunch",
        section: "Salad",
        name: "Smoke Salmon Salad",
        availability: "Available",
        price : "9.00",
        description: "Mixed greens, cucumber, vinaigrette"
    }

    render() {
        console.log(this.props.selectedItem);
        return(
            <section className="detail-box">
                <DetailHeader />
                <section className="detail-box__detail-box">
                    <div className="detail-box__selected-item-box" >
                        <h2 className = "detail-box__title">Category </h2>
                        <p className = "detail-box__content">
                            {this.props.selectedItem.category === undefined ? this.state.category : this.props.selectedItem.category}
                        </p>
                    </div>
                    <div className="detail-box__selected-item-box" >
                        <h2 className = "detail-box__title">Section </h2>
                        <p className = "detail-box__content">
                            {this.props.selectedItem.category === undefined ? this.state.section : this.props.selectedItem.sections}
                        </p>
                    </div>
                    <div className="detail-box__selected-item-box" >
                        <h2 className = "detail-box__title">Name</h2>
                        <p className = "detail-box__content">
                            {this.props.selectedItem.category === undefined ? this.state.name : this.props.selectedItem.name}
                        </p>
                    </div>
                    <div className="detail-box__selected-item-box" >
                        <h2 className = "detail-box__title">Availability</h2>
                        <p className = "detail-box__content">
                            {this.props.selectedItem.category === undefined ? this.state.availability : this.props.selectedItem.category !== undefined && this.props.selectedItem.availability === "true" ? "Available" : "Not Available"}
                        </p>
                    </div>
                    <div className="detail-box__selected-item-box" >
                        <h2 className = "detail-box__title">Price</h2>
                        <p className = "detail-box__content">
                            {this.props.selectedItem.category === undefined ? `$${this.state.price}` : `$${this.props.selectedItem.price}`}
                        </p>
                    </div>
                    <div className="detail-box__selected-item-box" >
                        <h2 className = "detail-box__title">Description</h2>
                        <p className = "detail-box__content">
                            {this.props.selectedItem.category === undefined ? this.state.description : this.props.selectedItem.description}
                        </p>
                    </div>
                </section>
            </section>
        )
    }
}

export default DetailBox