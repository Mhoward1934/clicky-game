import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    clickedId: []
  };

  removefriend = id => {
    console.log(id);
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  setClick = id => {
    const { clickedID, score, topScore, friends } = this.state
    if (!clickedID.includes(id)) {
      let shuffledFriends = this.shuffle(friends);
      this.setState(prevState => ({
        friends: shuffledFriends,
        score: score + 1,
        clickedID: [...prevState.clickedID, id]
      }))
      //else statement
    } else if (clickedID.includes(id)) {
      let shuffledFriends = this.shuffle(friends);
      this.setState({ friends: shuffledFriends, clickedID: [], score: 0, topScore: score > topScore ? score : topScore })
    }
  }
  render() {
    return (
      <Wrapper>

        <h1 className="title">Friends List</h1>

        {this.state.friends.map(friend => (
          <FriendCard
            removefriend={this.removefriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            setClick={this.setClick}
          />
        ))}
        <div style={{
          height: 50,
          backgroundColor: "purple",
          width: "100%",
          padding: 20,
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          position: "fixed", top: 0, left: 0, right: 0,

        }}>

        <div style={{ display: "fliex", flex: 1, justifyContent: "center", alignItems: "center", padding: 5 }}>
        <h2>Clicky Game</h2>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", padding: 5 }}>
        <h2>You guessed correctly</h2>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", padding: 5, fontSize: 23, fontWeight: "700" }}>
        Score: {this.state.score} | Top Score: {this.state.topScore}
        </div>

        </div>
      </Wrapper>
    );
  }
  
  shuffle=(a)=> {
    for (let i = friends.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
 }

}


export default App;
