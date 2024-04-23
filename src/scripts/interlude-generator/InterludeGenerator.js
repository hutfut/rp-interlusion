import {INTERLUDE_TYPES} from './constants'
import {BASE_INTERLUDE_SETS} from './constants'
import _ from 'lodash'

class InterludeSet {
    constructor(downtime, backstory, trek) {
        this.downtime = downtime
        this.backstory = backstory
        this.trek = trek
    }
}

class Interlude {
    constructor(type, title, description) {
        this.type = type;
        this.title = title;
        this.description = description;
    }
}

function generateDefaultInterludeSet() {
    return new InterludeSet(
        getRandomInterludeByType(INTERLUDE_TYPES.DOWNTIME),
        getRandomInterludeByType(INTERLUDE_TYPES.BACKSTORY),
        getRandomInterludeByType(INTERLUDE_TYPES.TREK)
    )
}

function getRandomInterludeByType(interludeType) {
    return _.sample(BASE_INTERLUDE_SETS[interludeType])
}

export default generateDefaultInterludeSet;

