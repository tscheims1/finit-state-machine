/**
 * Created by tscheims on 1/23/16.
 */
FinitMachineVisualizer = function(states)
{

    this.states = states;
}
FinitMachineVisualizer.prototype.draw = function()
{
    $.each(this.states,function(index,value)
    {
        var emptySate = $('<div></div>')
            .attr('class', 'machine-state')
            .attr('id', "state-"+index)
            .text(index)
            .appendTo($('#visual-state-machines'));
    });
};