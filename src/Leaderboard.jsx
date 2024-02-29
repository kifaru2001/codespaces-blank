import React, { Component } from 'react';
import './style.css';
import { Blockie } from "web3uikit"
import { useAddress } from '@thirdweb-dev/react';
import {Whale, ChevronDown} from '@web3uikit/icons'

/**
   * @class Leaderboard
   * @desc Compares the score property of each user object
   * @param {Prop} users-an array of objects with name and score properties
   * @param {Prop} paginate-integer to determine how many users to display on each page
*/


class Leaderboard extends Component {
 
  constructor(props) {
    super(props);
  
    this.sortUsersByScore = this.sortUsersByScore.bind(this);
    this.sortUsersByName = this.sortUsersByName.bind(this);
    this.filterRank = this.filterRank.bind(this);
    this.increasePage = this.increasePage.bind(this);
    this.decreasePage = this.decreasePage.bind(this);

    this.state = {
      users: this.props.users,
      ranking: [],
      asc: false,
      alph: false,
      page: 1,
      pageMax: 1,
    };
  }

  /**
     * @function componentDidMount
     * @desc Sorts users by score then adds a ranking key to each user object when the component loads. Then sets the ranking state
  */
  componentDidMount() {
    const ranking = this.state.users;
    const paginate = this.props.paginate;
    ranking.sort(this.compareScore).reverse();
    ranking.map((user, index) => user.rank = index +1);
    ranking.map((user, index) => user.page = Math.ceil((index+ 1)/paginate));
    this.setState({ pageMax: ranking[ranking.length - 1].page})
    this.setState({ ranking: ranking});
  }

  /**
     * @function compareScore
     * @desc Compares the score property of each user object
     * @param {Object, Object} user
  */
  compareScore(a,b) {
    if (a.score < b.score)
      return -1;
    if (a.score > b.score)
      return 1;
    return 0;
  }

  /**
     * @function compareName
     * @desc Compares the name property of each user object alphabetically
     * @param {Object, Object} user
  */
  compareName(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  /**
     * @function sortUsersByScore
     * @desc Sorts the ranking by score either ascending or descending
  */
  sortUsersByScore() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.asc === true) {
      ranking.sort(this.compareScore).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ asc: false});
      this.setState({ alph: false});
    } else {
      ranking.sort(this.compareScore);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ asc: true});
      this.setState({ alph: false});
    }
  }

  /**
     * @function sortUsersByName
     * @desc Sorts the ranking by name alphabetically either ascending or descending
  */
  sortUsersByName() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.alph === true) {
      ranking.sort(this.compareName).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: false});
      this.setState({ asc: true});
    } else {
      ranking.sort(this.compareName);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: true});
      this.setState({ asc: true});
    }
  }

  /**
     * @function filterRank
     * @desc Filters through the ranking to find matches and sorts all matches by score
     * @param {String} search input
  */
  filterRank(e) {
    const ranking = this.state.users;
    const paginate = this.props.paginate;
    const newRanking = [];
    const inputLength = e.target.value.length
    for(var i = 0; i < ranking.length; i++) {
      const str = ranking[i].name.slice(0, inputLength).toLowerCase();
      if(str === e.target.value.toLowerCase()) {
        newRanking.push(ranking[i]);
      }
    }
    newRanking.sort(this.compareScore).reverse();
    newRanking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
    this.setState({ ranking: newRanking});
    this.setState({ page: 1});
    this.setState({ pageMax: newRanking[newRanking.length - 1].page})
  }

  /**
     * @function increasePage
     * @desc Increments page by one
     * @param {Event} Click
  */
  increasePage(e) {
    let page = this.state.page;
    if(page < this.state.pageMax){
      page += 1;
    }
    this.setState({ page: page});
  }

  /**
     * @function increasePage
     * @desc Decrements page by one
     * @param {Event} Click
  */
  decreasePage(e) {
    let page = this.state.page;
    if(page > 1){
      page -= 1;
    }
    this.setState({ page: page});
  }

  /**
     * @function render
     * @desc renders jsx
  */
  render() {
    
    return (
      <div style={{border: "solid gray 1px", borderRadius: "16px", padding: "2.4%", background: "rgba(15, 15, 15, 0.2)", backdropFilter: "blur(5px)", margin: "1%"}}>
        <table id="lBoard">
          <tbody className='ranking'>
            <tr>
              <td colspan="10000"><h3>WHALES RANK</h3></td>
            </tr>
            <tr>
              <td colspan="10000">
                <form onChange={this.filterRank}>
                  Address: <input type="search" name="search" className='search' placeholder="Search"/>
                </form>
              </td>
            </tr>
            <tr style={{padding: "2%"}}>
              <td className='rank-header sortScore' onClick={ this.sortUsersByScore }> Rank <ChevronDown fontSize="20px" /> </td>
              <td className='rank-header sortAlpha' onClick={ this.sortUsersByName }> Address <ChevronDown fontSize="20px" /> </td>
              <td className='rank-header' onClick={ this.sortUsersByScore }> Owned <ChevronDown fontSize="20px" /> </td>
       
            </tr>
           
            {
            this.state.ranking.map((user, index) =>
               <tr className='ranking' key={index}>
                
                { user.page == this.state.page ? <td className='data'>{ user.rank }</td> : null }
                { user.page == this.state.page ? <td className='data' style={{justifyContent: "center"}}><Blockie scale={2} seed={user.name} />{ user.name }</td> : null }
                { user.page == this.state.page ? <td className='data'>{ user.score }<Whale fontSize="20px" /></td> : null }
               </tr>
             )
           }
          </tbody>
        </table>
        <div style={{display: "flex", gap: "5%", color: "white", fontFamily: "consolas", justifyContent: "center"}}>
        <p className='decrement' onClick={ this.decreasePage }>prev</p>
        { this.state.page == 1 ? null: <p onClick={ this.decreasePage }> { this.state.page - 1 }</p>}
        <p className='pg' autoFocus > { this.state.page }</p>
        { this.state.page < this.state.pageMax ? <p onClick={ this.increasePage }> { this.state.page + 1 }</p>: null }
        <p className='increment' onClick={ this.increasePage }>next</p>
        </div>
      </div>
    );
  }
}
export default Leaderboard;