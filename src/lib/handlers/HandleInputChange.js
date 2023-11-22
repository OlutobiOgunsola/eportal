import { getNull } from "../helpers";

export const HandleInputChange = function(State, StateModifier = getNull, eventData) {
    return StateModifier(State);
}