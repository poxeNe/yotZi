

const score_table = {

    upper: {

        ones: false,
        twos: false,
        threes: false,
        fours: false,
        fives: false,
        sixes: false,

    },

    lower: {

        three_of_a_kind: false,
        four_of_a_kind: false,
        full_house: false,
        small_straight: false,
        large_straight: false,
        yahtzee: false,
        chance: false,

    },

};

function scoreDice(dice_pool) {

    const check_scores = array1.filter(element => array2.includes(element));

    if (dice_pool.includes('1, 2, 3, 4, 5')) {

        alert('Small straight.')

    } else if (dice_pool.includes('2, 3, 4, 5, 6')) {

        alert('Large straight.')

    };

    


};

function yotZi() {

    scoreDice(rollDice());

};

