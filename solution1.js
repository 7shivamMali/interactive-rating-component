const rating = document.getElementsByClassName('rating')[0]
const thank_you = document.getElementsByClassName('thankYou')[0]
const ratings = document.querySelectorAll('.rate span')
const submitButton = document.getElementById('sub')

let selectedItem = null
let selectedText = null
let user_rating = document.getElementsByClassName('input')[0];
thank_you.classList.add('hidden');


// select/clear rating
ratings.forEach(item => {
    item.addEventListener('click', () => {
        if (selectedItem == item) {
            item.classList.remove('selected')
            selectedItem = null
            selectedText = null
        } else {
            ratings.forEach(it => {
                if (it.classList.contains('selected')) {
                    it.classList.remove('selected');
                }
            })
            item.classList.add('selected')
            selectedItem = item;
            selectedText = item.innerText
        }
    })
})

// submit 
submitButton.addEventListener('click',() => {
    if (selectedItem) {
        rating.classList.add('hidden');
        thank_you.classList.remove('hidden');
        user_rating.innerText = selectedText;
    } else {
        alert('Please select an rating before submitting!');
    } 
});
