new Vue({
    el: '#app',
    data: {
        monsterLife:100,
        youLife: 100,
        seen: true,
        messages: [],
        youIsWinner: 'Congratulations you have won',
        monsterIsWinner: 'Sorry, the monster has won',
    },
    methods: {
        startGame: function () {
            this.seen = false;
            this.messages = []
        },
        getRandomInterger: function(lower, upper) {
            return Math.floor(Math.random() * (upper - lower)) + lower;
        },
        monsterAttack: function() {
            number = this.getRandomInterger(5, 20);
            this.youLife = this.youLife - number;
            this.messages.unshift(`Player has been hit by ${number}`)
            this.checkWinner()
        },
        attackButton: function () {
            this.monsterLife = this.monsterLife - 5;
            this.messages.unshift('Monster has been hit by 5');
            this.monsterAttack()
        },
        specialAttackButton: function () {
            this.monsterLife = this.monsterLife - 20;
            this.messages.unshift('Monster has been hit by 20');
            this.monsterAttack()
        },
        healButton: function () {
            this.youLife = this.youLife + 10;
            this.messages.unshift('Player has recovered by 10');
            this.monsterAttack()
        },
        giveUpButton: function () {
            this.monsterLife = 100;
            this.youLife = 100;
            this.seen = true
        },
        checkWinner: function () {
            if (this.youLife <= 0) {
                confirm(this.monsterIsWinner);
                this.giveUpButton()
            }
            else if (this.monsterLife <= 0) {
                confirm(this.youIsWinner);
                this.giveUpButton()
            }
        }
    }

});