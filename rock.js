class Rock {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        console.log(emptyCells, newCell);
        if (newCell && this.multiply >= 1000) { // 8 tiv@ aveli poqr vercneluc heto aveli araga xot@ bazmanum
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var newRock = new Rock(newX, newY);
            rockArr.push(newRock);
            this.multiply = 0;
        }
    }
    eat() {
        var emptyCells = this.chooseCell(6);
        var newCell = random(emptyCells);
        if (newCell) {
            this.die()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in personaArr) {
            if (this.x == personaArr[i].x && this.y == personaArr[i].y) {
                personaArr.splice(i, 1);
                break;
            }
        }
    }

}
