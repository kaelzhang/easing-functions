# easin

Robert Penner&#39;s easing functions from [phaser](https://github.com/photonstorm/phaser).

## Install

```bash
$ cortex install easin --save
```


## Usage

```js
var Easing = require('easin');
```

## Easing.&lt;type&gt;.&lt;output&gt;(x)

type \ output |  In  |  Out  |  InOut  |  None
------------- | ---- | ----- | ------- | ------
Linear        |   x  |   x   |    x    |   ✓
Quadratic     |   ✓  |   ✓   |   ✓     |   x
Cubic         |   ✓  |   ✓   |   ✓     |   x
Quartic       |   ✓  |   ✓   |   ✓     |   x
Quintic       |   ✓  |   ✓   |   ✓     |   x
Sinusoidal    |   ✓  |   ✓   |   ✓     |   x
Exponential   |   ✓  |   ✓   |   ✓     |   x
Circular      |   ✓  |   ✓   |   ✓     |   x
Elastic       |   ✓  |   ✓   |   ✓     |   x
Back          |   ✓  |   ✓   |   ✓     |   x
Bounce        |   ✓  |   ✓   |   ✓     |   x


## License

The MIT License

- (c) 2014 Phaser.io