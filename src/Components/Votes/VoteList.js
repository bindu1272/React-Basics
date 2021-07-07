import React, { Component } from 'react';
import './VoteList.scss';
class VoteList extends Component{
    constructor(){
        super();
        this.state={
            languages : {"php" : 0,"python" : 0, "go" : 0,"java" : 0},
            highestVotes : [],
        }
    }
    count=(key)=>{
        let languages = {...this.state.languages};
        languages[key] = languages[key]+1
        this.setState({
            languages,
            highestVotes : ""
        })
    }
    submitMethod=()=>{
        let max =0;
        let x = -1;
        let languages = Object.values(this.state.languages);
        languages.map((value,index)=>{
            if(value > max){
                max = value;
                x = index;
            }
        })
        this.nextMethod(x,max);
    }
    nextMethod=(x,max)=>{
        let languages = Object.keys(this.state.languages);
        let votes = [];
        let languageValues = Object.values(this.state.languages);
        languageValues.map((value,index)=>{
            if(max == value){
                votes.push(languages[index]);
            }
        })
        this.setState({
            highestVotes : votes
        })
    }
    render(){
    const{languages} = this.state;
        return(
            <div>
                <h1>Vote Your Languages....</h1>
                    {
                        Object.keys(languages).map((languageName,index)=> {
                            return(
                                <div className="items">
                                    <div key={index}>{languages[languageName]}</div>
                                    <div>{languageName}</div>
                                    <div><button className ="click-button" onClick={()=>this.count(languageName)}>ClickHere</button></div>
                                </div>
                            )
                        })
                    }
                    <div>
                        <button className="submit-button" onClick={this.submitMethod}>Submit</button>
                    </div>
                    {
                        this.state.highestVotes.length!=0 && 
                        <div className="highest">
                            {
                                this.state.highestVotes.map(x=>{
                                    return <div>{x}</div>
                                })
                            } 
                                has highest votes 
                        </div>
                        }
            </div>
        )
    }
}
export default VoteList 