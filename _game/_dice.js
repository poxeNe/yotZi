
function rollDice() {

    // amount of rolls the user is allowed to make
    let total_rolls = 3;

    // current turn of the game
    let current_turn = 1

    // array of initial dice results
    const dice_pool = [];

    // current dice pool
    const dice_held = [];

    // array of rerolled dice
    const rerolled_dice = [];

    // take in an int 1 - 5 and return a spoken string value (e.g. 1 -> first, 2 -> second, etc.)
    function getSpokenInt(int) {

        const mappings = {

            1: 'first',
            2: 'second',
            3: 'third',
            4: 'fourth',
            5: 'fifth',

        };

        return mappings[int]

    };

    for (let i = 0; i < 5; i ++) {

        dice_pool.push(random.dice(1, 6));

    };

    console.log('First roll: ' + dice_pool)

    for (let i = 1; i < total_rolls; i ++) {

        current_turn ++

        let num_dice_to_hold = prompt(

            // backticks allow for interpolation, similar to f"var is {var}"" in python.
            `
            Current dice pool:
                #1: (${dice_pool[0]}), #2: (${dice_pool[1]}), #3: (${dice_pool[2]}), #4: (${dice_pool[3]}), #5: (${dice_pool[4]}).

            How many dice would you like to hold?
            `

        );

        if (num_dice_to_hold == '5') {

            total_rolls = 0;

            alert(

                `
                Your final results are:
                    Die #1: ${dice_pool[0]}.
                    Die #2: ${dice_pool[1]}.
                    Die #3: ${dice_pool[2]}.
                    Die #4: ${dice_pool[3]}.
                    Die #5: ${dice_pool[4]}.
                `

            );

        } else if (num_dice_to_hold == '0') {

            dice_pool.splice(0, 5);

            for (let i = 0; i < 5; i ++) {

                dice_pool.push(random.dice(1, 6));
        
            };

            if (current_turn < 3) {

                console.log(`Second roll: ${dice_pool}`);

            } else {

                console.log(`Final roll: ${dice_pool}`);

            };

        } else {

            for (let i = 0; i < num_dice_to_hold; i ++) {

                let chosen_die = prompt(

                    `
                    Dice pool:
                        #1: (${dice_pool[0]}), #2: (${dice_pool[1]}), #3: (${dice_pool[2]}), #4: (${dice_pool[3]}), #5: (${dice_pool[4]}).

                    Dice held:
                        ${dice_held}

                    Enter the ${getSpokenInt(i + 1)} die you'd like to hold:
                    `
                    
                );

                dice_held.push(dice_pool[chosen_die - 1]);

            };

            for (let i = 0; i < 5 - dice_held.length; i ++) {

                rerolled_dice.push(random.dice(1, 6));

            };

            dice_pool.splice(0, 5);

            // console.log('Dice held: ' + dice_held);
            // console.log('Re-rerolled dice: ' + rerolled_dice);
            // console.log('Spliced dice_pool: ' + dice_pool);

            for (let i = 0; i < dice_held.length; i ++) {

                dice_pool.push(dice_held[i]);

            };

            dice_held.splice(0, 5);

            for (let i = 0; i < rerolled_dice.length; i ++) {

                dice_pool.push(rerolled_dice[i]);

            };

            rerolled_dice.splice(0, 5);

            if (current_turn < 3) {

                console.log(`Second roll: ${dice_pool}`);

            } else {

                console.log(`Final roll: ${dice_pool}`);

            };

        };

    };

    return dice_pool;
    
};