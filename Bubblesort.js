
//--------Bubble Sort algorithm-------------------//
//Largest element bubble on top so its called bubble sort


// Time complexity O(N^2)
function Bubblesort(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {
            console.log(array, array[j], array[j + 1])
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp

            }
        }

    }
    return array
}

console.log(Bubblesort([5, 1, 2, 3, 4]))

// final submmision


