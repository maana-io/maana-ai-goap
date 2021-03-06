const { Types } = require('./constants')

const { VariableValue } = require('./VariableValue')
class WorldState {
  constructor( input ){
    const variables = input.variables
    const bs = input.conditions || input.variableValues || []
    if (!Array.isArray(bs)) {
      for ( const b of Object.values(bs)) {
        const v = new VariableValue({...b, variables} )
        this[v.variableId] = v
      }
    } else {
      for ( const b of bs) this[b.variableId] = new VariableValue({...b, variables})
    }
  }

  get id() {
    return `{${Object.values(this).map(x=> x.id).join(',')}}`
  }

  toGraphQL() {
    return Object.values(this).map( x => x.toGraphQL() )
  }
}

module.exports = {
  WorldState
}