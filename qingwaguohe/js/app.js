// 定义一些高度的常量
var TILE_WIDTH = 101,
    TILE_HEIGHT = 83;

// 这是我们的玩家要躲避的敌人
var Enemy = function(col, row) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    // 根据输入的行与列来确定敌人的初始位置
    this.x = TILE_WIDTH * col;
    this.y = TILE_HEIGHT * row - 20;

    // 随机给敌人一个速度值
    var _speed = [0.5, 1, 1.5, 2];
    this.speed = _speed[Math.floor((Math.random() * _speed.length))];

    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += TILE_WIDTH * dt * this.speed;
    while (this.x > TILE_WIDTH * 5) {
        this.x -= TILE_WIDTH * 5;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Char = function() {
    // 主人公初始位置
    this.x = TILE_WIDTH;
    this.y = TILE_HEIGHT * 5 - 20;
    this.sprite = 'images/char-princess-girl.png';
};

Char.prototype.update = function(x, y) {
    this.x += x;
    this.y += y;
};

Char.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Char.prototype.handleInput = function(keys) {
    if (keys === 'left') {
        if (this.x > 0) {
            this.update(-TILE_WIDTH, 0);
        }
    }
    if (keys === 'right') {
        if (this.x + TILE_WIDTH < TILE_WIDTH * 5) {
            this.update(TILE_WIDTH, 0);
        }
    }
    if (keys === 'up') {
        if (this.y > 0) {
            this.update(0, -TILE_HEIGHT);
        }
    }
    if (keys === 'down') {
        if (this.y + TILE_HEIGHT < TILE_HEIGHT * 5) {
            this.update(0, TILE_HEIGHT);
        }
    }
};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [
    new Enemy(4, 1),
    new Enemy(1, 1),
    new Enemy(3, 2),
    new Enemy(5, 2),
    new Enemy(4, 3),
    new Enemy(2, 3)
];

var player = new Char();

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
