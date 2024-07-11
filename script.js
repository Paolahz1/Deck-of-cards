const displace = window.displacejs;
document.addEventListener('DOMContentLoaded', () => {
    const suits = ['♥', '♦', '♣', '♠'];
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const reyes = ['J', 'Q', 'K'];
    
    const deck = document.querySelector('.deck');
    
    suits.forEach(suit => {
            values.forEach( values => {
                const card = document.createElement('div');
                card.classList.add('card') /* Aquí le añado directamente la class = card para estilos */
                card.setAttribute('data-card', values);
                card.setAttribute('data-suit', suit);
                // card.innerHTML = `${values}`

                for (let index = 0; index < values; index++) {
                    const suitSpan = document.createElement('span'); /* Crea la cantidad de spans indicadas en el value */
                    suitSpan.classList.add('item')
                    suitSpan.innerHTML = suit
                    card.appendChild (suitSpan)
                }
                deck.append(card)            
            }
            )
            reyes.forEach(rey => {
                const card = document.createElement('div');
                card.classList.add('card')
                card.setAttribute('data-card', rey)
                card.setAttribute('data-suit', suit)
                
                const suitSpan = document.createElement('span'); 
                suitSpan.classList.add('item')
                suitSpan.innerHTML = rey + suit

                card.appendChild(suitSpan)
                deck.append(card)            

            })
    })

    document.querySelectorAll('.card').forEach(e => {

        e.classList.add('flipped');
        e.addEventListener('click', () => {
            e.classList.toggle('flipped');
        });
    
        // e.addEventListener('wheel', c => {
        //     e.style.transform = `rotate(${c.deltaY / 10}deg)`;
        // });
    // Asegúrate de que la función displacejs está definida o importada correctamente
    });
    
})


