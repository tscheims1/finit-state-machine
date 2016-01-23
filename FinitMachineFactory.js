/**
 * Created by tscheims on 1/22/16.
 */
FinitMachineFactory = function(startState,states,rules)
{
    this.startState = startState;
    this.states = states.split("\n");
    this.rules = rules.split("\n");
    this.machines = {};
    this.visualizer = null;
};
FinitMachineFactory.prototype.generateFinitMachine = function()
{
    for(var i =0; i < this.states.length; i++)
    {

        var splittedMachine = this.states[i].split(",");
        var stateName = splittedMachine[0];
        this.machines[splittedMachine[0]] = new State(splittedMachine[0],parseInt(splittedMachine[1]));
    }
    console.log(this.machines);
    this.visualizer = new FinitMachineVisualizer(this.machines);

    for(var y = 0; y <this.rules.length; y++)
    {
        var splittedRule = this.rules[y].split("->");
        var splittedLeftRule = splittedRule[0].split(",");
        this.machines[splittedLeftRule[0]].addState(splittedLeftRule[1],this.machines[splittedRule[1]]);
    }
};
FinitMachineFactory.prototype.visualizeFinitMachines = function()
{
    this.visualizer.draw();
};
FinitMachineFactory.prototype.start = function(pattern)
{

    this.machines[this.startState].callNextState(pattern);
    var result =
    {
        'result':this.machines[this.startState].result,
        'steps':this.machines[this.startState].steps
    };
    return result;
}
