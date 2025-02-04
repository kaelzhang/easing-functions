/*
 * This file draws 31 graphs (one Linear and 3 each for Quadratic, Cubic, Quartic,
 * Quintic, Sinusoidal, Exponential, Circular, Elastic, Back, and Bounce).
 * Each canvas plots the easing function from (0,0) to (1,1), but now the
 * y-axis is re-scaled based on the actual sampled minimum and maximum values,
 * with a small margin. This lets you see parts of the curve that overflow the
 * original [0,1] range.
 */

(function run () {
  // Build an array of graph objects with label and easing function.
  const graphList = []

  // First add the Linear easing function.
  graphList.push({label: 'Linear', fn: Easing.Linear})

  // List of easing types (excluding Linear) that each have In, Out, and InOut variants.
  const types = ['Quadratic', 'Cubic', 'Quartic', 'Quintic', 'Sinusoidal', 'Exponential', 'Circular', 'Elastic', 'Back', 'Bounce']
  const variants = ['In', 'Out', 'InOut']
  types.forEach(type => {
    variants.forEach(variant => {
      graphList.push({
        label: `${type} ${variant}`,
        fn: Easing[type][variant]
      })
    })
  })

  // Function to create and draw a single graph.
  function createGraph ({label, fn}) {
    const canvasSize = 300
    const canvas = document.createElement('canvas')
    canvas.width = canvasSize
    canvas.height = canvasSize
    const ctx = canvas.getContext('2d')

    // Fill the background.
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Sample the function at discrete steps.
    const steps = 100
    const samples = []
    for (let i = 0; i <= steps; i ++) {
      const progress = i / steps
      samples.push({x: progress, y: fn(progress)})
    }

    // Compute the minimum and maximum y-values from the samples.
    let yMin = samples[0].y
    let yMax = samples[0].y
    for (let i = 1; i < samples.length; i ++) {
      if (samples[i].y < yMin) yMin = samples[i].y
      if (samples[i].y > yMax) yMax = samples[i].y
    }
    // Add a margin (10% of the range) to ensure overflow is visible.
    let margin = (yMax - yMin) * 0.1
    if (margin === 0) margin = 0.1  // in case the function is constant.
    const yLow = yMin - margin
    const yHigh = yMax + margin

    // Helper: convert from data (x, y) to canvas pixel coordinates.
    // x is always in [0, 1]. y is scaled from [yLow, yHigh] so that the full range
    // is visible.
    function toCanvas (x, y) {
      return {
        x: x * canvas.width,
        y: canvas.height - ((y - yLow) / (yHigh - yLow)) * canvas.height
      }
    }

    // Draw a light border.
    ctx.strokeStyle = '#ddd'
    ctx.lineWidth = 1
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

    // Plot the easing function curve.
    ctx.strokeStyle = '#007acc'
    ctx.lineWidth = 2
    ctx.beginPath()
    let pt = toCanvas(samples[0].x, samples[0].y)
    ctx.moveTo(pt.x, pt.y)
    for (let i = 1; i < samples.length; i ++) {
      pt = toCanvas(samples[i].x, samples[i].y)
      ctx.lineTo(pt.x, pt.y)
    }
    ctx.stroke()

    // Draw a dashed diagonal reference for the line y = x.
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'
    ctx.lineWidth = 1
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    const diagStart = toCanvas(0, 0)
    ctx.moveTo(diagStart.x, diagStart.y)
    const diagEnd = toCanvas(1, 1)
    ctx.lineTo(diagEnd.x, diagEnd.y)
    ctx.stroke()
    ctx.setLineDash([])

    // Create a container div for the canvas and its label.
    const container = document.createElement('div')
    container.className = 'graph'
    container.appendChild(canvas)
    const title = document.createElement('div')
    title.className = 'title'
    title.textContent = label
    container.appendChild(title)
    return container
  }

  // Append all the graphs to the container in the HTML page.
  const container = document.getElementById('graphContainer')
  graphList.forEach(item => {
    container.appendChild(createGraph(item))
  })
}())
