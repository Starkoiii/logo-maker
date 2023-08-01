// shape colors
class Shapes {
  constructor() {
      this.color = "";
  }
  setColor(color) {
      this.color = color
  }

} 
// Circles and the positions of the circle
class Circle extends Shapes {
  render() {
      return `<circle cx="150" cy="100" r="90" fill="${this.color}"/>`
  }
}

// Triangles and the positions of the triangles
class Triangle extends Shapes {
  render() {
      return `<polygon points="150, 10 260, 182 40, 182" fill="${this.color}"/>`
  
  }
}

// Created class for Square and the positions of the square
class Square extends Shapes {
  render() {
      return `<rect x="75" y="25" width="150" height="150" fill= "${this.color}"/>`
  }
}


module.exports = {Circle, Triangle, Square};