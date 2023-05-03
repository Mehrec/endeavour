/**
 * This function accepts an array of strings, checks if there are any anagrams, outputs all the strings.
 * Strings that are anagrams of eachother will be printed next to eachother, non-anagrams will be printed on the next
 * line.
 * @param list
 * @author Mehmet Ak
 */
function anagramSorter(list){
    let sortedList = []
    let usedElements = []

    for (let i = 0; i < list.length; i++) {
        const element = list[i];

        // Checks if an element has been used, if so, skips it.
        if (usedElements.includes(element)) {
            continue
        }
        let anagram = []

        for (let j = 0; j < list.length; j++) {
            const element2 = list[j];

            // Splits the string into characters, checks if the head string includes the same characters as the
            // comparing string and whether the anagram array already inccludes the element.
            // If both conditions are met, pushes the element into anagram array.
            if(element2.split('').every(char => element.includes(char)) && !anagram.includes(element2)){
                anagram.push(element2)
            }
        }
        sortedList.push(anagram)

        // Elements inside the anagram are added to the usedElements array so they're not used again
        usedElements = usedElements.concat(anagram)
    }

    console.log(sortedList);
}

let list = [
    'rope',
    'pore',
    'repo',
    'red rum',
    'murder',
    'listen',
    'silent',
    'endeavour',
];
anagramSorter(list)
