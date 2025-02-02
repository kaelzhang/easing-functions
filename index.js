// Linear easing.
//
// @class Easing.Linear
const Linear = k => k

// Quadratic easing.
//
// @class Easing.Quadratic
const Quadratic = {

  // Ease-in.
  //
  // @method Easing.Quadratic#In
  // @param {number} k - The value to be tweened.
  // @returns {number} k^2.
  In (k) {
    return k * k
  },

  // Ease-out.
  //
  // @method Easing.Quadratic#Out
  // @param {number} k - The value to be tweened.
  // @returns {number} k * (2 - k).
  Out (k) {
    return k * (2 - k)
  },

  // Ease-in/out.
  //
  // @method Easing.Quadratic#InOut
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  InOut (k) {
    let dk = k * 2
    if (dk < 1) {
      return 0.5 * dk * dk
    }
    dk -= 1
    return - 0.5 * (dk * (dk - 2) - 1)
  }

}

// Cubic easing.
//
// @class Easing.Cubic
const Cubic = {

  // Cubic ease-in.
  //
  // @method Easing.Cubic#In
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  In (k) {
    return k * k * k
  },

  // Cubic ease-out.
  //
  // @method Easing.Cubic#Out
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  Out (k) {
    return -- k * k * k + 1
  },

  // Cubic ease-in/out.
  //
  // @method Easing.Cubic#InOut
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  InOut (k) {
    let dk = k * 2
    if (dk < 1) {
      return 0.5 * dk * dk * dk
    }
    dk -= 2
    return 0.5 * (dk * dk * dk + 2)
  }

}

// Quartic easing.
//
// @class Easing.Quartic
const Quartic = {

  // Quartic ease-in.
  //
  // @method Easing.Quartic#In
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  In (k) {
    return k * k * k * k
  },

  // Quartic ease-out.
  //
  // @method Easing.Quartic#Out
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  Out (k) {
    return 1 - (-- k * k * k * k)
  },

  // Quartic ease-in/out.
  //
  // @method Easing.Quartic#InOut
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  InOut (k) {
    let dk = k * 2
    if (dk < 1) {
      return 0.5 * dk * dk * dk * dk
    }
    dk -= 2
    return - 0.5 * (dk * dk * dk * dk - 2)
  }

}

// Quintic easing.
//
// @class Easing.Quintic
const Quintic = {

  // Quintic ease-in.
  //
  // @method Easing.Quintic#In
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  In (k) {
    return k * k * k * k * k
  },

  // Quintic ease-out.
  //
  // @method Easing.Quintic#Out
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  Out (k) {
    return -- k * k * k * k * k + 1
  },

  // Quintic ease-in/out.
  //
  // @method Easing.Quintic#InOut
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  InOut (k) {
    let dk = k * 2
    if (dk < 1) {
      return 0.5 * dk * dk * dk * dk * dk
    }
    dk -= 2
    return 0.5 * (dk * dk * dk * dk * dk + 2)
  }

}

// Sinusoidal easing.
//
// @class Easing.Sinusoidal
const Sinusoidal = {

  // Sinusoidal ease-in.
  //
  // @method Easing.Sinusoidal#In
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  In (k) {
    return 1 - Math.cos(k * Math.PI / 2)
  },

  // Sinusoidal ease-out.
  //
  // @method Easing.Sinusoidal#Out
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  Out (k) {
    return Math.sin(k * Math.PI / 2)
  },

  // Sinusoidal ease-in/out.
  //
  // @method Easing.Sinusoidal#InOut
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  InOut (k) {
    return 0.5 * (1 - Math.cos(Math.PI * k))
  }

}

// Exponential easing.
//
// @class Easing.Exponential
const Exponential = {

  // Exponential ease-in.
  //
  // @method Easing.Exponential#In
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  In (k) {
    return k === 0 ? 0 : 1024 ** (k - 1)
  },

  // Exponential ease-out.
  //
  // @method Easing.Exponential#Out
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  Out (k) {
    return k === 1 ? 1 : 1 - (2 ** (- 10 * k))
  },

  // Exponential ease-in/out.
  //
  // @method Easing.Exponential#InOut
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  InOut (k) {
    if (k === 0) return 0
    if (k === 1) return 1
    const dk = k * 2
    if (dk < 1) {
      return 0.5 * (1024 ** (dk - 1))
    }
    return 0.5 * (- (2 ** (- 10 * (dk - 1))) + 2)
  }

}

// Circular easing.
//
// @class Easing.Circular
const Circular = {

  // Circular ease-in.
  //
  // @method Easing.Circular#In
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  In (k) {
    return 1 - Math.sqrt(1 - k * k)
  },

  // Circular ease-out.
  //
  // @method Easing.Circular#Out
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  Out (k) {
    return Math.sqrt(1 - (-- k * k))
  },

  // Circular ease-in/out.
  //
  // @method Easing.Circular#InOut
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  InOut (k) {
    let dk = k * 2
    if (dk < 1) {
      return - 0.5 * (Math.sqrt(1 - dk * dk) - 1)
    }
    dk -= 2
    return 0.5 * (Math.sqrt(1 - dk * dk) + 1)
  }

}

