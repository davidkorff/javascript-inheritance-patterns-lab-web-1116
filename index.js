function Point(x,y){
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return(this.x + ", " + this.y);
}

function Side(length){
  this.length = length

}

function Shape(){}

Shape.prototype.addToPlane = function(x,y){
  this.position = new Point(x,y)
}

Shape.prototype.move =  function(x,y){
  this.position = new Point(x,y)
}

function Circle(radius){
  Shape.call(this, radius)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.area = function() {return Math.PI * this.radius^2}
Circle.prototype.circumference = function() {return 2 * Math.PI *  this.radius}
Circle.prototype.diameter = function() {return this.radius * 2}

function Polygon(sides){
  Shape.call(this, sides)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function() {
  var total = 0
  this.sides.forEach(function (side) {
    total += side.length
  })
  return total
}
Polygon.prototype.numberOfSides = function() {return this.sides.length}

function Quadrilateral(s1, s2, s3, s4) {
  Polygon.call(this, 4)
  this.sides = [new Side(s1), new Side(s2), new Side(s3), new Side(s4)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(s1, s2, s3) {
  Polygon.call(this, 3)
  this.sides = [new Side(s1), new Side(s2), new Side(s3)]
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function() {
  var string = ""
  for (var property in this) {
    if(this.hasOwnProperty(property)) {
      string += property
    }
  }
  return string
}
