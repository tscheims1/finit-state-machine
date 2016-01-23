/**
 * Created by tscheims on 1/22/16.
 */
State = function(name,isEndState)
{
    this.name = name;
    this.isEndstate = isEndState;
    this.states = {};
    this.__proto__.steps = [];

};
State.prototype.callNextState = function(input)
{
    if(input.length ==0)
    {
        if (this.isEndstate)
        {
            this.__proto__.result = "success at state: "+this.name;
            console.log(this.__proto__.result);
        }
        else
        {
            this.__proto__.result = "failed at state: "+this.name;
            console.log(this.__proto__.result);
        }
        return;
    }
    if(typeof this.states[input[0]] == 'undefined')
    {
        this.__proto__.result = "wrong input";
        console.log(this.__proto__.result);
        return;
    }

    //Store all steps
    this.__proto__.steps.push({'state':this.name,'token':input[0],'nextState':this.states[input[0]].name});

    inputForNextState = input.length == 1?"":input.substring(1);
    this.states[input[0]].callNextState(inputForNextState);
};
State.prototype.addState = function(token,state)
{
    if(typeof this.states[token] == 'undefined')
    {
        this.states[token] = state;
    }
};
