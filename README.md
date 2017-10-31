# easin

Robert Penner&#39;s easing functions from [phaser](https://github.com/photonstorm/phaser).

## Install

```bash
$ npm i easing-functions
```

## Usage

```js
import Easing from 'easing-functions'

const QO = Easing.Quadratic.Out
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
