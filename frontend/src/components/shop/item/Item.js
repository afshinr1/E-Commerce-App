import React, { Component } from "react";
import axios from "axios";
import Review from "./Review";
import ItemInfo from "./ItemInfo";
import MyComment from "./MyComment";
import Cookies from "universal-cookie";
import Comment from "./Comment";

export class Item extends Component {
  constructor() {
    super();
    this.state = { item: {}, comments: [], stock: ''};
  }
  getItem = () => {
    let id = this.props.match.params.id;
    axios.get(`http://localhost:5000/api/shop/${id}`).then((response) => {
      this.setState({ item: response.data[0] });
      this.setState({stock : response.data[0].stock});
    });
  };


  changeStock = async (id, stock)=>{

    await axios.put("http://localhost:5000/api/shop/addStock", {
      id : id,
      stock: stock,
     
    });
    this.setState({stock: stock});
}





  addComment = async (text, rating) => {
    const cookies = new Cookies();

    let username = cookies.get("username");
    let id = this.props.match.params.id;

    let results = await axios.post(
      `http://localhost:5000/api/shop/${id}/comments`,
      {
        username: username,
        text: text,
        rating: rating,
      }
    );
    let newComment = results.data;
    let newItem = this.state.item;
    newItem.countReview = parseInt(newItem.countReview) + 1;
    this.setState({ comments: [...this.state.comments, newComment] });
    this.setState({ item: newItem });
    this.setState({stock: newItem.stock});
    this.updateRatings(id);
  };

  updateRatings = async (id) => {
    await axios.put(`http://localhost:5000/api/shop/${id}/review`, {
      item: this.state.item,
    });
  };
  getComments = async () => {
    let id = this.props.match.params.id;
    let response = await axios.get(
      `http://localhost:5000/api/shop/${id}/comments`
    );
    this.setState({ comments: response.data });
  };

  componentDidMount() {
    this.getItem();
    this.getComments();
  }

  render() {
    const {
      productId,
      name,
      description,
      item_img,
      manufacturer,
      cost,
      rating,
      countReview,
    } = this.state.item;
    const comments = this.state.comments.map((comment) => {
      return <Comment key={comment.commentid} comment={comment} />;
    });
    return (
      <div className="item-page">
        <ItemInfo
          item_img={item_img}
          name={name}
          stock={this.state.stock}
          cost={cost}
          description={description}
          manufacturer={manufacturer}
          productId={productId}
          changeStock={this.changeStock}

        />
        <Review rating={rating} countReview={countReview} />
        {comments}
        <MyComment addComment={this.addComment} id={productId} />
      </div>
    );
  }
}

export default Item;
