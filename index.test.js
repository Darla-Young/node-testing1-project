const utils = require('./index')


describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    class obj {
      constructor() {
        this.foo = '  foo '
        this.bar = 'bar '
        this.baz = ' baz'
      }
    }
    const input = new obj
    let res = utils.trimProperties(input)
    expect(res).toEqual({ foo: 'foo', bar: 'bar', baz: 'baz' })
    expect(res).not.toBeInstanceOf(obj)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    class obj {
      constructor() {
        this.foo = '  foo '
        this.bar = 'bar '
        this.baz = ' baz'
      }
    }
    const input = new obj
    let res = utils.trimPropertiesMutation(input)
    expect(res).toEqual({ foo: 'foo', bar: 'bar', baz: 'baz' })
    expect(res).toBeInstanceOf(obj)}
    )
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const res = utils.findLargestInteger(input)
    expect(res).toEqual(3)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })

  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toEqual(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let count = counter.count
    for (let i = count; i > -1; i--) count = counter.countDown()
    expect(count).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  const callNext = num => {
    let season = ''
    for (let i = num; i > 0; i--) season = seasons.next()
    return season
  }
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(callNext(1)).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(callNext(2)).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(callNext(3)).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(callNext(4)).toBe('spring')})
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(callNext(5)).toBe('summer')})
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    expect(callNext(40)).toBe('spring')})
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  const milesToDrive = [300, 600, 900]
  const galToRefuel = [10, 20, 30]

  test('[15] driving the car returns the updated odometer', () => {
    const odometerStart = focus.odometer
    const returned = focus.drive(milesToDrive[0])
    expect(returned).toEqual(focus.odometer)
    expect(returned).not.toEqual(odometerStart)
  })
  test('[16] driving the car uses gas', () => {
    const fuelStart = focus.fuel
    focus.drive(milesToDrive[0])
    expect(focus.fuel).toBeLessThan(fuelStart)
  })
  test('[17] refueling allows to keep driving', () => {
    const maxDistance = focus.tank * focus.mileage
    const odometer = focus.drive(milesToDrive[2]) // greater than max distance
    expect(odometer).toEqual(maxDistance)
    expect(focus.odometer).toEqual(odometer)
    expect(focus.fuel).toEqual(0)

    focus.refuel(galToRefuel[0])
    focus.drive(milesToDrive[0])
    expect(focus.odometer).toBeGreaterThan(odometer)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const fullTank = focus.tank
    expect(focus.fuel).toEqual(fullTank)
    focus.refuel(galToRefuel[2])
    expect(focus.fuel).toEqual(fullTank)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  const even = [-2, 0, 14, 136, 16748]
  const odd = [-1, 3, 15, 137, 16749]
  test('[19] resolves true if passed an even number', () => {
    even.forEach(async num => {
      const res = await utils.isEvenNumberAsync(num)
      expect(res).toBeTruthy()
    })
  })
  test('[20] resolves false if passed an odd number', () => {
    odd.forEach(async num => {
      const res = await utils.isEvenNumberAsync(num)
      expect(res).toBeFalsy()
    })
  })
})
