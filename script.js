const form = document.querySelector('form')
let all_notes = [];
let result;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    for (const pair of formData.entries()) {
      all_notes.push(pair[1])
    }
    result = ((Number(all_notes[0]) * 3) + Number(all_notes[1]) + Number(all_notes[2]) + (Number(all_notes[3]) * 2) + (Number(all_notes[4]) * 3) + Number(all_notes[5]) + Number(all_notes[6]) + (Number(all_notes[7]) * 2) + Number(all_notes[8]) + Number(all_notes[9]) + Number(all_notes[10])) / 17
    console.log(result)
    document.getElementById('output').textContent = result.toFixed(2)
})