// Elastic easing.
//
// @class Easing.Elastic
const Elastic = {

  // Elastic ease-in.
  //
  // @method Easing.Elastic#In
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  In (k) {
    let a = 0.1
    const p = 0.4
    let s
    if (k === 0) return 0
    if (k === 1) return 1
    if (a < 1) {
      a = 1
      s = p / 4
    } else {
      s = p * Math.asin(1 / a) / (2 * Math.PI)
    }
    k -= 1
    return - (a * (2 ** (10 * k)) * Math.sin((k - s) * (2 * Math.PI) / p))
  },

  // Elastic ease-out.
  //
  // @method Easing.Elastic#Out
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  Out (k) {
    let a = 0.1
    const p = 0.4
    let s
    if (k === 0) return 0
    if (k === 1) return 1
    if (a < 1) {
      a = 1
      s = p / 4
    } else {
      s = p * Math.asin(1 / a) / (2 * Math.PI)
    }
    return (a * (2 ** (- 10 * k)) * Math.sin((k - s) * (2 * Math.PI) / p) + 1)
  },

  // Elastic ease-in/out.
  //
  // @method Easing.Elastic#InOut
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  InOut (k) {
    let a = 0.1
    const p = 0.4
    let s
    if (k === 0) return 0
    if (k === 1) return 1
    if (a < 1) {
      a = 1
      s = p / 4
    } else {
      s = p * Math.asin(1 / a) / (2 * Math.PI)
    }
    const dk = k * 2
    if (dk < 1) {
      const kInner = dk - 1
      return - 0.5 * (a * (2 ** (10 * kInner)) * Math.sin((kInner - s) * (2 * Math.PI) / p))
    }
    const kInner = dk - 1
    return a * (2 ** (- 10 * kInner)) * Math.sin((kInner - s) * (2 * Math.PI) / p) * 0.5 + 1
  }

}

// Back easing.
//
// @class Easing.Back
const Back = {

  // Back ease-in.
  //
  // @method Easing.Back#In
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  In (k) {
    const s = 1.70158
    return k * k * ((s + 1) * k - s)
  },

  // Back ease-out.
  //
  // @method Easing.Back#Out
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  Out (k) {
    const s = 1.70158
    return -- k * k * ((s + 1) * k + s) + 1
  },

  // Back ease-in/out.
  //
  // @method Easing.Back#InOut
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  InOut (k) {
    const s = 1.70158 * 1.525
    let dk = k * 2
    if (dk < 1) {
      return 0.5 * (dk * dk * ((s + 1) * dk - s))
    }
    dk -= 2
    return 0.5 * (dk * dk * ((s + 1) * dk + s) + 2)
  }

}

// Bounce easing.
//
// @class Easing.Bounce
const Bounce = {

  // Bounce ease-in.
  //
  // @method Easing.Bounce#In
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  In (k) {
    return 1 - Bounce.Out(1 - k)
  },

  // Bounce ease-out.
  //
  // @method Easing.Bounce#Out
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  Out (k) {
    if (k < 1 / 2.75) {
      return 7.5625 * k * k
    } if (k < 2 / 2.75) {
      const k2 = k - (1.5 / 2.75)
      return 7.5625 * k2 * k2 + 0.75
    } if (k < 2.5 / 2.75) {
      const k2 = k - (2.25 / 2.75)
      return 7.5625 * k2 * k2 + 0.9375
    }
    const k2 = k - (2.625 / 2.75)
    return 7.5625 * k2 * k2 + 0.984375
  },

  // Bounce ease-in/out.
  //
  // @method Easing.Bounce#InOut
  // @param {number} k - The value to be tweened.
  // @returns {number} The tweened value.
  InOut (k) {
    if (k < 0.5) return Bounce.In(k * 2) * 0.5
    return Bounce.Out(k * 2 - 1) * 0.5 + 0.5
  }

}

const Easing = {
  Quadratic,
  Cubic,
  Quartic,
  Quintic,
  Sinusoidal,
  Exponential,
  Circular,
  Elastic,
  Back,
  Bounce,
}

for (const key of Object.keys(Easing)) {
  const obj = Easing[key]
  const lowerKey = key.toLowerCase()
  Easing[lowerKey] = obj

  for (const prop of Object.keys(obj)) {
    const fn = obj[prop]
    const lowerProp = prop.toLowerCase()

    // Easing['Quadratic.In']
    Easing[`${key}.${prop}`] = fn

    // Easing['quadratic.in']
    Easing[`${lowerKey}.${lowerProp}`] = fn
    obj[lowerProp] = fn
  }
}

Easing.Linear = Linear
Easing.linear = Linear

module.exports = Easing
