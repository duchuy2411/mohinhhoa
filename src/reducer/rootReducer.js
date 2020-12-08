const initialState = { 
    products: [
        {
            images: "https://lh3.googleusercontent.com/h01DMBO4OTG-Uxi9kUCana8ZCIQjgAvHMxcK0ghTKTsmghwY4ZRaaSSKp2_lExi3c-ovLHA7F1SMkGfR180=w500-rw",
            name: "'Ổ cứng SSD Crucial BX500 240GB 2.5' SATA 3 - CT240BX500SSD1",
            price: 1300000
        },
        {
            images: "https://lh3.googleusercontent.com/h01DMBO4OTG-Uxi9kUCana8ZCIQjgAvHMxcK0ghTKTsmghwY4ZRaaSSKp2_lExi3c-ovLHA7F1SMkGfR180=w500-rw",
            name: "'Ổ cứng SSD Crucial BX500 240GB 2.5' SATA 3 - CT240BX500SSD1",
            price: 1300000
        },
        {
            images: "https://lh3.googleusercontent.com/h01DMBO4OTG-Uxi9kUCana8ZCIQjgAvHMxcK0ghTKTsmghwY4ZRaaSSKp2_lExi3c-ovLHA7F1SMkGfR180=w500-rw",
            name: "'Ổ cứng SSD Crucial BX500 240GB 2.5' SATA 3 - CT240BX500SSD1",
            price: 1300000
        },
        {
            images: "https://lh3.googleusercontent.com/h01DMBO4OTG-Uxi9kUCana8ZCIQjgAvHMxcK0ghTKTsmghwY4ZRaaSSKp2_lExi3c-ovLHA7F1SMkGfR180=w500-rw",
            name: "'Ổ cứng SSD Crucial BX500 240GB 2.5' SATA 3 - CT240BX500SSD1",
            price: 1300000
        },
        {
            images: "https://lh3.googleusercontent.com/h01DMBO4OTG-Uxi9kUCana8ZCIQjgAvHMxcK0ghTKTsmghwY4ZRaaSSKp2_lExi3c-ovLHA7F1SMkGfR180=w500-rw",
            name: "'Ổ cứng SSD Crucial BX500 240GB 2.5' SATA 3 - CT240BX500SSD1",
            price: 1300000
        }
    ]
 }

export default function reducerApp(state = initialState, action) {
    switch (action.type) {
        case ("ADD_TODO"): {
            return {
                value: action.payload
            }
        }
    }
    return state;
}