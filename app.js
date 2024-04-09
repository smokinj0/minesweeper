/*
Create a function that takes a grid of $ and - where each ($) represents a mine and each (-) represents mine-free spot
Return an array where each ($) is replaced by a digit indicating the number of mines immediately mined adjacent to the spot

mineGrid([
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "$", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"]
])

output -> [
   ["0", "0", "0", "0", "0"],
    ["0", "1", "1", "1", "0"],
    ["0", "1", "$", "1", "0"],
    ["0", "1", "1", "1", "0"],
    ["0", "0", "0", "0", "0"]
]) 
]
*/
//Create a function that accepts a 2D array arr
const mineGrid = (arr) => {
    //Create a helper function that access the element position (y,x) in arr. if the y index is valid or exists 
    //I want to return arr[y][x]; otherwise return null (This will prevent accessing undefined elements and to avoid errors
    const checkAccess = (y,x) => arr[y] ? arr[y][x] : null
    //Note Create another helper function that calculates the number of adjacent mines around the ell at position (y,x)
    const getMine = (x,y) => {
        //Note an array is costructed with elements that represents the content of adjacent cells
        //we are going to use checkAccess for each of the eight possible adjacent positions
        return [
            checkAccess(y+1, x), //checks the cell directly below the current (y,x)
             checkAccess(y+1, x+1), //checks cell diagonally below and to the right of the current cell
              checkAccess(y+1, x-1), //checks cell  diagonally below and to the left of the current cell
             checkAccess(y, x+1),//check cell directly to the right of current cell
            checkAccess(y, x-1)//check cell directly to the left
            checkAccess(y-1, x),//check cell directly above
            checkAccess(y-1, x+1)//Checks diagonally above and to the right
            checkAccess(y-1, x-1)//checks cell diagonally above and to the left
        //Note construct an array of values that represent the contents of cells adjacent, after the constructing of the array
    //we will use filter method to keep only those elements that are mines ('$') .
      ].filter(adjCell = adjCell === "$").length.toString()
    }
    return arr.map((r,y) => r.map((c,x) => c === "-" ? getMine(x,y) : c))
}
