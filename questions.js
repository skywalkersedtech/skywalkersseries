// MASTER DATABASE (Sare Questions Yahi Rahenge)
// Key ka naam bilkul waisa hona chahiye jaisa Shifts page par dikhta hai.

const allExamData = {

    // ============================================
    // SHIFT 1: 12 Sep 2025 (Hardest)
    // ============================================
    "12 Sep 2025 | Shift-3 (04:00 PM)": [
        
        // --- REASONING (Q1-Q25) ---
        {
            id: 1,
            section: "Reasoning",
            text: "Select the option that is related to the third word in the same way as the second word is related to the first word.\n\nCow : Milk :: Bee : ?",
            options: ["Silk", "Honey", "Flower", "Water"],
            correct: "B"
        },
        {
            id: 2,
            section: "Reasoning",
            text: "Which number will replace the question mark (?) in the following series?\n\n12, 24, 72, 288, ?",
            options: ["1440", "1200", "1500", "1000"],
            correct: "A"
        },
        // ... Yaha aur Reasoning ke questions aayenge ...

        // --- GK (Q26-Q50) ---
        {
            id: 26,
            section: "GK",
            text: "Who was the first Governor General of Bengal?",
            options: ["Warren Hastings", "Lord Cornwallis", "Lord Clive", "Lord Wellesley"],
            correct: "A"
        },

        // --- QUANT (Q51-Q75) ---
        {
            id: 51,
            section: "Quant",
            text: "If A : B = 3 : 4 and B : C = 8 : 9, then find A : C.",
            options: ["1 : 2", "3 : 2", "2 : 3", "1 : 3"],
            correct: "C"
        },

        // --- ENGLISH (Q76-Q100) ---
        {
            id: 76,
            section: "English",
            text: "Select the most appropriate antonym of the given word.\n\nOPTIMISTIC",
            options: ["Positive", "Hopeful", "Pessimistic", "Bright"],
            correct: "C"
        }
    ],


    // ============================================
    // SHIFT 2: 18 Sep 2025
    // ============================================
    "18 Sep 2025 | Shift-3 (04:00 PM)": [
        {
            id: 1,
            section: "Reasoning",
            text: "Data for this shift is being uploaded...",
            options: ["A", "B", "C", "D"],
            correct: "A"
        }
    ]

    // Aise hi baaki shifts neeche judti jayengi...
};
