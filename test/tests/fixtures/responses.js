module.exports = [
    {
        trigger: 'single',
        response: 'single ok',
        match: 'exact'
    },
    {
        trigger: 'multiple',
        response: ['multiple', 'ok'],
        match: 'exact'
    },
    {
        trigger: 'random',
        response: ['random1 ok', 'random2 ok'],
        match: 'exact',
        pickRandom: true
    }
];
