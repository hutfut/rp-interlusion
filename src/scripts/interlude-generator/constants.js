const INTERLUDE_TYPES = {
    DOWNTIME: 0,
    BACKSTORY: 1,
    TREK: 2,
}

const BASE_DOWNTIME_SET = [
    {
        title: 'Downtime: Alone',
        description: 'The hero spends time alone in quiet contemplation. What do they do?'
    },    
    {
        title: 'Downtime: Practice',
        description: 'The hero practices a skill. What is it?'
    },    
    {
        title: 'Downtime: Study',
        description: 'The hero studies or works on an object of some sort. What is it?'
    },    
    {
        title: 'Downtime: Outburst',
        description: 'The hero broods or is angry about something. What is it, and how do they misbehave?'
    },
]

const BASE_BACKSTORY_SET = [
    {
        title: 'Backstory: Triumph',
        description: "The hero tells a tale of a great victory or personal triumph"
    },    
    {
        title: 'Backstory: Kinship',
        description: 'The hero talks about their greatest love or friend — lost, found, present, or waiting on them back home'
    },    
    {
        title: 'Backstory: Desire',
        description: 'The hero talks about something they want or already have. It might be a material possession, recognition, a political goal, or even a trip they wish to take to some amazing destination'
    },    
    {
        title: 'Backstory: Misfortune',
        description: 'The hero tells a tale of misfortune from their past, perhaps revealing something of their hindrances or a dark secret'
    },
]

const BASE_TREK_SET = [
    {
        title: 'Trek: Obstacle',
        description: 'A difficult physical obstacle the group negotiated along the way'
    },    
    {
        title: 'Trek: Hardship',
        description: 'How the party endured a trying hardship on the journey'
    },    
    {
        title: 'Trek: Convenience',
        description: 'How the group found something that helped them along the way, such as an oasis, minor treasure, ammo, food, friendly locals, etc'
    },    
    {
        title: 'Trek: Tragedy',
        description: 'Something terrible happened during the journey: the tragic death of a favored Extra, spoiled or lost supplies, a mechanical breakdown, abysmal weather, and so on'
    },
]

const BASE_INTERLUDE_SETS = {
    0: BASE_DOWNTIME_SET,
    1: BASE_BACKSTORY_SET,
    2: BASE_TREK_SET
}

export { INTERLUDE_TYPES, BASE_INTERLUDE_SETS }