/*
 * This file draws 31 graphs (one Linear and 3 each for Quadratic, Cubic, Quartic,
 * Quintic, Sinusoidal, Exponential, Circular, Elastic, Back, and Bounce).
 * Each canvas plots the easing function from (0,0) to (1,1) with the y-axis
 * showing the function's value.
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

    // Helper: convert normalized [0,1] coordinate to canvas pixel coordinate.
    function toCanvas (x, y) {
      return {
        x: x * canvas.width,
        y: canvas.height - y * canvas.height // flip y so that (0,0) is at bottom left.
      }
    }

    // Draw a light border (graph area).
    ctx.strokeStyle = '#ddd'
    ctx.lineWidth = 1
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

    // Plot the easing function curve.
    ctx.strokeStyle = '#007acc'
    ctx.lineWidth = 2
    ctx.beginPath()
    const start = toCanvas(0, fn(0))
    ctx.moveTo(start.x, start.y)
    const steps = 100
    for (let i = 1; i <= steps; i ++) {
      const progress = i / steps
      const yVal = fn(progress)
      const pt = toCanvas(progress, yVal)
      ctx.lineTo(pt.x, pt.y)
    }
    ctx.stroke()

    // Draw a dashed diagonal reference from (0,0) to (1,1).
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
